"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function CommunicationGlobe() {
  const meshRef = useRef<THREE.Mesh>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.2;
      meshRef.current.rotation.x = Math.sin(t * 0.15) * 0.1;
    }
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y = -t * 0.15;
    }
  });

  return (
    <group>
      {/* Wireframe Mesh Globe */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.5, 24, 24]} />
        <meshStandardMaterial
          color="#00f2fe"
          emissive="#005577"
          emissiveIntensity={0.6}
          wireframe={true}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Outer Atmosphere Glow */}
      <mesh ref={atmosphereRef}>
        <sphereGeometry args={[1.75, 32, 32]} />
        <meshStandardMaterial
          color="#d1ff56"
          emissive="#d1ff56"
          emissiveIntensity={0.2}
          transparent
          opacity={0.12}
          wireframe
        />
      </mesh>

      {/* Lat/Long Pulse Ring */}
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.0, 0.015, 16, 80]} />
        <meshBasicMaterial color="#00f2fe" transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

export default function CommunicationOrbScene() {
  return (
    <div className="relative w-full h-[320px] md:h-[400px] flex items-center justify-center select-none">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 3, 3]} intensity={1.5} color="#d1ff56" />
        <pointLight position={[-3, -3, 2]} intensity={2} color="#00f2fe" />
        <CommunicationGlobe />
      </Canvas>
    </div>
  );
}
