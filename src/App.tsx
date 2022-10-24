import React, { useState } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { useLocalStorage } from "usehooks-ts"
import { motion } from "framer-motion"

import "./scss/app.scss"

import AnimatedRoutes from "./components/AnimatedRoutes"
import GlobalMenu from "./components/GlobalMenu"

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};

import CanvasWrapper from "./components/CanvasWrapper"

export default function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDarkTheme, setDarkTheme] = useLocalStorage("darktheme", defaultDark)

  return (
    <>
      <div className="app-container" data-dark-theme={isDarkTheme}>
        <div className="app-controls">
          <div className="themeswitch">
            <motion.div className="themeswitch-handle" layout transition={spring} />
          </div>
        </div>
        <CanvasWrapper />
        <Router>
          <GlobalMenu />
          <AnimatedRoutes />
        </Router>
      </div>
      <div className="noise"></div>
      <div className="logo"></div>
    </>
  )
};
