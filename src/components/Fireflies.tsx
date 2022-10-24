import * as THREE from "three"
import * as meshline from "meshline"
import { useRef, useMemo } from "react"
import { extend, useFrame } from "@react-three/fiber"

extend(meshline)

const random = () => Math.max(0.22, Math.random())

interface FatlineProps {
  curve: THREE.Vector3[],
  width: number,
  color: any
}

function Fatline({ curve, width, color }: FatlineProps) {

  const material = useRef<meshline.MeshLineMaterial>()

  useFrame((state, delta) => (material.current!.uniforms.dashOffset.value -= delta / 100))

  return (
    <mesh>
      <meshLine attach="geometry" points={curve} />
      <meshLineMaterial
        attach="material"
        ref={material}
        transparent
        lineWidth={width}
        color={color}
        dashArray={0.1}
        dashRatio={0.99}
      />
    </mesh>
  )
}

export interface FirefliesProps {
  count: number,
  colors: any,
  radius: number
}

export default function Fireflies({ count, colors, radius }: FirefliesProps) {
  const lines = useMemo(
    () =>
      [...Array(count).keys()].map((_, idx) => {
        const pos = new THREE.Vector3(Math.sin(0) * radius * random(), Math.cos(0) * radius * random(), 0)
        const points = [...Array(22).keys()].map((_, idx) => {
          const angle = (idx / 20) * Math.PI * 2
          return pos.add(new THREE.Vector3(Math.sin(angle) * radius * random(), Math.cos(angle) * radius * random(), 0)).clone()
        })
        const curve = new THREE.CatmullRomCurve3(points).getPoints(1000)
        const colorPicked: string = String(colors.length * Math.random())
        return {
          color: colors[parseInt(colorPicked)],
          curve: curve,
          width: Math.max(1.6, (2 * idx) / 10)
        }
      })
    , [count, colors, radius]
  )

  return (
    <group position={[-radius * 2, -radius, 0]}>
      {lines.map((props, i) => (
        <Fatline key={i} {...props} />
      ))}
    </group>
  )
}
