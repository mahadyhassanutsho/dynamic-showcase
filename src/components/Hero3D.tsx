import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Sphere, OrbitControls, MeshDistortMaterial } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

// Tech icon as a colored floating box
const TechBadge = ({ 
  position, 
  color, 
  scale = 0.5,
  rotationSpeed = 0.3 
}: { 
  position: [number, number, number]; 
  color: string; 
  scale?: number;
  rotationSpeed?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * rotationSpeed;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={1}>
      <RoundedBox ref={meshRef} position={position} args={[1, 1, 0.2]} radius={0.1} smoothness={4} scale={scale}>
        <meshStandardMaterial
          color={color}
          roughness={0.2}
          metalness={0.8}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </RoundedBox>
    </Float>
  );
};

// Central animated sphere with distortion
const CentralSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <Sphere ref={meshRef} args={[1.5, 64, 64]}>
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

// Code bracket decoration
const CodeBracket = ({ position, color, scale = 1 }: { 
  position: [number, number, number]; 
  color: string;
  scale?: number;
}) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef} position={position} scale={scale}>
        {/* Left bracket < */}
        <mesh position={[-0.3, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[0.1, 0.8, 0.1]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
        </mesh>
        <mesh position={[-0.3, 0, 0]} rotation={[0, 0, -Math.PI / 4]}>
          <boxGeometry args={[0.1, 0.8, 0.1]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
        </mesh>
        {/* Slash / */}
        <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 6]}>
          <boxGeometry args={[0.08, 1, 0.08]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
        </mesh>
        {/* Right bracket > */}
        <mesh position={[0.3, 0, 0]} rotation={[0, 0, -Math.PI / 4]}>
          <boxGeometry args={[0.1, 0.8, 0.1]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
        </mesh>
        <mesh position={[0.3, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[0.1, 0.8, 0.1]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
        </mesh>
      </group>
    </Float>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -5]} intensity={0.6} color="#a855f7" />
      <pointLight position={[5, 5, 5]} intensity={0.6} color="#00d4ff" />
      
      {/* Central rotating element */}
      <CentralSphere />
      
      {/* Tech badges floating around - React (cyan) */}
      <TechBadge position={[2.8, 1.5, 0]} color="#61dafb" scale={0.6} rotationSpeed={0.3} />
      
      {/* Tailwind (sky blue) */}
      <TechBadge position={[-2.8, 1.5, 0]} color="#38bdf8" scale={0.55} rotationSpeed={0.4} />
      
      {/* Next.js (dark) */}
      <TechBadge position={[2.5, -1.8, 0.5]} color="#171717" scale={0.5} rotationSpeed={0.35} />
      
      {/* TypeScript (blue) */}
      <TechBadge position={[-2.5, -1.8, 0.5]} color="#3178c6" scale={0.55} rotationSpeed={0.45} />
      
      {/* Node.js (green) */}
      <TechBadge position={[0, 2.8, -0.5]} color="#68a063" scale={0.5} rotationSpeed={0.25} />
      
      {/* Prisma (dark purple) */}
      <TechBadge position={[-1.5, 2.2, 0.3]} color="#2d3748" scale={0.45} rotationSpeed={0.38} />
      
      {/* PostgreSQL (blue) */}
      <TechBadge position={[1.5, 2.2, 0.3]} color="#336791" scale={0.45} rotationSpeed={0.32} />
      
      {/* MongoDB (green) */}
      <TechBadge position={[0, -2.5, 0]} color="#47a248" scale={0.5} rotationSpeed={0.28} />
      
      {/* Firebase (orange) */}
      <TechBadge position={[-3, 0, -0.5]} color="#ffca28" scale={0.45} rotationSpeed={0.4} />
      
      {/* JavaScript (yellow) */}
      <TechBadge position={[3, 0, -0.5]} color="#f7df1e" scale={0.45} rotationSpeed={0.35} />
      
      {/* Code brackets decoration */}
      <CodeBracket position={[-1.8, -0.5, -1]} color="#a855f7" scale={0.8} />
      <CodeBracket position={[1.8, -0.5, -1]} color="#ec4899" scale={0.8} />
      
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
        camera={{ position: [0, 0, 8], fov: 45 }}
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
