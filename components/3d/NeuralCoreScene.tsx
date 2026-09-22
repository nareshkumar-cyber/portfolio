"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Glowing central orb with dynamic pulsing
function NeuralOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.25;
      meshRef.current.rotation.x = Math.sin(t * 0.2) * 0.15;
    }
    if (glowRef.current) {
      const scale = 1 + Math.sin(t * 2) * 0.05;
      glowRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group>
      {/* Inner Dense Wireframe Core */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.3, 4]} />
        <meshStandardMaterial
          color="#00f2fe"
          emissive="#004e92"
          emissiveIntensity={0.8}
          wireframe={true}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Inner Solid Core with Fresnel glow */}
      <mesh>
        <sphereGeometry args={[0.9, 32, 32]} />
        <meshStandardMaterial
          color="#0d1f2d"
          emissive="#73e4e8"
          emissiveIntensity={0.4}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>

      {/* Pulsing Outer Energy Shield */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[1.4, 32, 32]} />
        <meshStandardMaterial
          color="#d1ff56"
          emissive="#d1ff56"
          emissiveIntensity={0.25}
          transparent={true}
          opacity={0.15}
          wireframe={true}
        />
      </mesh>
    </group>
  );
}

// Interconnected Neural Nodes
function NeuralNodes({ count = 45 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const [positions, connections] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const radius = 2.1;

    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = radius * (0.8 + Math.random() * 0.4);

      const sinPhi = Math.sin(phi);
      pos[i * 3] = r * sinPhi * Math.cos(theta);
      pos[i * 3 + 1] = r * sinPhi * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }

    // Connect close neighbors
    const lineIndices: number[] = [];
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = pos[i * 3] - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < 1.3) {
          lineIndices.push(
            pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2],
            pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]
          );
        }
      }
    }

    return [pos, new Float32Array(lineIndices)];
  }, [count]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.12;
      pointsRef.current.rotation.x = Math.sin(t * 0.1) * 0.1;
    }
    if (linesRef.current) {
      linesRef.current.rotation.y = t * 0.12;
      linesRef.current.rotation.x = Math.sin(t * 0.1) * 0.1;
    }
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.07}
          color="#d1ff56"
          transparent={true}
          opacity={0.9}
        />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[connections, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#00f2fe"
          transparent={true}
          opacity={0.28}
        />
      </lineSegments>
    </group>
  );
}

// Orbiting Energy Rings
function OrbitingRings() {
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  const ring3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ring1.current) {
      ring1.current.rotation.x = Math.PI / 3 + Math.sin(t * 0.4) * 0.1;
      ring1.current.rotation.y = t * 0.35;
    }
    if (ring2.current) {
      ring2.current.rotation.x = -Math.PI / 4 + Math.cos(t * 0.3) * 0.15;
      ring2.current.rotation.y = -t * 0.25;
    }
    if (ring3.current) {
      ring3.current.rotation.z = Math.PI / 6 + Math.sin(t * 0.2) * 0.2;
      ring3.current.rotation.y = t * 0.15;
    }
  });

  return (
    <group>
      <mesh ref={ring1}>
        <torusGeometry args={[2.2, 0.015, 16, 100]} />
        <meshBasicMaterial color="#00f2fe" transparent opacity={0.5} />
      </mesh>
      <mesh ref={ring2}>
        <torusGeometry args={[2.5, 0.012, 16, 100]} />
        <meshBasicMaterial color="#d1ff56" transparent opacity={0.4} />
      </mesh>
      <mesh ref={ring3}>
        <torusGeometry args={[2.8, 0.01, 16, 100]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

// Ambient Floating Data Particles
function ParticleField({ count = 120 }: { count?: number }) {
  const particlesRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.04;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#73e4e8"
        transparent={true}
        opacity={0.6}
      />
    </points>
  );
}

// Interactive Container with dynamic mouse reaction
function SceneContents({ mouseX = 0, mouseY = 0 }: { mouseX: number; mouseY: number }) {
  const sceneGroup = useRef<THREE.Group>(null);

  useFrame(() => {
    if (sceneGroup.current) {
      // Smooth lerping toward mouse position
      sceneGroup.current.rotation.y += (mouseX * 0.6 - sceneGroup.current.rotation.y) * 0.05;
      sceneGroup.current.rotation.x += (-mouseY * 0.4 - sceneGroup.current.rotation.x) * 0.05;
    }
  });

  return (
    <group ref={sceneGroup}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#d1ff56" />
      <pointLight position={[-5, -5, -3]} intensity={2} color="#00f2fe" />
      <pointLight position={[0, 0, 0]} intensity={3} color="#00f2fe" distance={5} />

      <NeuralOrb />
      <NeuralNodes count={50} />
      <OrbitingRings />
      <ParticleField count={100} />
    </group>
  );
}

export default function NeuralCoreScene() {
  const [mouse, setMouse] = React.useState({ x: 0, y: 0 });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    setMouse({ x, y });
  };

  return (
    <div
      className="relative w-full h-full min-h-[380px] lg:min-h-[520px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
      onPointerMove={handlePointerMove}
    >
      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full"
      >
        <SceneContents mouseX={mouse.x} mouseY={mouse.y} />
      </Canvas>
    </div>
  );
}
