/// <reference types="vite/client" />
import * as React from "react"
import * as THREE from "three"
import * as MeshLine from "meshline"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineMaterial: MeshLine.MeshLineMaterial|any
      meshLine: MeshLine.MeshLine|any
      DepthOfField: any
    }
  }
}
