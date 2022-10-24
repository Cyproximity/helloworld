import { useRef, Suspense } from "react"

import Scene from "./Scene"
import Effects, { Ref } from "./Effects"

export default function Backdrop() {
  const dof = useRef<Ref>(null!)

  return (
    <Suspense fallback={null}>
      <Scene dof={dof} />
      <Effects ref={dof} />
    </Suspense>
  )
}
