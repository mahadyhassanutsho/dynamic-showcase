import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text, RoundedBox, OrbitControls } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

// Tech icon component with floating animation
const TechIcon = ({ 
  position, 
  color, 
  text, 
  rotationSpeed = 0.5 
}: { 
  position: [number, number, number]; 
  color: string; 
  text: string;
  rotationSpeed?: number;
}) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * rotationSpeed;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={1}>
      <group ref={groupRef} position={position}>
        <RoundedBox args={[1.2, 1.2, 0.2]} radius={0.15} smoothness={4}>
          <meshStandardMaterial
            color={color}
            roughness={0.2}
            metalness={0.8}
            emissive={color}
            emissiveIntensity={0.3}
          />
        </RoundedBox>
        <Text
          position={[0, 0, 0.15]}
          fontSize={0.35}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          font="/fonts/inter-bold.woff"
        >
          {text}
        </Text>
      </group>
    </Float>
  );
};

// Main code bracket decoration
const CodeBracket = ({ position, rotation, color }: { 
  position: [number, number, number]; 
  rotation: [number, number, number];
  color: string;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <Text
        ref={meshRef}
        position={position}
        rotation={rotation}
        fontSize={2}
        color={color}
        anchorX="center"
        anchorY="middle"
      >
        {"</>"}
      </Text>
    </Float>
  );
};

// Central rotating cube with code symbol
const CentralCube = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <RoundedBox ref={meshRef} args={[2, 2, 2]} radius={0.2} smoothness={4}>
        <meshStandardMaterial
          color="#00d4ff"
          roughness={0.1}
          metalness={0.9}
          emissive="#00d4ff"
          emissiveIntensity={0.4}
        />
      </RoundedBox>
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
      <CentralCube />
      
      {/* Tech icons floating around */}
      <TechIcon position={[2.5, 1.2, 0]} color="#61dafb" text="⚛" rotationSpeed={0.3} />
      <TechIcon position={[-2.5, 1.2, 0]} color="#38bdf8" text="TW" rotationSpeed={0.4} />
      <TechIcon position={[2.2, -1.5, 0.5]} color="#000000" text="N" rotationSpeed={0.35} />
      <TechIcon position={[-2.2, -1.5, 0.5]} color="#3178c6" text="TS" rotationSpeed={0.45} />
      <TechIcon position={[0, 2.2, -0.5]} color="#68a063" text="JS" rotationSpeed={0.25} />
      
      {/* Code brackets decoration */}
      <CodeBracket position={[-1.8, 0, -1]} rotation={[0, 0.3, 0]} color="#a855f7" />
      <CodeBracket position={[1.8, 0, -1]} rotation={[0, -0.3, 0]} color="#ec4899" />
      
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
        camera={{ position: [0, 0, 7], fov: 45 }}
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
