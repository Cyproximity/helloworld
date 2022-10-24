import { Link, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

import Home from "../pages/Home";
import Resume from "../pages/Resume";

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <motion.div role="main" className="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </AnimatePresence>
    </motion.div>
  )
}

export default AnimatedRoutes;
