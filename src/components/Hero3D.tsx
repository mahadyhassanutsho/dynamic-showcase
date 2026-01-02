import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Sphere, OrbitControls, MeshDistortMaterial, Html } from "@react-three/drei";
import { useRef, Suspense, useState } from "react";
import * as THREE from "three";

// Tech badge with icon on cube face and hover tooltip
const TechBadge = ({ 
  position, 
  color, 
  name,
  icon,
  scale = 0.5,
  rotationSpeed = 0.3 
}: { 
  position: [number, number, number]; 
  color: string; 
  name: string;
  icon: string;
  scale?: number;
  rotationSpeed?: number;
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * rotationSpeed;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={1}>
      <group position={position}>
        <group 
          ref={groupRef}
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
        >
          <RoundedBox 
            args={[1, 1, 0.2]} 
            radius={0.1} 
            smoothness={4} 
            scale={scale}
          >
            <meshStandardMaterial
              color={color}
              roughness={0.2}
              metalness={0.8}
              emissive={color}
              emissiveIntensity={hovered ? 0.6 : 0.3}
            />
          </RoundedBox>
          
          {/* Icon on front face */}
          <Html
            position={[0, 0, scale * 0.12]}
            center
            transform
            occlude
            style={{
              pointerEvents: 'none',
            }}
          >
            <div 
              className="flex items-center justify-center rounded-md"
              style={{ 
                width: `${scale * 70}px`, 
                height: `${scale * 70}px`,
                background: 'rgba(0,0,0,0.3)',
              }}
            >
              <img 
                src={icon} 
                alt={name} 
                style={{ 
                  width: `${scale * 50}px`, 
                  height: `${scale * 50}px`,
                  filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.5))'
                }}
              />
            </div>
          </Html>
          
          {/* Icon on back face */}
          <Html
            position={[0, 0, -scale * 0.12]}
            center
            transform
            occlude
            rotation={[0, Math.PI, 0]}
            style={{
              pointerEvents: 'none',
            }}
          >
            <div 
              className="flex items-center justify-center rounded-md"
              style={{ 
                width: `${scale * 70}px`, 
                height: `${scale * 70}px`,
                background: 'rgba(0,0,0,0.3)',
              }}
            >
              <img 
                src={icon} 
                alt={name} 
                style={{ 
                  width: `${scale * 50}px`, 
                  height: `${scale * 50}px`,
                  filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.5))'
                }}
              />
            </div>
          </Html>
        </group>
        
        {/* Tooltip label */}
        <Html
          position={[0, scale * 0.8, 0]}
          center
          style={{
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.2s ease',
            pointerEvents: 'none',
          }}
        >
          <div className="flex items-center gap-2 px-3 py-1.5 glass rounded-lg border border-border/50 whitespace-nowrap">
            <img src={icon} alt={name} className="w-4 h-4" />
            <span className="text-xs font-medium text-foreground">{name}</span>
          </div>
        </Html>
      </group>
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

// Tech stack data with CDN icons
const techStack = [
  { position: [2.8, 1.5, 0] as [number, number, number], color: "#61dafb", name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", rotationSpeed: 0.3 },
  { position: [-2.8, 1.5, 0] as [number, number, number], color: "#38bdf8", name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", rotationSpeed: 0.4 },
  { position: [2.5, -1.8, 0.5] as [number, number, number], color: "#171717", name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", rotationSpeed: 0.35 },
  { position: [-2.5, -1.8, 0.5] as [number, number, number], color: "#3178c6", name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", rotationSpeed: 0.45 },
  { position: [0, 2.8, -0.5] as [number, number, number], color: "#68a063", name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", rotationSpeed: 0.25 },
  { position: [-1.8, 2.2, 0.3] as [number, number, number], color: "#5a67d8", name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg", rotationSpeed: 0.38 },
  { position: [1.8, 2.2, 0.3] as [number, number, number], color: "#336791", name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", rotationSpeed: 0.32 },
  { position: [0, -2.5, 0] as [number, number, number], color: "#47a248", name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", rotationSpeed: 0.28 },
  { position: [-3, 0, -0.5] as [number, number, number], color: "#ffca28", name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", rotationSpeed: 0.4 },
  { position: [3, 0, -0.5] as [number, number, number], color: "#f7df1e", name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", rotationSpeed: 0.35 },
];

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -5]} intensity={0.6} color="#a855f7" />
      <pointLight position={[5, 5, 5]} intensity={0.6} color="#00d4ff" />
      
      {/* Central rotating element */}
      <CentralSphere />
      
      {/* Tech badges with icons and tooltips */}
      {techStack.map((tech) => (
        <TechBadge
          key={tech.name}
          position={tech.position}
          color={tech.color}
          name={tech.name}
          icon={tech.icon}
          scale={0.55}
          rotationSpeed={tech.rotationSpeed}
        />
      ))}
      
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
