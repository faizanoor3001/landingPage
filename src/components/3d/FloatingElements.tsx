'use client'

import React, { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh, Group, Vector3 } from 'three'
import { useSpring, animated } from '@react-spring/three'
import { Box, Cylinder, Sphere } from '@react-three/drei'

interface ElementProps {
  position: [number, number, number]
  color: string
  deviceType: 'solar' | 'windmill' | 'heatpump' | 'storage'
  scale?: number
}

export const SolarPanel = () => {
  return (
    <group>
      {/* Frame */}
      <mesh castShadow receiveShadow position={[0, 0, -0.05]}>
        <boxGeometry args={[1.2, 1.6, 0.1]} />
        <meshStandardMaterial color="#2D3748" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Solar Cells Grid */}
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
}

export const Windmill = () => {
  return (
    <group>
      {/* Tower */}
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <cylinderGeometry args={[0.15, 0.25, 3, 8]} />
        <meshStandardMaterial color="#718096" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Nacelle (housing) */}
      <mesh castShadow receiveShadow position={[0, 1.6, 0]}>
        <boxGeometry args={[0.6, 0.4, 0.4]} />
        <meshStandardMaterial color="#4A5568" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Blades */}
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
}

export const HeatPump = () => {
  return (
    <group>
      {/* Main Unit */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.2, 0.8, 0.6]} />
        <meshStandardMaterial
          color="#4A5568"
          metalness={0.6}
          roughness={0.4}
        />
      </mesh>

      {/* Ventilation Grills */}
      {[...Array(3)].map((_, i) => (
        <mesh
          key={`grill-${i}`}
          castShadow
          receiveShadow
          position={[0, 0, 0.31]}
          rotation={[0, 0, (i * Math.PI) / 3]}
        >
          <boxGeometry args={[0.8, 0.05, 0.01]} />
          <meshStandardMaterial
            color="#718096"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      ))}

      {/* Pipes */}
      <group position={[-0.5, -0.3, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[0.05, 0.05, 0.4]} />
          <meshStandardMaterial
            color="#A0AEC0"
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </group>
    </group>
  )
}

export const Storage = () => {
  return (
    <group>
      {/* Main Battery Container */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1, 1.8, 0.4]} />
        <meshStandardMaterial
          color="#2D3748"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      {/* Display Panel */}
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

      {/* Status LEDs */}
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

      {/* Cooling Vents */}
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
}

const Element = ({ position, deviceType, scale = 1 }: ElementProps) => {
  const groupRef = useRef<Group>(null)
  const [springs, api] = useSpring(() => ({
    position: position as [number, number, number],
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    config: { mass: 1, tension: 170, friction: 26 }
  }))

  useEffect(() => {
    const interval = setInterval(() => {
      api.start({
        position: [
          position[0] + (Math.random() - 0.5) * 0.7,
          position[1] + (Math.random() - 0.5) * 0.7,
          position[2] + (Math.random() - 0.5) * 0.7
        ] as [number, number, number],
        rotationX: Math.random() * Math.PI * 0.25,
        rotationY: Math.random() * Math.PI * 2,
        rotationZ: Math.random() * Math.PI * 0.25
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [api, position])

  return (
    <animated.group
      ref={groupRef}
      position={springs.position}
      rotation-x={springs.rotationX}
      rotation-y={springs.rotationY}
      rotation-z={springs.rotationZ}
      scale={scale}
    >
      {deviceType === 'solar' && <SolarPanel />}
      {deviceType === 'windmill' && <Windmill />}
      {deviceType === 'heatpump' && <HeatPump />}
      {deviceType === 'storage' && <Storage />}
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
        <Element key={index} {...elem} />
      ))}
    </group>
  )
}

export default FloatingElements 