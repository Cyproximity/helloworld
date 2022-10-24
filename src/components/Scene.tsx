import * as THREE from "three"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { DepthOfField } from "@react-three/postprocessing"
import Fireflies from "./Fireflies"

import type { Ref } from "./Effects"

interface SceneProps {
  dof?: Ref
}

export default function Scene({dof}: SceneProps) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    groupRef.current!.position.x = THREE.MathUtils.lerp(groupRef.current!.position.x, state.pointer.x * 20, 0.2)
    groupRef.current!.rotation.x = THREE.MathUtils.lerp(groupRef.current!.rotation.x, state.pointer.y / 10, 0.2)
    groupRef.current!.rotation.y = THREE.MathUtils.lerp(groupRef.current!.rotation.y, -state.pointer.x / 2, 0.2)
  }, 1)

  return(
    <group ref={groupRef}>
      <Fireflies count={10} radius={75} colors={["orange", "cyan"]} />
    </group>
  )
}
