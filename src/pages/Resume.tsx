import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <h1>Resume</h1>
      <Link to="/">
        Home
      </Link>
    </motion.div>
  )
}

export default Resume;
