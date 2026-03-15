"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 1000 }) {
  const points = useRef<THREE.Points>(null);

  // Generate random positions and colors for particles
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Spread particles across a wide area (-10 to 10)
      positions[i * 3]     = (Math.random() - 0.5) * 20; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // z
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (!points.current) return;
    
    // Smooth slow rotation
    points.current.rotation.y = state.clock.elapsedTime * 0.05;
    points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.2;
    
    // Slight vertical wave
    points.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
          args={[particlesPosition, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#00d2ff" // Neon blue accent
        transparent
        opacity={0.6}
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function ParticleCanvas() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["transparent"]} />
        <ambientLight intensity={0.5} />
        <Particles count={700} />
      </Canvas>
      
      {/* Overlay gradient to fade out particles at the bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10"></div>
    </div>
  );
}
