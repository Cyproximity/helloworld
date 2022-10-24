import * as THREE from "three"
import { useEffect, useMemo } from "react";
import { Canvas, Color } from "@react-three/fiber";
import { useWindowSize } from "usehooks-ts"

import Backdrop from "./Backdrop";

function CanvasWrapper() {
  const { width, height } = useWindowSize()
  const resize = { scroll: true, debounce: { scroll: 50, resize: 0 } }
  const colour = useMemo(() => new THREE.Color(0xff0000), [])

  const light = "#ffffff"
  const dark = "#11121B"

  return (
    <Canvas
      className="bg"
      style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: -1, width: width, height: height, background: dark }}
      camera={{ zoom: 5, position: [0, 0, 200], far: 300, near: 0 }}
      gl={{ powerPreference: 'high-performance', antialias: true, stencil: false, alpha: false, depth: false }}
      orthographic={true}
      >
      <color attach="background" args={[dark]} />
      <Backdrop />
    </Canvas>
  )
}

export default CanvasWrapper;
