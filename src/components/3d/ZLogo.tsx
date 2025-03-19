import React, { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh, Group, Vector3, MeshStandardMaterial } from 'three'
import { useSpring, animated } from '@react-spring/three'
import { SolarPanel, Windmill, HeatPump, Storage } from './FloatingElements'

interface ZLogoProps {
  scale?: number
  position?: [number, number, number]
}

const ZLogo: React.FC<ZLogoProps> = ({ scale = 1, position = [0, 0, 0] }) => {
  const groupRef = useRef<Group>(null)
  const materialRefs = useRef<MeshStandardMaterial[]>([])
  const deviceRefs = useRef<Group[]>([])
  
  const [springs, api] = useSpring(() => ({
    scale: [1, 1, 1] as [number, number, number],
    position: position as [number, number, number],
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    config: { mass: 1, tension: 280, friction: 60 }
  }))

  useEffect(() => {
    // Enhanced dynamic rotation animation
    api.start({
      scale: [scale, scale, scale],
      rotationX: Math.PI * 0.05,
      rotationY: Math.PI * 2,
      rotationZ: Math.PI * 0.05,
      loop: true,
      config: { duration: 8000 }
    })

    // More dynamic floating animation
    const interval = setInterval(() => {
      api.start({
        position: [
          position[0] + (Math.random() - 0.5) * 0.5,
          position[1] + (Math.random() - 0.5) * 0.4,
          position[2] + (Math.random() - 0.5) * 0.3
        ] as [number, number, number],
        config: { duration: 2000 }
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [scale, position, api])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    // Enhanced Z logo movement
    if (groupRef.current) {
      // Smooth wave motion
      groupRef.current.position.y += Math.sin(time * 0.8) * 0.002
      groupRef.current.position.x += Math.cos(time * 0.6) * 0.001
      
      // Subtle breathing effect
      const breathingScale = 1 + Math.sin(time * 0.5) * 0.03
      groupRef.current.scale.set(breathingScale, breathingScale, breathingScale)
      
      // Dynamic rotation adjustment
      groupRef.current.rotation.z = Math.sin(time * 0.3) * 0.05
    }

    // Enhanced material animations
    materialRefs.current.forEach((material, i) => {
      if (material) {
        material.emissiveIntensity = 0.3 + Math.sin(time * 0.8 + i * 0.5) * 0.2
        material.roughness = 0.2 + Math.sin(time * 0.5 + i * 0.3) * 0.1
      }
    })

    // Independent device animations
    deviceRefs.current.forEach((device, i) => {
      if (device) {
        // Each device rotates at its own speed and direction
        const rotationSpeeds = [0.5, -0.4, 0.3, -0.6]
        const verticalSpeeds = [0.8, 1.2, 1.0, 0.6]
        const horizontalSpeeds = [0.6, 0.8, 0.4, 1.0]
        
        // Self rotation
        device.rotation.y = time * rotationSpeeds[i]
        
        // Independent floating motion
        const verticalOffset = Math.sin(time * verticalSpeeds[i]) * 0.15
        const horizontalOffset = Math.cos(time * horizontalSpeeds[i]) * 0.1
        
        device.position.set(
          cornerPositions[i][0] + horizontalOffset,
          cornerPositions[i][1] + verticalOffset,
          cornerPositions[i][2]
        )
      }
    })
  })

  // Corner positions for devices - moved further from the Z
  const cornerPositions: Array<[number, number, number]> = [
    [1.6, 1.6, 0], // Top right
    [-1.6, 1.6, 0], // Top left
    [1.6, -1.6, 0], // Bottom right
    [-1.6, -1.6, 0], // Bottom left
  ]

  return (
    <animated.group
      ref={groupRef}
      scale={springs.scale}
      position={springs.position}
      rotation-x={springs.rotationX}
      rotation-y={springs.rotationY}
      rotation-z={springs.rotationZ}
    >
      {/* Z Logo parts */}
      <group>
        {/* Top bar of Z */}
        <mesh position={[0, 1, 0]} castShadow receiveShadow>
          <boxGeometry args={[2.2, 0.4, 0.4]} />
          <meshStandardMaterial
            ref={(ref) => (materialRefs.current[0] = ref!)}
            color="#95D5B2"
            metalness={0.9}
            roughness={0.1}
            emissive="#52B788"
            emissiveIntensity={0.2}
          />
        </mesh>
        
        {/* Diagonal of Z */}
        <mesh rotation={[0, 0, Math.PI / 4]} position={[0, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[3, 0.4, 0.4]} />
          <meshStandardMaterial
            ref={(ref) => (materialRefs.current[1] = ref!)}
            color="#74C69D"
            metalness={0.8}
            roughness={0.2}
            emissive="#40916C"
            emissiveIntensity={0.3}
          />
        </mesh>
        
        {/* Bottom bar of Z */}
        <mesh position={[0, -1, 0]} castShadow receiveShadow>
          <boxGeometry args={[2.2, 0.4, 0.4]} />
          <meshStandardMaterial
            ref={(ref) => (materialRefs.current[2] = ref!)}
            color="#52B788"
            metalness={0.7}
            roughness={0.3}
            emissive="#2D6A4F"
            emissiveIntensity={0.4}
          />
        </mesh>
      </group>

      {/* Independent Corner Devices - increased scale */}
      {cornerPositions.map((pos, i) => (
        <group key={i} ref={(ref) => (deviceRefs.current[i] = ref!)} position={pos} scale={0.35}>
          {i === 0 && <SolarPanel />}
          {i === 1 && <Windmill />}
          {i === 2 && <HeatPump />}
          {i === 3 && <Storage />}
        </group>
      ))}

      {/* Enhanced accent lights - adjusted to match new corner positions */}
      <pointLight position={[1.6, 1.6, 0.5]} intensity={0.3} color="#95D5B2" />
      <pointLight position={[-1.6, 1.6, 0.5]} intensity={0.3} color="#74C69D" />
      <pointLight position={[1.6, -1.6, 0.5]} intensity={0.3} color="#52B788" />
      <pointLight position={[-1.6, -1.6, 0.5]} intensity={0.3} color="#40916C" />
    </animated.group>
  )
}

export default ZLogo 