import { Object3DNode } from '@react-three/fiber'
import { Mesh, Group } from 'three'

declare module '@react-spring/three' {
  export const animated: {
    [K in keyof ThreeElements]: ThreeElements[K]
  }
}

declare module '@react-three/fiber' {
  interface ThreeElements {
    ambientLight: Object3DNode<THREE.AmbientLight, typeof THREE.AmbientLight>
    directionalLight: Object3DNode<THREE.DirectionalLight, typeof THREE.DirectionalLight>
  }
} 