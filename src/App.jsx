import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

// Import all assets
import spillAudio from './assets/Spill.m4a';
import footstepsAudio from './assets/Footsteps.m4a';
import screamAudio from './assets/Scream.m4a';
import breathAudio from './assets/Breath.m4a';
import oldmanImg from './assets/oldman.png';
import trollImg from './assets/linor.png';
import righthandImg from './assets/righthand.png';
import smokeleftImg from './assets/smokinghand-removebg-preview.png';
import thumbsupImg from './assets/thumsupp-removebg-preview.png';
import flashlightImg from './assets/flashlight-removebg-preview.png';
import exitImg from './assets/exit.png';
import jumpscareImg from './assets/jumscare.jpg';
import wallImg from './assets/wall.jpg';

export default function LiminalMallCollector() {
  const canvasRef = useRef(null);
  const mountRef = useRef(null);
  const rendererRef = useRef(null);
  const audioRef = useRef(null);
  const footRef = useRef(null);
  const heartbeatRef = useRef(null);
  const screamRef = useRef(null);
  const breathRef = useRef(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [started, setStarted] = useState(false);
  const [time, setTime] = useState(0);
  const [entityDistance, setEntityDistance] = useState(100);
  const [trollDistance, setTrollDistance] = useState(100);
  const [sanity, setSanity] = useState(100); // 0-100, decreases near entities
  const [jumpscareActive, setJumpscareActive] = useState(false);
  const [jumpscareIntensity, setJumpscareIntensity] = useState(0); // 0 to 1
  const [currentHand, setCurrentHand] = useState(1); // 1 = righthand, 2 = smokeleft, 3 = thumbsup
  const [puzzleSequence, setPuzzleSequence] = useState([]); // The correct sequence to unlock exit
  const [discoveredHands, setDiscoveredHands] = useState([]); // Hands player has found
  const [inputSequence, setInputSequence] = useState([]); // Player's current input at exit
  const [showPuzzleHint, setShowPuzzleHint] = useState('');
  const [hasFlashlight, setHasFlashlight] = useState(false); // Has player found flashlight
  const [flashlightPower, setFlashlightPower] = useState(100); // 0-100%
  const [flashlightActive, setFlashlightActive] = useState(false); // Is flashlight turned on
  const flashlightRef = useRef({ hasFlashlight: false, power: 100, active: false }); // Ref for immediate access in key handlers
  const gameStateRef = useRef({ score: 0, gameOver: false, won: false, started: false });

  useEffect(() => {
    if (!started || !mountRef.current) return;

    // Generate random puzzle sequence when game starts
    const generatePuzzleSequence = () => {
      const sequence = [];
      for (let i = 0; i < 6; i++) {
        sequence.push(Math.floor(Math.random() * 3) + 1); // Random 1, 2, or 3
      }
      return sequence;
    };
    
    const generatedSequence = generatePuzzleSequence();
    setPuzzleSequence(generatedSequence);
    console.log('Puzzle sequence generated:', generatedSequence);

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x1a1a1a, 5, 30); // Dark gray/black fog, starts closer
    scene.background = new THREE.Color(0x0a0a0a); // Very dark gray/black background

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 40);
    // Camera position will be set from playerPos in the animate loop

    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(0.5);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer; // Store for later use

    // Background audio (looped) - Spill.m4a in assets
    try {
      audioRef.current = new Audio(spillAudio);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.30; // moderate volume
      // Do not auto-play here; will attempt playback when game becomes active
    } catch (e) {
      console.warn('Could not initialize background audio:', e);
      audioRef.current = null;
    }

    // Footsteps audio (plays while moving)
    try {
      footRef.current = new Audio(footstepsAudio);
      footRef.current.loop = true;
      footRef.current.volume = 0.7;
    } catch (e) {
      console.warn('Could not initialize footsteps audio:', e);
      footRef.current = null;
    }

    // Scream audio (plays on death)
    try {
      screamRef.current = new Audio(screamAudio);
      screamRef.current.volume = 0.8;
    } catch (e) {
      console.warn('Could not initialize scream audio:', e);
      screamRef.current = null;
    }

    // Breath audio (plays when low sanity or near death)
    try {
      breathRef.current = new Audio(breathAudio);
      breathRef.current.volume = 0.8;
      breathRef.current.loop = true;
      console.log('Breath audio initialized successfully');
    } catch (e) {
      console.warn('Could not initialize breath audio:', e);
      breathRef.current = null;
    }

    renderer.domElement.style.imageRendering = 'pixelated';
    renderer.domElement.style.filter = 'contrast(1.2) saturate(1.3) brightness(0.9)';
    renderer.domElement.style.cursor = 'none';

    const ambientLight = new THREE.AmbientLight(0x666688, 0.35); // Darker ambient light
    scene.add(ambientLight);

    const neonLight1 = new THREE.PointLight(0xff00ff, 0.7, 12); // Slightly darker and shorter range
    neonLight1.position.set(-10, 3, -5);
    scene.add(neonLight1);

    const neonLight2 = new THREE.PointLight(0x00ffff, 0.7, 12);
    neonLight2.position.set(10, 3, -10);
    scene.add(neonLight2);

    const neonLight3 = new THREE.PointLight(0xffff00, 0.7, 12);
    neonLight3.position.set(0, 3, -15);
    scene.add(neonLight3);

    // Additional lights for better coverage
    const neonLight4 = new THREE.PointLight(0xff00ff, 0.7, 12);
    neonLight4.position.set(-20, 3, 10);
    scene.add(neonLight4);

    const neonLight5 = new THREE.PointLight(0x00ffff, 0.7, 12);
    neonLight5.position.set(20, 3, 10);
    scene.add(neonLight5);

    const neonLight6 = new THREE.PointLight(0xffff00, 0.7, 12);
    neonLight6.position.set(-15, 3, -20);
    scene.add(neonLight6);

    const neonLight7 = new THREE.PointLight(0xff00ff, 0.7, 12);
    neonLight7.position.set(15, 3, -20);
    scene.add(neonLight7);

    const neonLight8 = new THREE.PointLight(0x00ffff, 0.7, 12);
    neonLight8.position.set(0, 3, 20);
    scene.add(neonLight8);

    // Floor - simple gray mall tiles
    const floorCanvas = document.createElement('canvas');
    floorCanvas.width = 128;
    floorCanvas.height = 128;
    const fCtx = floorCanvas.getContext('2d');
    
    // Create simple tile pattern
    const tileSize = 64;
    for (let y = 0; y < 2; y++) {
      for (let x = 0; x < 2; x++) {
        // Alternate between two shades of gray for checkerboard
        const isLight = (x + y) % 2 === 0;
        fCtx.fillStyle = isLight ? '#cccccc' : '#aaaaaa';
        fCtx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
        
        // Add subtle grout lines
        fCtx.strokeStyle = '#999999';
        fCtx.lineWidth = 2;
        fCtx.strokeRect(x * tileSize, y * tileSize, tileSize, tileSize);
      }
    }
    
    const floorTexture = new THREE.CanvasTexture(floorCanvas);
    floorTexture.wrapS = THREE.RepeatWrapping;
    floorTexture.wrapT = THREE.RepeatWrapping;
    floorTexture.repeat.set(15, 15);
    floorTexture.magFilter = THREE.NearestFilter;
    floorTexture.minFilter = THREE.NearestFilter;
    
    const floorGeometry = new THREE.PlaneGeometry(100, 100);
    const floorMaterial = new THREE.MeshLambertMaterial({ 
      map: floorTexture
    });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    scene.add(floor);

    // Ceiling
    const ceilingGeometry = new THREE.PlaneGeometry(100, 100);
    const ceilingMaterial = new THREE.MeshLambertMaterial({ 
      color: 0x334455,
      emissive: 0x222233,
      emissiveIntensity: 0.2
    });
    const ceiling = new THREE.Mesh(ceilingGeometry, ceilingMaterial);
    ceiling.rotation.x = Math.PI / 2;
    ceiling.position.y = 4;
    scene.add(ceiling);

    // Load wall texture
    const wallTextureLoader = new THREE.TextureLoader();
    const wallTexture = wallTextureLoader.load(wallImg);
    wallTexture.wrapS = THREE.RepeatWrapping;
    wallTexture.wrapT = THREE.RepeatWrapping;
    wallTexture.magFilter = THREE.NearestFilter;
    wallTexture.minFilter = THREE.NearestFilter;

    // Collision walls
    const walls = [];
    
    function createWall(x, z, rotY, width = 10) {
      const wallGeometry = new THREE.BoxGeometry(width, 4, 0.5, 1, 1, 1);
      
      // Apply texture with proper repeat based on wall width
      const wallMat = wallTexture.clone();
      wallMat.repeat.set(width / 2, 2); // Repeat texture based on wall size
      wallMat.needsUpdate = true;
      
      const wallMaterial = new THREE.MeshLambertMaterial({ 
        map: wallMat
      });
      const wall = new THREE.Mesh(wallGeometry, wallMaterial);
      wall.position.set(x, 2, z);
      wall.rotation.y = rotY;
      scene.add(wall);
      
      // Store wall bounds for collision
      // BoxGeometry(width, 4, 0.5) creates a box extending along X-axis initially
      // rotY = 0: wall extends along X axis (width along X, 0.5 thickness along Z)
      // rotY = Math.PI/2 (90°): wall rotated, now extends along Z axis (width along Z, 0.5 thickness along X)
      const isRotated = Math.abs(rotY) > 0.1;
      const halfThickness = 0.25; // Half of wall thickness (0.5 / 2)
      
      const bounds = {
        minX: x - (isRotated ? halfThickness : width/2),
        maxX: x + (isRotated ? halfThickness : width/2),
        minZ: z - (isRotated ? width/2 : halfThickness),
        maxZ: z + (isRotated ? width/2 : halfThickness)
      };
      walls.push(bounds);
      
      return wall;
    }

    // SIMPLE GRID-BASED MAZE
    // Map layout: X = wall, . = open space, O = large open area
    // Each character = 1 unit. Map extends to outer walls!
    const mazeLayout = [
      "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",  // Row -16 (outer wall)
      "X........X......X..............X",  // Row -15 (start area - large open)
      "X....XX..................X.....X",  // Row -14
      "X.X...XX.X...XX.X....XX.XX...X.X",
      "X.X.......................X....X",
      "X.X.XX....XX....XX....XX..X.XX.X",
      "X...X..............X......X....X",
      "X...X....X.XXX..X..X.X....X..X.X",
      "X.X.X............X.X...........X",  // Row -8
      "X.....X.X..X...X...X..X.XX.XX..X",
      "X..X.X.XX..........X.............X",  // Large open area
      "X.......X..X...XX..............X",  // Large open area
      "X....X..X.XX..XX.X.........X...X",
      "X.X..X..X........X..X......X.X.X",
      "X.XX.X..X..X..X.X..X.X..X.....X.X.X",  // Row -1
      "X....X...........X.X.X.XX.....X",  // Row 0 (center)
      "X...XX....x.X.X.X...X......XXX.X",
      "X......X.........XX.X..X.X.....X",
      "X.X....X...X...X.X..............X.X",
      "X.X....X........X.XX.XX..X.X.X.X",
      "X.X.X..X.X..X...X............X.X",
      "X.X..........X..X.X..X.X..XX.X.X",
      "X.XX...X.XXX.X..X..........X...X",  // Row 8 This is near the exit 
      "X........X.....XX......X...X.XXX",
      "X.XX..XX.X...XX................X",
      "X.X..............X..XX...X.XXX.X",
      "X.X.X.....X.X.................X",  // Large open area near exit
      "X.X................XX..........X",  // Large open area near exit
      "X.X............................X",  // Row 14 (exit area)
      "X.......XX...........XX........X",  // Row 15
      "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"   // Row 16 (outer wall)
    ];
    
    // Convert maze layout to walls
    const cellSize = 2; // Each cell is 2x2 units for wider hallways
    for (let row = 0; row < mazeLayout.length; row++) {
      for (let col = 0; col < mazeLayout[row].length; col++) {
        if (mazeLayout[row][col] === 'X') {
          // Calculate position (center of grid is 0,0)
          const x = (col - mazeLayout[row].length / 2) * cellSize;
          const z = (row - mazeLayout.length / 2) * cellSize;
          
          // Create a wall pillar at this position
          createWall(x, z, 0, cellSize * 0.9);
          createWall(x, z, Math.PI/2, cellSize * 0.9);
        }
      }
    }

    // Debug: Log wall bounds
    console.log('Created', walls.length, 'walls with bounds:', walls);

    // Collision detection function - MUST be defined after walls are created
    function checkCollision(pos, radius = 0.4) {
      for (const wall of walls) {
        // AABB collision check: check if player circle overlaps with wall rectangle
        if (pos.x + radius > wall.minX && 
            pos.x - radius < wall.maxX &&
            pos.z + radius > wall.minZ && 
            pos.z - radius < wall.maxZ) {
          return true;
        }
      }
      return false;
    }



    // EXIT DOOR - The way out!
    const exitPosition = { x: 28, z: 28 }; // Top-right area (large open area near exit) - doubled scale
    const exitTriggerRadius = 3; // How close you need to be
    
    // Create EXIT door sprite
    const exitTextureLoader = new THREE.TextureLoader();
    const exitTexture = exitTextureLoader.load(exitImg);
    exitTexture.magFilter = THREE.NearestFilter;
    exitTexture.minFilter = THREE.NearestFilter;
    
    const exitGeometry = new THREE.PlaneGeometry(4, 4); // 4x4 units
    const exitMaterial = new THREE.MeshBasicMaterial({
      map: exitTexture,
      transparent: true,
      side: THREE.DoubleSide,
      emissive: 0x00ff00,
      emissiveIntensity: 0.3
    });
    
    const exitDoor = new THREE.Mesh(exitGeometry, exitMaterial);
    exitDoor.position.set(exitPosition.x, 2, exitPosition.z);
    scene.add(exitDoor);
    
    // Add exit light
    const exitLight = new THREE.PointLight(0x00ff00, 1.5, 10);
    exitLight.position.set(exitPosition.x, 3, exitPosition.z);
    scene.add(exitLight);

    // Scary entity - load old man image as billboard sprite
    function createEntity() {
      const textureLoader = new THREE.TextureLoader();
      const texture = textureLoader.load(oldmanImg);
      texture.magFilter = THREE.NearestFilter;
      texture.minFilter = THREE.NearestFilter;
      
      // Create a plane that will always face the camera (billboard)
      const geometry = new THREE.PlaneGeometry(3, 4); // 3 units wide, 4 units tall
      const material = new THREE.MeshBasicMaterial({ 
        map: texture,
        transparent: true,
        side: THREE.DoubleSide
      });
      
      const sprite = new THREE.Mesh(geometry, material);
      sprite.position.set(-10, 2, -24); // Start entity in top open area (row -14/-15, far from any X)
      scene.add(sprite);
      return sprite;
    }

    const entity = createEntity();
    
    // Debug: Check if entity spawns in collision
    console.log('Entity spawned at:', entity.position.x, entity.position.z);
    console.log('Entity collision check:', checkCollision(entity.position, 0.75));

    // Troll entity - glowing second entity
    function createTroll() {
      const textureLoader = new THREE.TextureLoader();
      const texture = textureLoader.load(trollImg);
      texture.magFilter = THREE.NearestFilter;
      texture.minFilter = THREE.NearestFilter;
      
      // Create a plane that will always face the camera (billboard)
      const geometry = new THREE.PlaneGeometry(3, 4); // 3 units wide, 4 units tall
      const material = new THREE.MeshBasicMaterial({ 
        map: texture,
        transparent: true,
        side: THREE.DoubleSide,
        emissive: 0x00ff88, // Greenish glow
        emissiveIntensity: 0.4
      });
      
      const sprite = new THREE.Mesh(geometry, material);
      sprite.position.set(20, 2, 20); // Start in different area (bottom right)
      scene.add(sprite);
      
      // Add point light for glow effect
      const glowLight = new THREE.PointLight(0x00ff88, 2, 8);
      glowLight.position.set(20, 2, 20);
      scene.add(glowLight);
      sprite.userData.glowLight = glowLight; // Store reference to update position
      
      return sprite;
    }

    const troll = createTroll();
    
    console.log('Troll spawned at:', troll.position.x, troll.position.z);

    // Player's hand sprite - attached to camera
    // Load all hand textures
    const textureLoader = new THREE.TextureLoader();
    const rightHandTexture = textureLoader.load(righthandImg);
    rightHandTexture.magFilter = THREE.NearestFilter;
    rightHandTexture.minFilter = THREE.NearestFilter;

    const smokeLeftTexture = textureLoader.load(smokeleftImg);
    smokeLeftTexture.magFilter = THREE.NearestFilter;
    smokeLeftTexture.minFilter = THREE.NearestFilter;

    const thumbsUpTexture = textureLoader.load(thumbsupImg);
    thumbsUpTexture.magFilter = THREE.NearestFilter;
    thumbsUpTexture.minFilter = THREE.NearestFilter;
    
    function createHandSprite() {
      const handGeometry = new THREE.PlaneGeometry(0.8, 0.8); // Size of hand sprite
      const handMaterial = new THREE.MeshBasicMaterial({
        map: rightHandTexture, // Start with right hand
        transparent: true,
        side: THREE.DoubleSide,
        depthTest: false, // Always render on top
        depthWrite: false
      });
      
      const handSprite = new THREE.Mesh(handGeometry, handMaterial);
      // Position relative to camera: right and down, further from camera
      handSprite.position.set(0.4, -0.3, -0.8); // x=right, y=down, z=away from camera (moved from -0.4 to -0.8)
      handSprite.renderOrder = 999; // Render last (on top)
      
      return handSprite;
    }

    const playerHand = createHandSprite();
    camera.add(playerHand); // Attach to camera so it moves with view
    
    // Flashlight sprite for left hand
    const flashlightTexture = textureLoader.load(flashlightImg);
    flashlightTexture.magFilter = THREE.NearestFilter;
    flashlightTexture.minFilter = THREE.NearestFilter;
    
    const flashlightGeometry = new THREE.PlaneGeometry(0.6, 0.8);
    const flashlightMaterial = new THREE.MeshBasicMaterial({
      map: flashlightTexture,
      transparent: true,
      side: THREE.DoubleSide,
      depthTest: false,
      depthWrite: false
    });
    
    const playerFlashlight = new THREE.Mesh(flashlightGeometry, flashlightMaterial);
    playerFlashlight.position.set(-0.3, -0.4, -0.7); // Left side, lower, closer
    playerFlashlight.renderOrder = 998; // Render before hand but on top of world
    playerFlashlight.visible = false; // Hidden until found and activated
    camera.add(playerFlashlight);
    
    // Flashlight beam (spotlight)
    const flashlightBeam = new THREE.SpotLight(0xffffaa, 2, 20, Math.PI / 6, 0.5, 1);
    flashlightBeam.position.set(0, 0, 0);
    flashlightBeam.target.position.set(0, 0, -10);
    camera.add(flashlightBeam);
    camera.add(flashlightBeam.target);
    flashlightBeam.visible = false;
    
    scene.add(camera); // Camera must be in scene to render its children

    // Entity AI state - ghost mode with pathfinding
    const pathfindingTimer = { current: 0 };
    const currentPath = { current: [] };
    const pathIndex = { current: 0 };

    // Troll AI state - separate pathfinding
    const trollPathfindingTimer = { current: 0 };
    const trollCurrentPath = { current: [] };
    const trollPathIndex = { current: 0 };

    // Puzzle Hands - 6 hands scattered around the map showing the sequence
    function createPuzzleHand(handType, sequenceNumber, position) {
      const group = new THREE.Group();
      
      // Choose texture based on hand type
      let texture;
      let handName;
      if (handType === 1) {
        texture = rightHandTexture.clone();
        handName = 'Right Hand';
      } else if (handType === 2) {
        texture = smokeLeftTexture.clone();
        handName = 'Smoking Hand';
      } else {
        texture = thumbsUpTexture.clone();
        handName = 'Thumbs Up';
      }
      
      texture.needsUpdate = true;
      
      // Create hand sprite
      const geometry = new THREE.PlaneGeometry(2, 2);
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        side: THREE.DoubleSide
      });
      const handSprite = new THREE.Mesh(geometry, material);
      group.add(handSprite);
      
      // Create number label above hand
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      
      ctx.fillStyle = '#ffff00';
      ctx.font = 'bold 48px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(sequenceNumber.toString(), 32, 32);
      ctx.strokeStyle = '#ff00ff';
      ctx.lineWidth = 3;
      ctx.strokeText(sequenceNumber.toString(), 32, 32);
      
      const numberTexture = new THREE.CanvasTexture(canvas);
      numberTexture.magFilter = THREE.NearestFilter;
      
      const numberGeometry = new THREE.PlaneGeometry(1, 1);
      const numberMaterial = new THREE.MeshBasicMaterial({
        map: numberTexture,
        transparent: true,
        side: THREE.DoubleSide
      });
      const numberSprite = new THREE.Mesh(numberGeometry, numberMaterial);
      numberSprite.position.y = 1.5; // Above the hand
      group.add(numberSprite);
      
      group.position.set(position.x, 1.5, position.z);
      group.userData = { handType, sequenceNumber, handName, discovered: false };
      
      scene.add(group);
      return group;
    }
    
    // Place 6 puzzle hands around the map in open areas
    const puzzleHandPositions = [
      { x: -20, z: -20 },  // Near start
      { x: 20, z: -15 },   // Right side
      { x: -15, z: 0 },    // Left middle
      { x: 15, z: 5 },     // Right middle
      { x: -10, z: 20 },   // Bottom left
      { x: 10, z: 15 }     // Bottom right area
    ];
    
    const puzzleHands = [];
    for (let i = 0; i < 6; i++) {
      const hand = createPuzzleHand(generatedSequence[i], i + 1, puzzleHandPositions[i]);
      puzzleHands.push(hand);
    }

    // Flashlight pickup - spawns randomly in open area
    function createFlashlightPickup() {
      const group = new THREE.Group();
      
      const textureLoader = new THREE.TextureLoader();
      const texture = textureLoader.load(flashlightImg);
      texture.magFilter = THREE.NearestFilter;
      texture.minFilter = THREE.NearestFilter;
      
      // Create flashlight sprite
      const geometry = new THREE.PlaneGeometry(1.5, 1.5);
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        side: THREE.DoubleSide,
        emissive: 0xffff00,
        emissiveIntensity: 0.3
      });
      const flashlightSprite = new THREE.Mesh(geometry, material);
      group.add(flashlightSprite);
      
      // Add glow light
      const glowLight = new THREE.PointLight(0xffff00, 1, 5);
      glowLight.position.y = 0.5;
      group.add(glowLight);
      
      // Random position in open area
      const possiblePositions = [
        { x: -25, z: -10 },
        { x: 0, z: -20 },
        { x: 25, z: 10 },
        { x: -18, z: 15 },
        { x: 5, z: -5 }
      ];
      const randomPos = possiblePositions[Math.floor(Math.random() * possiblePositions.length)];
      group.position.set(randomPos.x, 1, randomPos.z);
      group.userData = { collected: false };
      
      scene.add(group);
      return group;
    }

    const flashlightPickup = createFlashlightPickup();

    // A* Pathfinding for entity
    function findPath(startX, startZ, endX, endZ) {
      // Convert world coordinates to grid coordinates
      const gridSize = 32;
      const worldToGrid = (worldCoord) => Math.floor((worldCoord + gridSize) / cellSize);
      const gridToWorld = (gridCoord) => (gridCoord * cellSize) - gridSize + cellSize / 2;

      const startGridX = Math.max(0, Math.min(gridSize - 1, worldToGrid(startX)));
      const startGridZ = Math.max(0, Math.min(gridSize - 1, worldToGrid(startZ)));
      const endGridX = Math.max(0, Math.min(gridSize - 1, worldToGrid(endX)));
      const endGridZ = Math.max(0, Math.min(gridSize - 1, worldToGrid(endZ)));

      // Check if cell is walkable - simplified for entity
      const isWalkable = (gridX, gridZ) => {
        if (gridX < 0 || gridX >= gridSize || gridZ < 0 || gridZ >= gridSize) return false;
        // Just check if the cell is open - entity can squeeze through
        return mazeLayout[gridZ][gridX] === '.';
      };

      // Heuristic function (Manhattan distance)
      const heuristic = (x1, z1, x2, z2) => Math.abs(x1 - x2) + Math.abs(z1 - z2);

      // A* algorithm
      const openSet = [{ x: startGridX, z: startGridZ, g: 0, h: 0, f: 0, parent: null }];
      const closedSet = new Set();

      while (openSet.length > 0) {
        // Get node with lowest f score
        openSet.sort((a, b) => a.f - b.f);
        const current = openSet.shift();

        // Check if we reached the goal
        if (current.x === endGridX && current.z === endGridZ) {
          // Reconstruct path
          const path = [];
          let node = current;
          while (node) {
            path.unshift({ x: gridToWorld(node.x), z: gridToWorld(node.z) });
            node = node.parent;
          }
          return path;
        }

        closedSet.add(`${current.x},${current.z}`);

        // Check all neighbors (4-directional)
        const neighbors = [
          { x: current.x + 1, z: current.z },
          { x: current.x - 1, z: current.z },
          { x: current.x, z: current.z + 1 },
          { x: current.x, z: current.z - 1 }
        ];

        for (const neighbor of neighbors) {
          if (!isWalkable(neighbor.x, neighbor.z)) continue;
          if (closedSet.has(`${neighbor.x},${neighbor.z}`)) continue;

          const g = current.g + 1;
          const h = heuristic(neighbor.x, neighbor.z, endGridX, endGridZ);
          const f = g + h;

          // Check if neighbor is already in open set
          const existingNode = openSet.find(n => n.x === neighbor.x && n.z === neighbor.z);
          if (existingNode) {
            if (g < existingNode.g) {
              existingNode.g = g;
              existingNode.f = f;
              existingNode.parent = current;
            }
          } else {
            openSet.push({ x: neighbor.x, z: neighbor.z, g, h, f, parent: current });
          }
        }

        // Limit iterations to prevent infinite loops
        if (closedSet.size > 1000) break;
      }

      // No path found - return empty array
      return [];
    }

    // First person controls - start in a safe open area
    const playerPos = new THREE.Vector3(-28, 0, -28);  // Start in bottom-left corner (doubled scale)
    const eyeHeight = 1.6;
    let yaw = 0; // Start facing east
    let pitch = 0; // Look straight ahead
    
    // Debug: Check if player starts in a collision
    console.log('Player starting at:', playerPos.x, playerPos.z);
    console.log('Starting collision check:', checkCollision(playerPos));
    
    // Set initial camera position
    camera.position.set(playerPos.x, eyeHeight, playerPos.z);
    camera.rotation.order = 'YXZ';
    camera.rotation.y = yaw;
    camera.rotation.x = pitch;

    const keys = {};
    let velocityY = 0;
    let isGrounded = true;
    let handBobTime = 0; // For hand bobbing animation
    
    const handleKeyDown = (e) => {
      keys[e.code] = true;
      
      // Reset input with R key
      if (e.code === 'KeyR' && nearExit) {
        currentInputSequence = [];
        setInputSequence([]);
        setShowPuzzleHint('Input cleared');
        setTimeout(() => {
          if (showPuzzleHint === 'Input cleared') {
            setShowPuzzleHint('');
          }
        }, 1500);
      }
      
      // Switch hands with 1, 2, and 3 keys
      if (e.code === 'Digit1') {
        setCurrentHand(1);
        playerHand.material.map = rightHandTexture;
        playerHand.material.needsUpdate = true;
        
        // Check if near exit for puzzle input
        checkPuzzleInput(1);
      }
      if (e.code === 'Digit2') {
        setCurrentHand(2);
        playerHand.material.map = smokeLeftTexture;
        playerHand.material.needsUpdate = true;
        
        // Check if near exit for puzzle input
        checkPuzzleInput(2);
      }
      if (e.code === 'Digit3') {
        setCurrentHand(3);
        playerHand.material.map = thumbsUpTexture;
        playerHand.material.needsUpdate = true;
        
        // Check if near exit for puzzle input
        checkPuzzleInput(3);
      }
      
      // Toggle flashlight with 4 key (only if player has it and it has power)
      if (e.code === 'Digit4') {
        if (flashlightRef.current.hasFlashlight && flashlightRef.current.power > 0) {
          const newActive = !flashlightRef.current.active;
          flashlightRef.current.active = newActive;
          setFlashlightActive(newActive);
        }
      }
      
      if (e.code === 'Space' && isGrounded) {
        velocityY = 0.25;
        isGrounded = false;
      }
    };
    
    const handleKeyUp = (e) => {
      keys[e.code] = false;
    };

    const handleMouseMove = (e) => {
      if (!gameStateRef.current.started) return;
      if (document.pointerLockElement !== renderer.domElement) return;
      
      yaw -= e.movementX * 0.002;
      pitch -= e.movementY * 0.002;
      pitch = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, pitch));
    };

    const handleClick = () => {
      if (gameStateRef.current.started) {
        renderer.domElement.requestPointerLock();
      }
    };

    renderer.domElement.addEventListener('click', handleClick);
    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    const moveSpeed = 0.08; // Base speed for FPS-independent movement
    let frameCount = 0;
    let lastTime = performance.now(); // Track delta time for FPS-independent movement
    
    // Puzzle input checker
    let currentInputSequence = [];
    let nearExit = false;
    let lastExitMessage = ''; // Track last exit message
    
    function checkPuzzleInput(handType) {
      // Only accept input when near exit
      if (!nearExit) {
        return;
      }
      
      // Don't accept more than 6 inputs
      if (currentInputSequence.length >= 6) return;
      
      currentInputSequence.push(handType);
      setInputSequence([...currentInputSequence]);
      
      // Check if sequence is complete (6 inputs)
      if (currentInputSequence.length === 6) {
        // Check if correct
        const isCorrect = currentInputSequence.every((val, idx) => val === generatedSequence[idx]);
        
        if (isCorrect) {
          setShowPuzzleHint('✓ CORRECT! Exit unlocked!');
          // Mark exit as unlocked
          exitDoor.userData.unlocked = true;
        } else {
          setShowPuzzleHint('✗ WRONG! Try again...');
          // Reset after 2 seconds
          setTimeout(() => {
            currentInputSequence = [];
            setInputSequence([]);
            setShowPuzzleHint('');
          }, 2000);
        }
      }
    }
    
    exitDoor.userData = { unlocked: false };

    function animate() {
      requestAnimationFrame(animate);

      // Calculate delta time for FPS-independent movement
      const currentTime = performance.now();
      const deltaTime = (currentTime - lastTime) / 1000; // Convert to seconds
      lastTime = currentTime;
      const targetFPS = 60;
      const deltaMultiplier = deltaTime * targetFPS; // Normalize to 60 FPS

      // Check if all hands collected for intense mode (declare early so it's accessible everywhere)
      const allHandsCollected = discoveredHands.length === 6;

      frameCount++;
      
      // Always update camera position, even before game starts
      if (!gameStateRef.current.started) {
        // Update camera even when not started
        camera.position.set(playerPos.x, playerPos.y + eyeHeight, playerPos.z);
        camera.rotation.order = 'YXZ';
        camera.rotation.y = yaw;
        camera.rotation.x = pitch;
        renderer.render(scene, camera);
        return;
      }

      if (gameStateRef.current.started && !gameStateRef.current.gameOver && !gameStateRef.current.won) {
        setTime(t => t + 1);
        
        // Attempt to play background audio while game is active
        if (audioRef.current && audioRef.current.paused) {
          const p = audioRef.current.play();
          if (p && p.catch) p.catch(() => {/* play may be blocked until user gesture */});
        }
        
        // Apply pitch shift and volume when all hands collected
        if (audioRef.current) {
          if (allHandsCollected) {
            audioRef.current.playbackRate = 1.3; // Higher pitch/faster
            audioRef.current.volume = 0.5; // Louder
          } else {
            audioRef.current.playbackRate = 1.0;
            audioRef.current.volume = 0.30;
          }
        }

        // Movement speed with delta time
        const currentMoveSpeed = moveSpeed * deltaMultiplier;

        // Movement with proper direction vectors
        const forward = new THREE.Vector3(-Math.sin(yaw), 0, -Math.cos(yaw));
        const right = new THREE.Vector3(Math.cos(yaw), 0, -Math.sin(yaw));
        
        let moveX = 0;
        let moveZ = 0;
        let isMoving = false;
        
        if (keys['KeyW']) {
          moveX += forward.x * currentMoveSpeed;
          moveZ += forward.z * currentMoveSpeed;
          isMoving = true;
        }
        if (keys['KeyS']) {
          moveX -= forward.x * currentMoveSpeed;
          moveZ -= forward.z * currentMoveSpeed;
          isMoving = true;
        }
        if (keys['KeyA']) {
          moveX -= right.x * currentMoveSpeed;
          moveZ -= right.z * currentMoveSpeed;
          isMoving = true;
        }
        if (keys['KeyD']) {
          moveX += right.x * currentMoveSpeed;
          moveZ += right.z * currentMoveSpeed;
          isMoving = true;
        }
        
        // Hand bobbing animation when moving
        if (isMoving) {
          handBobTime += 0.15; // Speed of bobbing
          const bobAmount = Math.sin(handBobTime) * 0.05; // Up/down amount
          playerHand.position.y = -0.3 + bobAmount; // Base position + bob
        } else {
          handBobTime = 0;
          playerHand.position.y = -0.3; // Reset to base position
        }

        // Footsteps audio control: play while moving (and not in fly mode)
        if (footRef.current) {
          try {
            if (isMoving && !flyMode) {
              if (footRef.current.paused) {
                const p2 = footRef.current.play();
                if (p2 && p2.catch) p2.catch(() => {});
              }
            } else {
              if (!footRef.current.paused) {
                footRef.current.pause();
                try { footRef.current.currentTime = 0; } catch (e) {}
              }
            }
          } catch (e) {
            // ignore audio errors
          }
        }

        // Check collision separately for X and Z axes for smooth wall sliding
        if (moveX !== 0) {
          const newPosX = playerPos.clone();
          newPosX.x += moveX;
          if (!checkCollision(newPosX)) {
            playerPos.x = newPosX.x;
          }
        }
        
        if (moveZ !== 0) {
          const newPosZ = playerPos.clone();
          newPosZ.z += moveZ;
          if (!checkCollision(newPosZ)) {
            playerPos.z = newPosZ.z;
          }
        }

        // Gravity and jumping - normal jump physics
        const gravity = -0.015;
        const groundLevel = 0;
        
        velocityY += gravity;
        playerPos.y += velocityY;
        
        if (playerPos.y <= groundLevel) {
          playerPos.y = groundLevel;
          velocityY = 0;
          isGrounded = true;
        }

        // Camera shake during jumpscare (define BEFORE camera update)
        let cameraShakeX = 0;
        let cameraShakeY = 0;
        if (jumpscareActive && jumpscareIntensity > 0) {
          const shakeAmount = jumpscareIntensity * 0.3; // Max 0.3 units shake
          cameraShakeX = (Math.random() - 0.5) * shakeAmount;
          cameraShakeY = (Math.random() - 0.5) * shakeAmount;
        }

        // Camera - smooth, no shake
        camera.position.set(
          playerPos.x + cameraShakeX,
          playerPos.y + eyeHeight + cameraShakeY,
          playerPos.z
        );
        camera.rotation.order = 'YXZ';
        camera.rotation.y = yaw;
        camera.rotation.x = pitch;

        // Entity AI - Ghost mode pathfinding (passes through walls!)
        const distToPlayer = Math.sqrt(
          Math.pow(playerPos.x - entity.position.x, 2) + 
          Math.pow(playerPos.z - entity.position.z, 2)
        );
        setEntityDistance(Math.floor(distToPlayer));

        // FLASHLIGHT REPULSION - push entity away when flashlight is aimed at it
        let isBeingRepelled = false;
        if (flashlightRef.current.active && flashlightRef.current.power > 0) {
          // Calculate direction from camera to entity
          const dirToEntity = new THREE.Vector3(
            entity.position.x - camera.position.x,
            0,
            entity.position.z - camera.position.z
          ).normalize();
          
          // Get camera forward direction (on XZ plane)
          const cameraDir = new THREE.Vector3();
          camera.getWorldDirection(cameraDir);
          cameraDir.y = 0;
          cameraDir.normalize();
          
          // Check if entity is in flashlight beam cone using dot product
          const dotProduct = cameraDir.dot(dirToEntity);
          
          // If entity is within ~45 degree cone and within range (dot > 0.7 = ~45°)
          if (dotProduct > 0.7 && distToPlayer < 20) {
            isBeingRepelled = true;
            // Push entity away from player
            entity.position.x += dirToEntity.x * 0.3;
            entity.position.z += dirToEntity.z * 0.3;
            console.log(`Repelling entity! Distance: ${distToPlayer.toFixed(1)}m`);
          }
        }

        // JUMPSCARE SYSTEM - triggers when entity gets close!
        if (distToPlayer < 5) {
          // Start jumpscare when within 5 meters
          if (!jumpscareActive) {
            setJumpscareActive(true);
            // TODO: Play jumpscare sound here when audio is added
            console.log('JUMPSCARE TRIGGERED!');
            
            // Remove jumpscare image after 2 seconds so reset screen is visible
            setTimeout(() => {
              setJumpscareActive(false);
            }, 2000);
          }
          // Intensity increases as entity gets closer (5m = 0%, 2m = 100%)
          const intensity = Math.max(0, Math.min(1, (5 - distToPlayer) / 3));
          setJumpscareIntensity(intensity);
        } else if (jumpscareActive) {
          // Reset jumpscare if entity moves away
          setJumpscareActive(false);
          setJumpscareIntensity(0);
        }

        // Calculate speed once for both entities
        const baseSpeed = 0.04 + (gameStateRef.current.score * 0.001);
        // Entities get MUCH faster when all hands are collected (4.0x speed boost!)
        const entitySpeedMultiplier = allHandsCollected ? 4.0 : 1.0;
        const entitySpeed = baseSpeed * entitySpeedMultiplier;

        // Recalculate path every 30 frames (0.5 seconds at 60fps) - skip if being repelled
        if (!isBeingRepelled) {
          pathfindingTimer.current++;
          if (pathfindingTimer.current >= 30) {
            pathfindingTimer.current = 0;
            const newPath = findPath(
              entity.position.x,
              entity.position.z,
              playerPos.x,
              playerPos.z
            );
            if (newPath.length > 0) {
              currentPath.current = newPath;
              pathIndex.current = 0;
            }
          }

          // Follow the path OR move directly if no path
          const entityRadius = 0.75;
          
          if (currentPath.current.length > 0 && pathIndex.current < currentPath.current.length) {
            const targetWaypoint = currentPath.current[pathIndex.current];
            const dirToWaypoint = new THREE.Vector3(
              targetWaypoint.x - entity.position.x,
              0,
              targetWaypoint.z - entity.position.z
            );
            const distToWaypoint = dirToWaypoint.length();

            // If close to waypoint, move to next one
            if (distToWaypoint < 1.5) {
              pathIndex.current++;
            } else {
              // Move towards waypoint - GHOST MODE: passes through walls!
              const moveDir = dirToWaypoint.normalize();
              
              // Move entity freely without collision detection (ghost-like)
              entity.position.x += moveDir.x * entitySpeed;
              entity.position.z += moveDir.z * entitySpeed;
            }
          } else {
            // No path found - move directly towards player (fallback) - GHOST MODE!
            const dirToPlayer = new THREE.Vector3(
              playerPos.x - entity.position.x,
              0,
              playerPos.z - entity.position.z
            );
            const moveDir = dirToPlayer.normalize();
            
            // Move directly through walls like a ghost
            entity.position.x += moveDir.x * entitySpeed;
            entity.position.z += moveDir.z * entitySpeed;
          }
        }

        // Make entity billboard always face the camera
        entity.lookAt(camera.position);

        // Entity catches player
        if (distToPlayer < 2) {
          // pause background audio on death
          if (audioRef.current) {
            try { audioRef.current.pause(); } catch (e) {}
          }
          if (footRef.current) {
            try { footRef.current.pause(); footRef.current.currentTime = 0; } catch (e) {}
          }
          // Play scream on death
          if (screamRef.current) {
            try { screamRef.current.play(); } catch (e) { console.warn('Could not play scream:', e); }
          }
          gameStateRef.current.gameOver = true;
          setGameOver(true);
        }

        // TROLL AI - Second entity with same behavior
        const distToPlayerFromTroll = Math.sqrt(
          Math.pow(playerPos.x - troll.position.x, 2) + 
          Math.pow(playerPos.z - troll.position.z, 2)
        );
        setTrollDistance(Math.floor(distToPlayerFromTroll));

        // FLASHLIGHT REPULSION - push troll away when flashlight is aimed at it
        let isTrollBeingRepelled = false;
        if (flashlightRef.current.active && flashlightRef.current.power > 0) {
          // Calculate direction from camera to troll
          const dirToTroll = new THREE.Vector3(
            troll.position.x - camera.position.x,
            0,
            troll.position.z - camera.position.z
          ).normalize();
          
          // Get camera forward direction (on XZ plane)
          const cameraDir = new THREE.Vector3();
          camera.getWorldDirection(cameraDir);
          cameraDir.y = 0;
          cameraDir.normalize();
          
          // Check if troll is in flashlight beam cone
          const dotProduct = cameraDir.dot(dirToTroll);
          
          // If troll is within ~45 degree cone and within range
          if (dotProduct > 0.7 && distToPlayerFromTroll < 20) {
            isTrollBeingRepelled = true;
            // Push troll away from player
            troll.position.x += dirToTroll.x * 0.3;
            troll.position.z += dirToTroll.z * 0.3;
            console.log(`Repelling troll! Distance: ${distToPlayerFromTroll.toFixed(1)}m`);
          }
        }

        // Troll pathfinding - skip if being repelled
        if (!isTrollBeingRepelled) {
          trollPathfindingTimer.current++;
          if (trollPathfindingTimer.current >= 30) {
            trollPathfindingTimer.current = 0;
            const newPath = findPath(
              troll.position.x,
              troll.position.z,
              playerPos.x,
              playerPos.z
            );
            if (newPath.length > 0) {
              trollCurrentPath.current = newPath;
              trollPathIndex.current = 0;
            }
          }

          // Troll movement (same speed as entity)
          const trollSpeed = baseSpeed;
          
          if (trollCurrentPath.current.length > 0 && trollPathIndex.current < trollCurrentPath.current.length) {
            const targetWaypoint = trollCurrentPath.current[trollPathIndex.current];
            const dirToWaypoint = new THREE.Vector3(
              targetWaypoint.x - troll.position.x,
              0,
              targetWaypoint.z - troll.position.z
            );
            const distToWaypoint = dirToWaypoint.length();

            if (distToWaypoint < 1.5) {
              trollPathIndex.current++;
            } else {
              const moveDir = dirToWaypoint.normalize();
              troll.position.x += moveDir.x * trollSpeed;
              troll.position.z += moveDir.z * trollSpeed;
            }
          } else {
            const dirToPlayer = new THREE.Vector3(
              playerPos.x - troll.position.x,
              0,
              playerPos.z - troll.position.z
            );
            const moveDir = dirToPlayer.normalize();
            troll.position.x += moveDir.x * trollSpeed;
            troll.position.z += moveDir.z * trollSpeed;
          }
        }

        // Make troll face camera and update glow light position
        troll.lookAt(camera.position);
        if (troll.userData.glowLight) {
          troll.userData.glowLight.position.copy(troll.position);
        }

        // Troll catches player
        if (distToPlayerFromTroll < 2) {
          if (audioRef.current) {
            try { audioRef.current.pause(); } catch (e) {}
          }
          if (footRef.current) {
            try { footRef.current.pause(); footRef.current.currentTime = 0; } catch (e) {}
          }
          // Play scream on death
          if (screamRef.current) {
            try { screamRef.current.play(); } catch (e) { console.warn('Could not play scream:', e); }
          }
          gameStateRef.current.gameOver = true;
          setGameOver(true);
        }

        // SANITY SYSTEM - Decreases when near entities
        const closestEntityDist = Math.min(distToPlayer, distToPlayerFromTroll);
        
        if (closestEntityDist < 20) {
          // Lose sanity when entities are close - slower drain based on distance
          let sanityLoss = 0;
          if (closestEntityDist < 5) {
            sanityLoss = 0.15; // Fast drain when very close
          } else if (closestEntityDist < 10) {
            sanityLoss = 0.08; // Medium drain when close
          } else if (closestEntityDist < 15) {
            sanityLoss = 0.04; // Slow drain
          } else {
            sanityLoss = 0.02; // Very slow drain
          }
          setSanity(s => Math.max(0, s - sanityLoss));
        } else {
          // Slowly recover sanity when far from entities
          setSanity(s => Math.min(100, s + 0.1));
        }

        // Breathing audio when sanity is low
        if (breathRef.current) {
          try {
            if (sanity < 30 && sanity > 0) {
              // Critical low sanity - play breathing
              if (breathRef.current.paused) {
                console.log('🫁 Starting breath audio - Sanity:', Math.floor(sanity));
                const playPromise = breathRef.current.play();
                if (playPromise !== undefined) {
                  playPromise
                    .then(() => {
                      console.log('✅ Breath audio playing successfully');
                    })
                    .catch(err => {
                      console.warn('❌ Breathing audio play blocked:', err);
                    });
                }
              }
              // Adjust volume based on sanity level (lower sanity = louder breathing)
              breathRef.current.volume = 0.5 + ((30 - sanity) / 30) * 0.5; // 0.5 to 1.0 (much louder)
            } else {
              // Stop breathing when sanity is okay
              if (!breathRef.current.paused) {
                console.log('⏹️ Stopping breath audio - Sanity:', Math.floor(sanity));
                breathRef.current.pause();
                breathRef.current.currentTime = 0;
              }
            }
          } catch (e) {
            console.warn('Breathing audio error:', e);
          }
        }

        // Death by insanity - if sanity reaches 0, game over
        if (sanity <= 0 && !gameStateRef.current.gameOver) {
          console.log('SANITY DEPLETED - LOST YOUR MIND!');
          if (audioRef.current) {
            try { audioRef.current.pause(); } catch (e) {}
          }
          if (footRef.current) {
            try { footRef.current.pause(); footRef.current.currentTime = 0; } catch (e) {}
          }
          // Play scream on death
          if (screamRef.current) {
            try { screamRef.current.play(); } catch (e) { console.warn('Could not play scream:', e); }
          }
          gameStateRef.current.gameOver = true;
          setGameOver(true);
        }

        // Check if player reached EXIT
        const distToExit = Math.sqrt(
          Math.pow(playerPos.x - exitPosition.x, 2) + 
          Math.pow(playerPos.z - exitPosition.z, 2)
        );
        
        // Update nearExit flag for puzzle input
        nearExit = distToExit < 5; // Within 5 units of exit
        
        // Clear exit message when moving away
        if (distToExit > 6 && lastExitMessage.includes('Exit locked')) {
          setShowPuzzleHint('');
          lastExitMessage = '';
        }
        
        if (distToExit < exitTriggerRadius && !gameStateRef.current.won) {
          // Check if exit is unlocked
          if (exitDoor.userData.unlocked) {
            // pause background audio on win
            if (audioRef.current) {
              try { audioRef.current.pause(); } catch (e) {}
            }
            if (footRef.current) {
              try { footRef.current.pause(); footRef.current.currentTime = 0; } catch (e) {}
            }
            gameStateRef.current.won = true;
            setWon(true);
            console.log('YOU ESCAPED! Time:', time, 'Score:', score);
          } else {
            // Show hint that exit is locked
            if (frameCount % 30 === 0) { // Update every second
              const foundCount = puzzleHands.filter(h => h.userData.discovered).length;
              const message = `Exit locked! Find all hands (${foundCount}/6) and enter sequence`;
              setShowPuzzleHint(message);
              lastExitMessage = message;
            }
          }
        }

        // Check for puzzle hand discovery
        for (let i = 0; i < puzzleHands.length; i++) {
          const hand = puzzleHands[i];
          if (hand.userData.discovered) continue;
          
          const dx = playerPos.x - hand.position.x;
          const dz = playerPos.z - hand.position.z;
          const dist = Math.sqrt(dx * dx + dz * dz);
          
          if (dist < 2) {
            hand.userData.discovered = true;
            const handTypeNames = ['', 'Right Hand', 'Smoking Hand', 'Thumbs Up'];
            const handName = handTypeNames[hand.userData.handType];
            
            const newDiscoveredCount = discoveredHands.length + 1;
            setDiscoveredHands(prev => [...prev, hand.userData.sequenceNumber]);
            
            // Check if this is the final hand
            if (newDiscoveredCount === 6) {
              setShowPuzzleHint(`🔥 ALL HANDS FOUND! THEY ARE COMING! 🔥`);
              setTimeout(() => setShowPuzzleHint(''), 5000);
            } else {
              setShowPuzzleHint(`Found #${hand.userData.sequenceNumber}: ${handName} (press ${hand.userData.handType})`);
              setTimeout(() => setShowPuzzleHint(''), 3000);
            }
            
            console.log(`Discovered: #${hand.userData.sequenceNumber} = ${handName} (${newDiscoveredCount}/6)`);
          }
          
          // Make hands rotate and billboard
          hand.rotation.y += 0.02;
          hand.children[0].lookAt(camera.position);
          hand.children[1].lookAt(camera.position);
        }

        // Check for flashlight pickup
        if (flashlightPickup && !flashlightPickup.userData.collected) {
          const dx = camera.position.x - flashlightPickup.position.x;
          const dz = camera.position.z - flashlightPickup.position.z;
          const dist = Math.sqrt(dx * dx + dz * dz);
          
          // Debug: Show distance every 60 frames (once per second)
          if (frameCount % 60 === 0) {
            console.log(`Distance to flashlight: ${dist.toFixed(2)}m at position (${flashlightPickup.position.x}, ${flashlightPickup.position.z})`);
            console.log(`Player at: (${camera.position.x.toFixed(2)}, ${camera.position.z.toFixed(2)})`);
          }
          
          if (dist < 3) {
            console.log('PICKING UP FLASHLIGHT! Distance:', dist.toFixed(2));
            flashlightPickup.userData.collected = true;
            flashlightRef.current.hasFlashlight = true;
            setHasFlashlight(true);
            setShowPuzzleHint('Found Flashlight! Press 4 to toggle (drains power when on)');
            
            // Completely remove from scene
            flashlightPickup.visible = false;
            flashlightPickup.traverse((child) => {
              if (child.geometry) child.geometry.dispose();
              if (child.material) {
                if (Array.isArray(child.material)) {
                  child.material.forEach(mat => mat.dispose());
                } else {
                  child.material.dispose();
                }
              }
            });
            scene.remove(flashlightPickup);
            console.log('Flashlight removed from scene');
            
            setTimeout(() => setShowPuzzleHint(''), 4000);
          } else {
            // Make flashlight rotate and bob
            flashlightPickup.rotation.y += 0.03;
            const baseY = 1;
            flashlightPickup.position.y = baseY + Math.sin(Date.now() * 0.002) * 0.2;
            if (flashlightPickup.children[0]) {
              flashlightPickup.children[0].lookAt(camera.position);
            }
          }
        }

        // Flashlight power drain and visibility
        if (flashlightRef.current.hasFlashlight) {
          if (flashlightRef.current.active && flashlightRef.current.power > 0) {
            // Drain power when active
            const newPower = Math.max(0, flashlightRef.current.power - 0.05);
            flashlightRef.current.power = newPower;
            setFlashlightPower(newPower);
            playerFlashlight.visible = true;
            flashlightBeam.visible = true;
          } else {
            playerFlashlight.visible = false;
            flashlightBeam.visible = false;
          }
          
          // Auto-turn off when power reaches 0
          if (flashlightRef.current.power <= 0 && flashlightRef.current.active) {
            flashlightRef.current.active = false;
            setFlashlightActive(false);
          }
        }

        // Lights flicker - INTENSE when all hands collected
        if (allHandsCollected) {
          // Debug log (once per second)
          if (frameCount % 60 === 0) {
            console.log('🔥💡 INTENSE LIGHTING MODE ACTIVE!');
          }
          
          // Rapid, intense flickering with higher intensity
          const intenseFactor = 1.5 + Math.random() * 1.5; // 1.5 to 3.0 intensity
          neonLight1.intensity = intenseFactor;
          neonLight2.intensity = intenseFactor;
          neonLight3.intensity = intenseFactor;
          neonLight4.intensity = intenseFactor;
          neonLight5.intensity = intenseFactor;
          neonLight6.intensity = intenseFactor;
          neonLight7.intensity = intenseFactor;
          neonLight8.intensity = intenseFactor;
          
          // Random color shifts for chaos effect (more frequent)
          if (Math.random() < 0.5) {
            const randomColor = Math.random() < 0.5 ? 0xff0000 : 0xffffff;
            neonLight1.color.setHex(randomColor);
            neonLight2.color.setHex(randomColor);
            neonLight3.color.setHex(randomColor);
            neonLight4.color.setHex(randomColor);
          }
        } else {
          // Normal subtle flickering
          neonLight1.intensity = 0.8 + Math.random() * 0.4;
          neonLight2.intensity = 0.8 + Math.random() * 0.4;
          neonLight3.intensity = 0.8 + Math.random() * 0.4;
          neonLight4.intensity = 0.8 + Math.random() * 0.4;
          neonLight5.intensity = 0.8 + Math.random() * 0.4;
          neonLight6.intensity = 0.8 + Math.random() * 0.4;
          neonLight7.intensity = 0.8 + Math.random() * 0.4;
          neonLight8.intensity = 0.8 + Math.random() * 0.4;
        }
      }

      renderer.render(scene, camera);
    }

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      document.removeEventListener('mousemove', handleMouseMove);
      renderer.domElement.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      // Pause and cleanup audio
      if (audioRef.current) {
        try { audioRef.current.pause(); } catch (e) {}
        audioRef.current = null;
      }
      if (footRef.current) {
        try { footRef.current.pause(); } catch (e) {}
        try { footRef.current.currentTime = 0; } catch (e) {}
        footRef.current = null;
      }
      renderer.dispose();
    };
  }, [started]);

  const restart = () => {
    window.location.reload();
  };

  const formatTime = (t) => {
    const hours = 2;
    const minutes = 7 + Math.floor(t / 60);
    const seconds = t % 60;
    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} AM`;
  };

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative', backgroundColor: '#0b0b0b', fontFamily: 'Tahoma, "Lucida Console", Monaco, monospace' }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 2px)',
        pointerEvents: 'none',
        zIndex: 10
      }} />
      
      <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
      
      {/* Fear/Sanity Visual Effects */}
      {started && !gameOver && sanity < 80 && (
        <>
          {/* Vignette effect - gets darker as sanity decreases */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: 'none',
            background: `radial-gradient(circle, transparent ${40 + (sanity / 2)}%, rgba(0,0,0,${(100 - sanity) / 100}) 100%)`,
            zIndex: 9997,
            transition: 'background 0.3s ease'
          }} />
          
          {/* Screen distortion overlay */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: 'none',
            opacity: (100 - sanity) / 200,
            background: 'repeating-linear-gradient(0deg, transparent 0px, rgba(255,0,0,0.03) 2px, transparent 4px)',
            animation: sanity < 30 ? 'fear-shake 0.2s infinite' : 'none',
            zIndex: 9997
          }} />
          
          {/* Red tint when sanity is very low */}
          {sanity < 30 && (
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              pointerEvents: 'none',
              background: `rgba(255,0,0,${(30 - sanity) / 100})`,
              zIndex: 9997,
              mixBlendMode: 'multiply'
            }} />
          )}
        </>
      )}
      
      {/* CRT overlay for retro scanlines/noise & subtle veneer flicker */}
      <div className="crt-overlay" style={{ pointerEvents: 'none' }}>
        <div className="crt-scanlines" />
        <div className="crt-noise" />
        <div className="crt-veneer" />
      </div>
      
      {/* HUD - muted retro style */}
      <div style={{
        position: 'absolute',
        top: 12,
        left: 12,
        color: '#d6d6d6',
        fontSize: '18px',
        lineHeight: '18px',
        background: 'linear-gradient(#0f0f0f, #131313)',
        padding: '6px 10px',
        border: '1px solid #2b2b2b',
        borderRadius: '2px',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.02)',
        fontFamily: 'Tahoma, "Lucida Console", Monaco, monospace',
        imageRendering: 'pixelated',
        animation: 'hud-flicker 7s infinite'
      }}>
        Score: {score}
      </div>

      <div style={{
        position: 'absolute',
        top: 12,
        right: 12,
        color: '#cfcfcf',
        fontSize: '16px',
        background: 'rgba(20,20,20,0.6)',
        padding: '6px 10px',
        border: '1px solid #2b2b2b',
        borderRadius: '2px',
        textAlign: 'right',
        fontFamily: 'Tahoma, "Lucida Console", Monaco, monospace'
      }}>
        {formatTime(time)}
      </div>

      {started && !gameOver && (
        <>
          {/* Flashlight Power Indicator - top position */}
          {hasFlashlight && (
            <div style={{
              position: 'absolute',
              bottom: 220,
              right: 12,
              color: flashlightPower < 20 ? '#ff6666' : flashlightPower < 50 ? '#ffff00' : '#66ccff',
              fontSize: '13px',
              background: 'linear-gradient(#0b0b0b, #111111)',
              padding: '8px',
              border: `2px solid ${flashlightPower < 20 ? '#ff0000' : flashlightPower < 50 ? '#ffff00' : '#00ccff'}`,
              borderRadius: '2px',
              fontFamily: 'Tahoma, "Lucida Console", Monaco, monospace',
              width: '188px',
              boxSizing: 'border-box',
              animation: flashlightPower < 20 ? 'sanity-pulse 1s infinite' : 'none',
              zIndex: 1000
            }}>
              <div style={{ fontSize: '10px', marginBottom: '4px', textAlign: 'center' }}>
                FLASHLIGHT {flashlightActive ? '⚡' : ''}
              </div>
              <div style={{
                width: '100%',
                height: '8px',
                background: '#222',
                border: '1px solid #444',
                position: 'relative'
              }}>
                <div style={{
                  width: `${flashlightPower}%`,
                  height: '100%',
                  background: flashlightPower < 20 ? 'linear-gradient(90deg, #ff0000, #ff6666)' : 
                             flashlightPower < 50 ? 'linear-gradient(90deg, #ffaa00, #ffff00)' : 
                             'linear-gradient(90deg, #00ccff, #66eeff)',
                  transition: 'width 0.3s ease',
                  boxShadow: flashlightActive ? '0 0 10px rgba(0,200,255,0.5)' : 'none'
                }} />
              </div>
              <div style={{ fontSize: '10px', marginTop: '2px', textAlign: 'center' }}>
                {Math.floor(flashlightPower)}% {flashlightPower === 0 ? '(EMPTY)' : ''}
              </div>
            </div>
          )}

          {/* Sanity Bar - middle position */}
          <div style={{
            position: 'absolute',
            bottom: 140,
            right: 12,
            color: sanity < 30 ? '#ff6666' : sanity < 60 ? '#ffff00' : '#66ff66',
            fontSize: '13px',
            background: 'linear-gradient(#0b0b0b, #111111)',
            padding: '8px',
            border: `2px solid ${sanity < 30 ? '#ff0000' : sanity < 60 ? '#ffff00' : '#00ff00'}`,
            borderRadius: '2px',
            fontFamily: 'Tahoma, "Lucida Console", Monaco, monospace',
            width: '188px',
            boxSizing: 'border-box',
            animation: sanity < 30 ? 'sanity-pulse 1s infinite' : 'none',
            zIndex: 1000
          }}>
            <div style={{ fontSize: '10px', marginBottom: '4px', textAlign: 'center' }}>SANITY</div>
            <div style={{
              width: '100%',
              height: '8px',
              background: '#222',
              border: '1px solid #444',
              position: 'relative'
            }}>
              <div style={{
                width: `${sanity}%`,
                height: '100%',
                background: sanity < 30 ? 'linear-gradient(90deg, #ff0000, #ff6666)' : 
                           sanity < 60 ? 'linear-gradient(90deg, #ffaa00, #ffff00)' : 
                           'linear-gradient(90deg, #00ff00, #66ff66)',
                transition: 'width 0.3s ease',
                boxShadow: sanity < 30 ? '0 0 10px rgba(255,0,0,0.5)' : 'none'
              }} />
            </div>
            <div style={{ fontSize: '10px', marginTop: '2px', textAlign: 'center' }}>{Math.floor(sanity)}%</div>
          </div>

          {/* Entity Distance */}
          <div style={{
            position: 'absolute',
            bottom: 12,
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#d0d0d0',
            fontSize: (entityDistance < 10 || trollDistance < 10) ? '20px' : '14px',
            background: (entityDistance < 10 || trollDistance < 10) ? 'rgba(30,10,10,0.6)' : 'rgba(20,20,20,0.4)',
            padding: '6px 10px',
            border: '1px solid #2b2b2b',
            borderRadius: '2px',
            fontFamily: 'Tahoma, "Lucida Console", Monaco, monospace',
            textAlign: 'center'
          }}>
            {(entityDistance < 10 || trollDistance < 10) ? 
              'THEY ARE NEAR' : 
              `Entity: ${entityDistance}m | Troll: ${trollDistance}m`
            }
          </div>
          
          {/* Puzzle hint */}
          {showPuzzleHint && (
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: '#ffff00',
              fontSize: '18px',
              background: 'rgba(20,20,20,0.9)',
              padding: '12px 20px',
              border: '2px solid #ffff00',
              borderRadius: '4px',
              fontFamily: 'Tahoma, "Lucida Console", Monaco, monospace',
              textAlign: 'center',
              boxShadow: '0 0 20px rgba(255,255,0,0.5)',
              zIndex: 1000
            }}>
              {showPuzzleHint}
            </div>
          )}
          
          {/* Current input sequence */}
          {inputSequence.length > 0 && (
            <div style={{
              position: 'absolute',
              bottom: 60,
              left: '50%',
              transform: 'translateX(-50%)',
              color: '#00ffff',
              fontSize: '16px',
              background: 'rgba(20,20,20,0.8)',
              padding: '12px 16px',
              border: '1px solid #00ffff',
              borderRadius: '2px',
              fontFamily: 'Tahoma, "Lucida Console", Monaco, monospace',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{ marginRight: '8px' }}>Input:</span>
              {inputSequence.map((handType, idx) => {
                const handImages = {
                  1: righthandImg,
                  2: smokeleftImg,
                  3: thumbsupImg
                };
                return (
                  <img 
                    key={idx}
                    src={handImages[handType]} 
                    alt={`hand ${handType}`}
                    style={{
                      width: '32px',
                      height: '32px',
                      imageRendering: 'pixelated',
                      filter: 'drop-shadow(0 0 4px #00ffff)'
                    }}
                  />
                );
              })}
              <span style={{ marginLeft: '8px' }}>({inputSequence.length}/6)</span>
            </div>
          )}
          
          {/* Discovered hands counter */}
          <div style={{
            position: 'absolute',
            top: 60,
            left: 12,
            color: '#ffff00',
            fontSize: '14px',
            background: 'rgba(20,20,20,0.7)',
            padding: '6px 10px',
            border: '1px solid #2b2b2b',
            borderRadius: '2px',
            fontFamily: 'Tahoma, "Lucida Console", Monaco, monospace'
          }}>
            Hands Found: {discoveredHands.length}/6
          </div>

          {/* Low sanity warning */}
          {sanity < 30 && sanity > 0 && (
            <div style={{
              position: 'absolute',
              top: '40%',
              left: '50%',
              transform: 'translateX(-50%)',
              color: '#ff0000',
              fontSize: '14px',
              background: 'rgba(30,0,0,0.8)',
              padding: '8px 16px',
              border: '2px solid #ff0000',
              borderRadius: '2px',
              fontFamily: 'Tahoma, "Lucida Console", Monaco, monospace',
              textAlign: 'center',
              animation: 'fear-pulse 0.5s infinite',
              textShadow: '0 0 10px rgba(255,0,0,0.8)',
              zIndex: 1001
            }}>
              ⚠ YOUR MIND IS BREAKING ⚠<br/>
              <span style={{ fontSize: '11px' }}>GET AWAY FROM THEM!</span>
            </div>
          )}
        </>
      )}

      {/* JUMPSCARE OVERLAY (same functionality, more muted presentation) */}
      {jumpscareActive && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(4,4,6,0.6)'
        }}>
          <img 
            src={jumpscareImg}
            alt=""
            style={{
              width: `${40 + (jumpscareIntensity * 40)}%`,
              height: `${40 + (jumpscareIntensity * 40)}%`,
              objectFit: 'cover',
              opacity: 0.95,
              filter: `grayscale(0.7) contrast(${0.9 + jumpscareIntensity * 0.2}) brightness(${0.9 - jumpscareIntensity * 0.2})`,
              transition: 'none',
              imageRendering: 'auto',
              border: '2px solid rgba(60,60,60,0.6)'
            }}
          />
        </div>
      )}

      <div style={{
        position: 'absolute',
        bottom: 12,
        right: 12,
        color: '#d0d0d0',
        fontSize: '13px',
        background: 'linear-gradient(#0b0b0b, #111111)',
        padding: '8px',
        border: '1px solid #2b2b2b',
        borderRadius: '2px',
        lineHeight: '18px',
        fontFamily: 'Tahoma, "Lucida Console", Monaco, monospace'
      }}>
        WASD - move<br/>
        SPACE - jump<br/>
        1/2/3 - switch hands<br/>
        4 - flashlight<br/>
        R - reset input<br/>
        Mouse - look
      </div>

      {!started && !gameOver && (
        <div 
          onClick={() => {
            gameStateRef.current.started = true;
            setStarted(true);
            // Request pointer lock immediately
            setTimeout(() => {
              if (rendererRef.current) {
                rendererRef.current.domElement.requestPointerLock();
              }
            }, 100);
          }}
          style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: '#dcdcdc',
          fontSize: '16px',
          backgroundColor: 'rgba(12,12,12,0.95)',
          padding: '40px 50px',
          border: '2px solid #3a3a3a',
          boxShadow: '0 0 30px rgba(0,0,0,0.8), inset 0 0 50px rgba(0,0,0,0.3)',
          cursor: 'pointer',
          fontFamily: 'Tahoma, "Lucida Console", Monaco, monospace',
          backgroundImage: `url(${oldmanImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
          overflow: 'hidden'
        }}>
          {/* Blurred background layer */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${oldmanImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(15px) grayscale(100%) brightness(0.3) contrast(0.5)',
            opacity: 0.15,
            zIndex: -1
          }} />
          
          {/* Scanline overlay for retro effect */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 3px)',
            pointerEvents: 'none',
            zIndex: 1,
            opacity: 0.3
          }} />
          
          {/* Content */}
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ 
              fontSize: '48px', 
              marginBottom: '8px',
              fontWeight: 'bold',
              textShadow: '0 0 10px rgba(255,255,255,0.3), 0 0 20px rgba(100,255,255,0.2), 2px 2px 4px rgba(0,0,0,0.8)',
              letterSpacing: '4px',
              animation: 'title-glow 3s infinite alternate'
            }}>
              LIMINAL MALL
            </div>
            
            <div style={{ 
              fontSize: '11px', 
              color: '#888', 
              marginBottom: '20px',
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}>
              ━━━━━ SURVIVAL HORROR ━━━━━
            </div>
            
            <div style={{ 
              fontSize: '14px', 
              color: '#ffff00', 
              marginBottom: '12px',
              textShadow: '0 0 8px rgba(255,255,0,0.4), 1px 1px 2px rgba(0,0,0,0.8)'
            }}>
              Find your way out of the mall
            </div>
            
            <div style={{ 
              fontSize: '12px', 
              color: '#ff6666', 
              marginTop: '14px', 
              marginBottom: '14px',
              fontStyle: 'italic',
              textShadow: '0 0 5px rgba(255,100,100,0.3)'
            }}>
              ...something is watching...
            </div>
            
            <div style={{ 
              fontSize: '11px', 
              color: '#999', 
              marginBottom: '20px',
              opacity: 0.7
            }}>
              The mall has been running for a long time<br/>
              Time: 2:07 AM • Security: OFFLINE
            </div>
            
            <div style={{ 
              fontSize: '16px', 
              color: '#00ff00', 
              marginTop: '20px', 
              padding: '10px 24px', 
              border: '2px solid #00ff00',
              display: 'inline-block',
              boxShadow: '0 0 15px rgba(0,255,0,0.3), inset 0 0 10px rgba(0,255,0,0.1)',
              animation: 'button-pulse 2s infinite',
              letterSpacing: '2px',
              fontWeight: 'bold'
            }}>
              &gt;&gt; CLICK TO ENTER &lt;&lt;
            </div>
            
            <div style={{ 
              fontSize: '10px', 
              color: '#666', 
              marginTop: '16px',
              letterSpacing: '1px'
            }}>
              [ HEADPHONES RECOMMENDED ]
            </div>
          </div>
        </div>
      )}

      {gameOver && !won && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: '#e6e6e6',
          fontSize: '18px',
          backgroundColor: 'rgba(10,10,10,0.98)',
          padding: '28px',
          border: '1px solid #2d2d2d',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.02)',
          imageRendering: 'pixelated',
          fontFamily: 'Tahoma, "Lucida Console", Monaco, monospace'
        }}>
          <div style={{ fontSize: '28px', marginBottom: '12px', color: '#cfcfcf' }}>
            IT GOT YOU
          </div>
          <div style={{ fontSize: '14px', color: '#bdbdbd', marginBottom: '8px' }}>
            You survived: {formatTime(time)}
          </div>
          <div style={{ fontSize: '14px', color: '#bdbdbd', marginBottom: '12px' }}>
            Score: {score}
          </div>
          <button
            onClick={restart}
            style={{
              marginTop: '10px',
              padding: '10px 28px',
              fontSize: '14px',
              background: '#1a1a1a',
              color: '#dcdcdc',
              border: '1px solid #2b2b2b',
              cursor: 'pointer',
              fontWeight: 'normal',
              borderRadius: '2px'
            }}
          >
            TRY AGAIN
          </button>
        </div>
      )}

      {won && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: '#e6e6e6',
          fontSize: '16px',
          backgroundColor: 'rgba(12,12,12,0.98)',
          padding: '24px',
          border: '1px solid #2d2d2d',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.02)',
          imageRendering: 'pixelated',
          fontFamily: 'Tahoma, "Lucida Console", Monaco, monospace'
        }}>
          <div style={{ fontSize: '22px', marginBottom: '10px', color: '#cfcfcf' }}>
            YOU ESCAPED
          </div>
          <div style={{ fontSize: '13px', color: '#bdbdbd', marginBottom: '8px' }}>
            Escape Time: {formatTime(time)}
          </div>
          <div style={{ fontSize: '13px', color: '#bdbdbd', marginBottom: '10px' }}>
            Final Score: {score}
          </div>
          <button
            onClick={restart}
            style={{
              marginTop: '8px',
              padding: '8px 22px',
              fontSize: '13px',
              background: '#171717',
              color: '#dcdcdc',
              border: '1px solid #2b2b2b',
              cursor: 'pointer',
              fontWeight: 'normal',
              borderRadius: '2px'
            }}
          >
            PLAY AGAIN
          </button>
        </div>
      )}

      <style>{`
        /* Small retro animations and CRT effects */
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1) translateX(-50%); }
          50% { transform: scale(1.05) translateX(-50%); }
        }

        /* Title glow animation */
        @keyframes title-glow {
          0% { 
            textShadow: 0 0 10px rgba(255,255,255,0.3), 0 0 20px rgba(100,255,255,0.2), 2px 2px 4px rgba(0,0,0,0.8);
          }
          100% { 
            textShadow: 0 0 20px rgba(255,255,255,0.5), 0 0 30px rgba(100,255,255,0.4), 2px 2px 4px rgba(0,0,0,0.8);
          }
        }
        
        /* Button pulse animation */
        @keyframes button-pulse {
          0%, 100% { 
            boxShadow: 0 0 15px rgba(0,255,0,0.3), inset 0 0 10px rgba(0,255,0,0.1);
            transform: scale(1);
          }
          50% { 
            boxShadow: 0 0 25px rgba(0,255,0,0.5), inset 0 0 15px rgba(0,255,0,0.2);
            transform: scale(1.02);
          }
        }

        /* Sanity bar pulse when critically low */
        @keyframes sanity-pulse {
          0%, 100% { 
            boxShadow: 0 0 10px rgba(255,0,0,0.5);
            transform: scale(1);
          }
          50% { 
            boxShadow: 0 0 20px rgba(255,0,0,0.8);
            transform: scale(1.03);
          }
        }

        /* Fear pulse for warning message */
        @keyframes fear-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        /* Fear shake animation when sanity is very low */
        @keyframes fear-shake {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-2px, 1px); }
          20% { transform: translate(2px, -1px); }
          30% { transform: translate(-1px, 2px); }
          40% { transform: translate(1px, -2px); }
          50% { transform: translate(-2px, -1px); }
          60% { transform: translate(2px, 1px); }
          70% { transform: translate(-1px, -2px); }
          80% { transform: translate(1px, 2px); }
          90% { transform: translate(-2px, 0px); }
        }

        /* Scanlines */
        .crt-overlay { position: absolute; inset: 0; z-index: 9998; pointer-events: none; }
        .crt-scanlines { position: absolute; inset: 0; background-image: repeating-linear-gradient(to bottom, rgba(255,255,255,0.02) 0px, rgba(0,0,0,0.03) 1px); opacity: 0.06; mix-blend-mode: overlay; animation: scan-flicker 4s infinite; }
        @keyframes scan-flicker { 0% { opacity: 0.04 } 50% { opacity: 0.08 } 100% { opacity: 0.04 } }

        /* Noise - small pixel dots to emulate analog jitter */
        .crt-noise { position: absolute; inset: 0; background-image: radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px); background-size: 3px 3px; opacity: 0.04; animation: noise 0.12s steps(2, end) infinite; mix-blend-mode: overlay; }
        @keyframes noise { 0% { transform: translate(0,0); } 100% { transform: translate(1px,1px); } }

        /* Veneer flicker to slightly dim/brighten whole screen */
        .crt-veneer { position: absolute; inset: 0; background: rgba(8,8,8,0.02); animation: veneer-flicker 6s infinite; pointer-events: none; }
        @keyframes veneer-flicker { 0% { opacity: 0.02 } 3% { opacity: 0.06 } 6% { opacity: 0.02 } 100% { opacity: 0.02 } }

        /* Subtle HUD flicker for unsettled vibes */
        @keyframes hud-flicker { 0% { opacity: 1 } 7% { opacity: 0.9 } 12% { opacity: 1 } 100% { opacity: 1 } }

      `}</style>
    </div>
  );
}