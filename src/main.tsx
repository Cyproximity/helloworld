import * as THREE from "three"
import * as React from "react"
import ReactDOM from "react-dom/client"

import { extend } from "@react-three/fiber"

extend(THREE)

import "./scss/global.scss"
import App from "./App"

const gei = (str: string) => document.getElementById(str)
const createRoot = ReactDOM.createRoot

createRoot(gei("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
