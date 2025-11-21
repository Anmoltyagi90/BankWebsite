import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  ContactShadows,
  Environment,
  Float,
  PresentationControls,
  RoundedBox,
  Sparkles,
  Text,
} from '@react-three/drei'

const BankCard = () => (
  <group>
    <RoundedBox args={[4.4, 2.7, 0.22]} radius={0.35} smoothness={8}>
      <meshStandardMaterial color="#0f172a" metalness={0.35} roughness={0.3} emissive="#1f6fff" emissiveIntensity={0.08} />
    </RoundedBox>

    <RoundedBox args={[4.5, 2.8, 0.08]} radius={0.4} smoothness={12} position={[0, 0, -0.08]}>
      <meshStandardMaterial color="#101936" metalness={0.4} roughness={0.6} />
    </RoundedBox>

    <mesh position={[0.2, 0.3, 0.12]}>
      <boxGeometry args={[0.6, 0.5, 0.05]} />
      <meshStandardMaterial color="#facc15" metalness={0.8} roughness={0.2} />
    </mesh>

    <Text fontSize={0.22} color="white" position={[-1.7, 0.65, 0.15]}>
      NeonBank Infinite
    </Text>
    <Text fontSize={0.32} letterSpacing={0.08} color="white" position={[-1.7, 0.05, 0.15]}>
      5290 8426
    </Text>
    <Text fontSize={0.32} letterSpacing={0.08} color="white" position={[-1.7, -0.4, 0.15]}>
      9135 0048
    </Text>
    <Text fontSize={0.22} color="#bae6fd" position={[-1.6, -0.95, 0.15]}>
      Expires 10 · 32
    </Text>
    <Text fontSize={0.3} color="white" position={[0.8, -0.95, 0.15]}>
      LUMI
    </Text>

    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.3, -0.12]}>
      <ringGeometry args={[1.5, 1.6, 64]} />
      <meshBasicMaterial color="#22d3ee" transparent opacity={0.3} />
    </mesh>
  </group>
)

const HeroCanvas = () => (
  <div className="mx-auto h-[420px] w-full max-w-xl">
    <Canvas camera={{ position: [0, 0, 6], fov: 42 }} shadows>
      <color attach="background" args={['#030014']} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 5, 5]} intensity={1.4} />
      <Suspense fallback={null}>
        <PresentationControls enabled global polar={[-0.2, 0.2]} azimuth={[-0.3, 0.3]} config={{ mass: 2, tension: 250 }}>
          <Float floatIntensity={1.8} rotationIntensity={0.35}>
            <BankCard />
            <Sparkles count={60} speed={0.6} opacity={0.5} scale={6} size={2} color="#38bdf8" />
          </Float>
        </PresentationControls>
        <Environment preset="city" />
        <ContactShadows position={[0, -1.4, 0]} opacity={0.35} scale={10} blur={2.3} far={4} />
      </Suspense>
    </Canvas>
  </div>
)

export default HeroCanvas

