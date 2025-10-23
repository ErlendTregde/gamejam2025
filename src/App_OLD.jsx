import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function LiminalMallCollector() {
  const mountRef = useRef(null);
  const rendererRef = useRef(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [started, setStarted] = useState(false);
  const [time, setTime] = useState(0);
  const [entityDistance, setEntityDistance] = useState(100);
  const gameStateRef = useRef({ score: 0, gameOver: false, started: false });

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x7788aa, 8, 35);
    scene.background = new THREE.Color(0x6677aa);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 40);
    // Camera position will be set from playerPos in the animate loop

    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(0.5);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer; // Store for later use

    renderer.domElement.style.imageRendering = 'pixelated';
    renderer.domElement.style.filter = 'contrast(1.2) saturate(1.3) brightness(0.9)';
    renderer.domElement.style.cursor = 'none';

    const ambientLight = new THREE.AmbientLight(0x9999aa, 0.6);
    scene.add(ambientLight);

    const neonLight1 = new THREE.PointLight(0xff00ff, 1, 15);
    neonLight1.position.set(-10, 3, -5);
    scene.add(neonLight1);

    const neonLight2 = new THREE.PointLight(0x00ffff, 1, 15);
    neonLight2.position.set(10, 3, -10);
    scene.add(neonLight2);

    const neonLight3 = new THREE.PointLight(0xffff00, 1, 15);
    neonLight3.position.set(0, 3, -15);
    scene.add(neonLight3);

    // Floor
    const floorCanvas = document.createElement('canvas');
    floorCanvas.width = 64;
    floorCanvas.height = 64;
    const fCtx = floorCanvas.getContext('2d');
    
    for (let y = 0; y < 8; y++) {
      for (let x = 0; x < 8; x++) {
        const colors = ['#ff00ff', '#00ffff', '#ffff00', '#ff0080', '#00ff00'];
        fCtx.fillStyle = colors[(x + y) % colors.length];
        fCtx.fillRect(x * 8, y * 8, 8, 8);
      }
    }
    
    fCtx.strokeStyle = '#000';
    fCtx.lineWidth = 2;
    for (let i = 0; i < 10; i++) {
      fCtx.beginPath();
      fCtx.moveTo(Math.random() * 64, Math.random() * 64);
      fCtx.lineTo(Math.random() * 64, Math.random() * 64);
      fCtx.stroke();
    }
    
    const floorTexture = new THREE.CanvasTexture(floorCanvas);
    floorTexture.wrapS = THREE.RepeatWrapping;
    floorTexture.wrapT = THREE.RepeatWrapping;
    floorTexture.repeat.set(20, 20);
    floorTexture.magFilter = THREE.NearestFilter;
    floorTexture.minFilter = THREE.NearestFilter;
    
    const floorGeometry = new THREE.PlaneGeometry(100, 100);
    const floorMaterial = new THREE.MeshLambertMaterial({ 
      map: floorTexture,
      emissive: 0x111122,
      emissiveIntensity: 0.3
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

    // Collision walls
    const walls = [];
    
    function createWall(x, z, rotY, width = 10) {
      const wallGeometry = new THREE.BoxGeometry(width, 4, 0.5, 1, 1, 1);
      const wallMaterial = new THREE.MeshLambertMaterial({ 
        color: 0xddddee,
        flatShading: true
      });
      const wall = new THREE.Mesh(wallGeometry, wallMaterial);
      wall.position.set(x, 2, z);
      wall.rotation.y = rotY;
      scene.add(wall);
      
      // Store wall bounds for collision - check if rotated (not 0)
      const isRotated = Math.abs(rotY) > 0.1; // If rotation is significant, wall runs along X axis
      const bounds = {
        minX: x - (isRotated ? width/2 : 0.25),
        maxX: x + (isRotated ? width/2 : 0.25),
        minZ: z - (isRotated ? 0.25 : width/2),
        maxZ: z + (isRotated ? 0.25 : width/2)
      };
      walls.push(bounds);
      
      return wall;
    }

    // Create maze - outer walls
    createWall(-15, 0, 0, 30);  // Left wall
    createWall(15, 0, 0, 30);   // Right wall
    createWall(0, -15, Math.PI/2, 30);  // Back wall
    createWall(0, 15, Math.PI/2, 30);   // Front wall
    
    // Inner maze walls
    createWall(-8, -8, 0, 10);
    createWall(8, -8, 0, 10);
    createWall(-8, 8, 0, 10);
    createWall(8, 8, 0, 10);
    createWall(0, -8, Math.PI/2, 8);
    createWall(0, 8, Math.PI/2, 8);

    // Neon signs
    function createNeonSign(text, color1 = '#ff00ff', color2 = '#ffff00') {
      const canvas = document.createElement('canvas');
      canvas.width = 128;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      
      ctx.fillStyle = color1;
      ctx.fillRect(0, 0, 128, 64);
      
      ctx.fillStyle = color2;
      ctx.font = 'bold 24px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, 64, 32);
      ctx.shadowColor = color2;
      ctx.shadowBlur = 10;
      ctx.fillText(text, 64, 32);
      
      const texture = new THREE.CanvasTexture(canvas);
      texture.magFilter = THREE.NearestFilter;
      return texture;
    }

    function createSign(text, x, y, z, color1, color2) {
      const signGeometry = new THREE.PlaneGeometry(3, 1.5);
      const signTexture = createNeonSign(text, color1, color2);
      const signMaterial = new THREE.MeshBasicMaterial({ 
        map: signTexture
      });
      const sign = new THREE.Mesh(signGeometry, signMaterial);
      sign.position.set(x, y, z);
      scene.add(sign);
      return sign;
    }

    const signs = [];
    signs.push(createSign('PIZZA', -14.5, 3, -5, '#ff00ff', '#ffff00'));
    signs.push(createSign('ARCADE', 14.5, 3, -8, '#00ffff', '#ff00ff'));
    signs.push(createSign('SBARRO', -14.5, 3, 5, '#ffff00', '#ff0080'));

    // Scary entity
    function createEntity() {
      const group = new THREE.Group();
      
      // Glitchy distorted body
      const bodyGeometry = new THREE.BoxGeometry(1.5, 3, 1, 1, 1, 1);
      const bodyMaterial = new THREE.MeshLambertMaterial({ 
        color: 0x000000,
        emissive: 0xff0000,
        emissiveIntensity: 0.5,
        flatShading: true
      });
      const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
      body.position.y = 1.5;
      group.add(body);
      
      // Glowing red eyes
      const eyeGeometry = new THREE.SphereGeometry(0.2, 6, 6);
      const eyeMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xff0000
      });
      const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
      leftEye.position.set(-0.4, 2.5, 0.51);
      group.add(leftEye);
      const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
      rightEye.position.set(0.4, 2.5, 0.51);
      group.add(rightEye);
      
      // Long distorted arms
      const armGeometry = new THREE.BoxGeometry(0.3, 2.5, 0.3, 1, 1, 1);
      const leftArm = new THREE.Mesh(armGeometry, bodyMaterial);
      leftArm.position.set(-1, 1.5, 0);
      group.add(leftArm);
      const rightArm = new THREE.Mesh(armGeometry, bodyMaterial);
      rightArm.position.set(1, 1.5, 0);
      group.add(rightArm);
      
      group.position.set(-20, 0, -20);
      scene.add(group);
      return group;
    }

    const entity = createEntity();

    // Collectibles
    function createFlipPhoneSticker() {
      const group = new THREE.Group();
      
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, '#ff00ff');
      gradient.addColorStop(0.5, '#00ffff');
      gradient.addColorStop(1, '#ffff00');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
      
      ctx.fillStyle = '#fff';
      ctx.fillRect(20, 15, 24, 35);
      ctx.fillStyle = '#000';
      ctx.fillRect(22, 17, 20, 15);
      ctx.fillRect(26, 34, 4, 4);
      ctx.fillRect(34, 34, 4, 4);
      ctx.fillRect(26, 40, 4, 4);
      ctx.fillRect(34, 40, 4, 4);
      
      const texture = new THREE.CanvasTexture(canvas);
      texture.magFilter = THREE.NearestFilter;
      
      const geometry = new THREE.PlaneGeometry(1.5, 1.5);
      const material = new THREE.MeshBasicMaterial({ 
        map: texture,
        transparent: true,
        side: THREE.DoubleSide
      });
      const sticker = new THREE.Mesh(geometry, material);
      group.add(sticker);

      const validPositions = [
        {x: -10, z: -10}, {x: 10, z: -10}, {x: -10, z: 10}, {x: 10, z: 10},
        {x: -5, z: 0}, {x: 5, z: 0}, {x: 0, z: -5}, {x: 0, z: 5}
      ];
      const pos = validPositions[Math.floor(Math.random() * validPositions.length)];
      group.position.set(pos.x, 1.5, pos.z);
      
      scene.add(group);
      return group;
    }

    function createGlitterDecal() {
      const group = new THREE.Group();
      
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      
      ctx.fillStyle = '#ff00ff';
      ctx.font = 'bold 40px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('★', 32, 32);
      
      ctx.strokeStyle = '#ffff00';
      ctx.lineWidth = 3;
      ctx.strokeText('★', 32, 32);
      
      const texture = new THREE.CanvasTexture(canvas);
      texture.magFilter = THREE.NearestFilter;
      
      const geometry = new THREE.PlaneGeometry(1.2, 1.2);
      const material = new THREE.MeshBasicMaterial({ 
        map: texture,
        transparent: true,
        side: THREE.DoubleSide
      });
      const decal = new THREE.Mesh(geometry, material);
      group.add(decal);

      const validPositions = [
        {x: -12, z: -8}, {x: 12, z: -8}, {x: -12, z: 8}, {x: 12, z: 8},
        {x: -3, z: -3}, {x: 3, z: -3}, {x: -3, z: 3}, {x: 3, z: 3}
      ];
      const pos = validPositions[Math.floor(Math.random() * validPositions.length)];
      group.position.set(pos.x, 1.2, pos.z);
      
      scene.add(group);
      return group;
    }

    const collectibles = [];
    for (let i = 0; i < 8; i++) {
      collectibles.push(i % 2 === 0 ? createFlipPhoneSticker() : createGlitterDecal());
    }

    // Collision detection function
    function checkCollision(pos) {
      const playerRadius = 0.4;
      
      for (const wall of walls) {
        if (pos.x + playerRadius > wall.minX && 
            pos.x - playerRadius < wall.maxX &&
            pos.z + playerRadius > wall.minZ && 
            pos.z - playerRadius < wall.maxZ) {
          return true;
        }
      }
      return false;
    }

    // First person controls - start in a safe open area
    const playerPos = new THREE.Vector3(-5, 0, -5);
    const eyeHeight = 1.6;
    let yaw = Math.PI; // Start facing north (into the scene)
    let pitch = 0; // Look straight ahead, not down
    
    // Set initial camera position
    camera.position.set(playerPos.x, eyeHeight, playerPos.z);
    camera.rotation.order = 'YXZ';
    camera.rotation.y = yaw;
    camera.rotation.x = pitch;

    const keys = { w: false, a: false, s: false, d: false, space: false };
    let velocityY = 0;
    let isGrounded = true;
    
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      
      if (!gameStateRef.current.started) {
        gameStateRef.current.started = true;
        setStarted(true);
      }
      
      if (key === 'w' || key === 'arrowup') keys.w = true;
      if (key === 'a' || key === 'arrowleft') keys.a = true;
      if (key === 's' || key === 'arrowdown') keys.s = true;
      if (key === 'd' || key === 'arrowright') keys.d = true;
      if (key === ' ') {
        keys.space = true;
        if (isGrounded) {
          velocityY = 0.25;
          isGrounded = false;
        }
      }
    };
    
    const handleKeyUp = (e) => {
      const key = e.key.toLowerCase();
      if (key === 'w' || key === 'arrowup') keys.w = false;
      if (key === 'a' || key === 'arrowleft') keys.a = false;
      if (key === 's' || key === 'arrowdown') keys.s = false;
      if (key === 'd' || key === 'arrowright') keys.d = false;
      if (key === ' ') keys.space = false;
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

    const moveSpeed = 0.12;
    let frameCount = 0;
    let jitterX = 0, jitterY = 0;

    function animate() {
      requestAnimationFrame(animate);

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
      
      if (frameCount % 3 !== 0) {
        renderer.render(scene, camera);
        return;
      }

      if (gameStateRef.current.started && !gameStateRef.current.gameOver) {
        setTime(t => t + 1);

        // Movement with proper direction vectors
        const forward = new THREE.Vector3(-Math.sin(yaw), 0, -Math.cos(yaw));
        const right = new THREE.Vector3(Math.cos(yaw), 0, -Math.sin(yaw));
        
        let moveX = 0;
        let moveZ = 0;
        
        if (keys.w) {
          moveX += forward.x * moveSpeed;
          moveZ += forward.z * moveSpeed;
        }
        if (keys.s) {
          moveX -= forward.x * moveSpeed;
          moveZ -= forward.z * moveSpeed;
        }
        if (keys.a) {
          moveX -= right.x * moveSpeed;
          moveZ -= right.z * moveSpeed;
        }
        if (keys.d) {
          moveX += right.x * moveSpeed;
          moveZ += right.z * moveSpeed;
        }

        // Check collision separately for X and Z axes
        const newPosX = playerPos.clone();
        newPosX.x += moveX;
        if (!checkCollision(newPosX)) {
          playerPos.x = newPosX.x;
        }
        
        const newPosZ = playerPos.clone();
        newPosZ.z += moveZ;
        if (!checkCollision(newPosZ)) {
          playerPos.z = newPosZ.z;
        }

        // Jump physics
        const gravity = -0.015;
        const groundLevel = 0;
        
        velocityY += gravity;
        playerPos.y += velocityY;
        
        if (playerPos.y <= groundLevel) {
          playerPos.y = groundLevel;
          velocityY = 0;
          isGrounded = true;
        }

        // Camera
        jitterX = (Math.random() - 0.5) * 0.03;
        jitterY = (Math.random() - 0.5) * 0.03;

        camera.position.set(
          playerPos.x + jitterX,
          playerPos.y + eyeHeight + jitterY,
          playerPos.z
        );
        camera.rotation.order = 'YXZ';
        camera.rotation.y = yaw;
        camera.rotation.x = pitch;

        // Entity AI - chase player
        const dirToPlayer = new THREE.Vector3(
          playerPos.x - entity.position.x,
          0,
          playerPos.z - entity.position.z
        );
        const distToPlayer = dirToPlayer.length();
        setEntityDistance(Math.floor(distToPlayer));

        if (distToPlayer > 0.1) {
          dirToPlayer.normalize();
          const entitySpeed = 0.06 + (gameStateRef.current.score * 0.002); // Gets faster with score
          
          const newEntityPos = entity.position.clone();
          newEntityPos.x += dirToPlayer.x * entitySpeed;
          newEntityPos.z += dirToPlayer.z * entitySpeed;
          
          // Entity can go through some walls (spooky!)
          entity.position.copy(newEntityPos);
          
          // Make entity face player
          const angleToPlayer = Math.atan2(dirToPlayer.x, dirToPlayer.z);
          entity.rotation.y = angleToPlayer;
        }

        // Glitchy entity animation
        entity.children.forEach((child, i) => {
          if (i > 0) {
            child.position.x += (Math.random() - 0.5) * 0.1;
            child.position.y += (Math.random() - 0.5) * 0.1;
          }
        });

        // Entity catches player
        if (distToPlayer < 2) {
          gameStateRef.current.gameOver = true;
          setGameOver(true);
        }

        // Lights flicker
        neonLight1.intensity = 0.8 + Math.random() * 0.4;
        neonLight2.intensity = 0.8 + Math.random() * 0.4;
        neonLight3.intensity = 0.8 + Math.random() * 0.4;

        // Collectibles
        for (let i = collectibles.length - 1; i >= 0; i--) {
          const obj = collectibles[i];
          obj.rotation.y += 0.05;
          obj.position.y = (obj.position.y < 1.4 ? 1.5 : 1.2) + Math.sin(Date.now() * 0.003 + i) * 0.3;
          obj.children[0].lookAt(camera.position);

          // Check distance in 2D (X and Z only) since playerPos.y is 0 and obj is higher
          const dx = playerPos.x - obj.position.x;
          const dz = playerPos.z - obj.position.z;
          const dist = Math.sqrt(dx * dx + dz * dz);
          
          if (dist < 1.5) {
            scene.remove(obj);
            collectibles.splice(i, 1);
            gameStateRef.current.score += 10;
            setScore(gameStateRef.current.score);
            collectibles.push(Math.random() > 0.5 ? createFlipPhoneSticker() : createGlitterDecal());
          }
        }

        // Signs wobble
        signs.forEach((sign, i) => {
          sign.rotation.z = Math.sin(Date.now() * 0.001 + i) * 0.05;
        });
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
      renderer.dispose();
    };
  }, []);

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
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative', backgroundColor: '#000' }}>
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
      
      <div style={{
        position: 'absolute',
        top: 15,
        left: 15,
        fontFamily: 'Comic Sans MS, cursive',
        color: '#ffff00',
        fontSize: '24px',
        textShadow: '3px 3px 0px #ff00ff, -1px -1px 0px #00ffff',
        fontWeight: 'bold',
        imageRendering: 'pixelated'
      }}>
        ✨ {score} ✨
      </div>

      <div style={{
        position: 'absolute',
        top: 15,
        right: 15,
        fontFamily: 'Comic Sans MS, cursive',
        color: '#00ffff',
        fontSize: '20px',
        textShadow: '2px 2px 0px #000',
        fontWeight: 'bold',
        textAlign: 'right'
      }}>
        🕐 {formatTime(time)}
      </div>

      {started && !gameOver && (
        <div style={{
          position: 'absolute',
          bottom: 15,
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: 'Comic Sans MS, cursive',
          color: entityDistance < 10 ? '#ff0000' : '#ff00ff',
          fontSize: entityDistance < 10 ? '32px' : '20px',
          textShadow: entityDistance < 10 ? '4px 4px 0px #000' : '2px 2px 0px #000',
          fontWeight: 'bold',
          textAlign: 'center',
          animation: entityDistance < 10 ? 'pulse 0.5s infinite' : 'none'
        }}>
          {entityDistance < 10 ? '⚠️ IT\'S CLOSE ⚠️' : `Entity: ${entityDistance}m away`}
        </div>
      )}

      <div style={{
        position: 'absolute',
        bottom: 15,
        right: 15,
        fontFamily: 'Comic Sans MS, cursive',
        color: '#ff00ff',
        fontSize: '14px',
        textShadow: '2px 2px 0px #000',
        backgroundColor: 'rgba(0,0,0,0.7)',
        padding: '8px',
        border: '2px solid #00ffff'
      }}>
        WASD - move<br/>
        SPACE - jump<br/>
        Mouse - look<br/>
        Click to lock cursor
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
          fontFamily: 'Comic Sans MS, cursive',
          color: '#ffff00',
          fontSize: '22px',
          fontWeight: 'bold',
          backgroundColor: 'rgba(0, 0, 102, 0.95)',
          padding: '35px',
          border: '6px solid #ff00ff',
          boxShadow: '0 0 40px #00ffff',
          imageRendering: 'pixelated',
          cursor: 'pointer'
        }}>
          <div style={{ fontSize: '50px', marginBottom: '20px', textShadow: '5px 5px 0px #ff00ff' }}>
            🏬 LIMINAL MALL 🏬
          </div>
          <div style={{ fontSize: '18px', color: '#00ffff', marginBottom: '15px' }}>
            📱 Collect stickers & decals
          </div>
          <div style={{ fontSize: '18px', color: '#ff0000', marginBottom: '20px', textShadow: '3px 3px 0px #000' }}>
            👁️ SOMETHING IS WATCHING...
          </div>
          <div style={{ fontSize: '16px', color: '#fff', marginTop: '15px' }}>
            ⏰ It's 2:07 AM... The mall is empty...
          </div>
          <div style={{ fontSize: '16px', color: '#ff0000', marginTop: '10px', fontStyle: 'italic' }}>
            ...or is it?
          </div>
          <div style={{ fontSize: '24px', color: '#ffff00', marginTop: '25px', textShadow: '3px 3px 0px #000', animation: 'blink 1s infinite' }}>
            &gt;&gt; CLICK HERE TO START &lt;&lt;
          </div>
        </div>
      )}

      {gameOver && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          fontFamily: 'Comic Sans MS, cursive',
          color: '#fff',
          fontSize: '40px',
          fontWeight: 'bold',
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          padding: '45px',
          border: '8px solid #ff0000',
          boxShadow: '0 0 50px #ff0000',
          imageRendering: 'pixelated'
        }}>
          <div style={{ fontSize: '60px', marginBottom: '25px', color: '#ff0000', textShadow: '5px 5px 0px #000' }}>
            👁️ IT GOT YOU 👁️
          </div>
          <div style={{ fontSize: '28px', color: '#ffff00', marginBottom: '15px' }}>
            You survived: {formatTime(time)}
          </div>
          <div style={{ fontSize: '28px', color: '#00ffff', textShadow: '2px 2px 0px #000' }}>
            Score: {score}
          </div>
          <button
            onClick={restart}
            style={{
              marginTop: '30px',
              padding: '18px 55px',
              fontSize: '28px',
              fontFamily: 'Comic Sans MS, cursive',
              background: 'linear-gradient(180deg, #ff00ff, #0066cc)',
              color: '#ffff00',
              border: '5px solid #00ffff',
              cursor: 'pointer',
              fontWeight: 'bold',
              borderRadius: '8px',
              textShadow: '3px 3px 0px #000',
              boxShadow: '0 0 25px #ff00ff'
            }}
          >
            TRY AGAIN
          </button>
        </div>
      )}

      <style>{`
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1) translateX(-50%); }
          50% { transform: scale(1.1) translateX(-50%); }
        }
      `}</style>
    </div>
  );
}