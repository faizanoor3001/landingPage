'use client'

import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Group } from 'three'
import { useSpring, animated } from '@react-spring/three'

interface ElementProps {
  position: [number, number, number]
  color: string
  deviceType: 'solar' | 'windmill' | 'heatpump' | 'storage'
  scale?: number
}

// 3D Models Components
const SolarPanel = () => (
  <group>
    <mesh castShadow receiveShadow position={[0, 0, -0.05]}>
      <boxGeometry args={[1.2, 1.6, 0.1]} />
      <meshStandardMaterial color="#2D3748" metalness={0.8} roughness={0.2} />
    </mesh>
    <group position={[0, 0, 0]}>
      {[...Array(4)].map((_, row) =>
        [...Array(3)].map((_, col) => (
          <mesh
            key={`cell-${row}-${col}`}
            castShadow
            receiveShadow
            position={[
              (col - 1) * 0.35,
              (row - 1.5) * 0.35,
              0
            ]}
          >
            <boxGeometry args={[0.3, 0.3, 0.02]} />
            <meshStandardMaterial
              color="#1a365d"
              metalness={0.9}
              roughness={0.1}
              emissive="#3182CE"
              emissiveIntensity={0.2}
            />
          </mesh>
        ))
      )}
    </group>
  </group>
)

const WindTurbine = () => (
  <group>
    <mesh castShadow receiveShadow position={[0, 0, 0]}>
      <cylinderGeometry args={[0.15, 0.25, 3, 8]} />
      <meshStandardMaterial color="#718096" metalness={0.7} roughness={0.3} />
    </mesh>
    <mesh castShadow receiveShadow position={[0, 1.6, 0]}>
      <boxGeometry args={[0.6, 0.4, 0.4]} />
      <meshStandardMaterial color="#4A5568" metalness={0.8} roughness={0.2} />
    </mesh>
    <group position={[0, 1.6, 0.2]}>
      {[0, 120, 240].map((rotation, i) => (
        <mesh
          key={`blade-${i}`}
          castShadow
          receiveShadow
          position={[0, 0, 0]}
          rotation={[0, 0, (rotation * Math.PI) / 180]}
        >
          <boxGeometry args={[0.1, 1.8, 0.02]} />
          <meshStandardMaterial
            color="#E2E8F0"
            metalness={0.3}
            roughness={0.7}
          />
        </mesh>
      ))}
    </group>
  </group>
)

const Battery = () => (
  <group>
    <mesh castShadow receiveShadow>
      <boxGeometry args={[1, 1.8, 0.4]} />
      <meshStandardMaterial
        color="#2D3748"
        metalness={0.7}
        roughness={0.3}
      />
    </mesh>
    <mesh castShadow receiveShadow position={[0, 0.6, 0.21]}>
      <boxGeometry args={[0.6, 0.3, 0.01]} />
      <meshStandardMaterial
        color="#4A5568"
        metalness={0.8}
        roughness={0.2}
        emissive="#48BB78"
        emissiveIntensity={0.3}
      />
    </mesh>
    {[...Array(3)].map((_, i) => (
      <mesh
        key={`led-${i}`}
        castShadow
        receiveShadow
        position={[0.3, -0.3 + i * 0.3, 0.21]}
      >
        <sphereGeometry args={[0.03]} />
        <meshStandardMaterial
          color="#48BB78"
          emissive="#48BB78"
          emissiveIntensity={0.8}
        />
      </mesh>
    ))}
    {[...Array(4)].map((_, i) => (
      <mesh
        key={`vent-${i}`}
        castShadow
        receiveShadow
        position={[0, -0.6 + i * 0.4, 0.21]}
      >
        <boxGeometry args={[0.8, 0.05, 0.01]} />
        <meshStandardMaterial
          color="#A0AEC0"
          metalness={0.6}
          roughness={0.4}
        />
      </mesh>
    ))}
  </group>
)

const FloatingElement = ({ position, deviceType, scale = 1 }: ElementProps) => {
  const groupRef = useRef<Group>(null)

  const [springs, api] = useSpring(() => ({
    position: position,
    rotation: [0, 0, 0],
    config: {
      mass: 1,
      tension: 170,
      friction: 26
    }
  }))

  useFrame((state) => {
    if (!groupRef.current) return

    const time = state.clock.getElapsedTime()
    const y = position[1] + Math.sin(time + position[0]) * 0.1

    api.start({
      position: [position[0], y, position[2]],
      rotation: [
        Math.sin(time * 0.5) * 0.1,
        Math.cos(time * 0.3) * 0.1,
        Math.sin(time * 0.2) * 0.1
      ]
    })
  })

  return (
    <animated.group
      ref={groupRef}
      position={springs.position}
      rotation={springs.rotation}
      scale={scale}
    >
      {deviceType === 'solar' && <SolarPanel />}
      {deviceType === 'windmill' && <WindTurbine />}
      {deviceType === 'heatpump' && <Battery />}
      {deviceType === 'storage' && <Battery />}
    </animated.group>
  )
}

const FloatingElements = () => {
  const elements: ElementProps[] = [
    { position: [3, 2, 0], color: '#52B788', deviceType: 'solar', scale: 1.2 },
    { position: [-3, 2, 0], color: '#74C69D', deviceType: 'windmill', scale: 1 },
    { position: [3, -2, 0], color: '#95D5B2', deviceType: 'heatpump', scale: 1.1 },
    { position: [-3, -2, 0], color: '#B7E4C7', deviceType: 'storage', scale: 1 },
  ]

  return (
    <group>
      {elements.map((elem, index) => (
        <FloatingElement key={index} {...elem} />
      ))}
    </group>
  )
}

export default FloatingElements 