import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus, Box, OrbitControls } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 100, 100]} scale={1.8}>
        <MeshDistortMaterial
          color="#00d4ff"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const FloatingTorus = ({ position, color, scale }: { position: [number, number, number]; color: string; scale: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <Torus ref={meshRef} args={[1, 0.3, 16, 50]} position={position} scale={scale}>
        <meshStandardMaterial
          color={color}
          roughness={0.3}
          metalness={0.9}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </Torus>
    </Float>
  );
};

const FloatingCube = ({ position, color, scale }: { position: [number, number, number]; color: string; scale: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <Box ref={meshRef} args={[1, 1, 1]} position={position} scale={scale}>
        <meshStandardMaterial
          color={color}
          roughness={0.2}
          metalness={0.9}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </Box>
    </Float>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#a855f7" />
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#00d4ff" />
      
      <AnimatedSphere />
      <FloatingTorus position={[2.5, 1, -1]} color="#a855f7" scale={0.5} />
      <FloatingTorus position={[-2.5, -1, -1]} color="#ec4899" scale={0.4} />
      <FloatingCube position={[1.8, -1.5, 0.5]} color="#00d4ff" scale={0.4} />
      <FloatingCube position={[-2, 1.5, 0.5]} color="#a855f7" scale={0.3} />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  );
};

const Hero3D = () => {
  return (
    <div className="relative w-full h-full">
      {/* Glow background */}
      <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl animate-pulse" />
      
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Hero3D;
