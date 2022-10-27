import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface SocialItemProps {
  initials: string,
  href: string,
  name: string
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.05
    }
  }
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

function SocialItem({ name, initials, href}: SocialItemProps) {
  return (
    <motion.li variants={item} className="socials-item">
      <a href={href} title={name} rel="noopener noopener" target="_blank">
        <span className="initials">{initials}</span>
      </a>
    </motion.li>
  )
}

function Socials() {
  return (
    <motion.ul variants={container} initial="hidden" animate="show" className="sidebar-socials socials">
      <SocialItem name="Instagram" initials="IG" href="https://www.linkedin.com/in/geraldagustin/" />
      <SocialItem name="LinkedIn Profile" initials="IN" href="https://www.instagram.com/agstin.gerald/" />
      <SocialItem name="Github" initials="GH" href="https://www.github.com/cyproximity" />
    </motion.ul>
  )
}

function SidebarContents() {
  return (
    <motion.div className="sidebar-content" variants={container} initial="hidden" animate="show">
      <div className="sidebar-nametitle">
        <div className="name">
          <span>Gerald</span>
          <span>Agustin</span>
        </div>
        <div className="title">
          Fullstack Developer
        </div>
      </div>
    </motion.div>
  )
}

function Logo() {
  return (
    <motion.div className="sidebar-logo" variants={container} initial="hidden" animate="show">
      <Link to="/">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* <rect width="64" height="64" fill="#171723"/> */}
          {/* <path d="M42.6875 7.8125L15.5625 23.6875V53.625L40.125 64H64V20.125L42.6875 7.8125Z" fill="#11121B"/> */}
          <path d="M15.5625 53.625V23.6875L42.6875 7.8125L48.3125 11.0625L22.375 26.3125V49.5625L41.25 38.6875V45.125L21.9375 56.3125L15.5625 53.625Z" fill="#FEFEFE"/>
          <path d="M32.1875 38.0625V31.6875L48.4375 21.9375V41L41.75 44.9375V32.6875L32.1875 38.0625Z" fill="#FEFEFE"/>
        </svg>
      </Link>
    </motion.div>
  )
}

function GlobalMenu () {
  return (
    <motion.div className="sidebar">
      <aside className="sidebar-container">
        <Logo />
        <SidebarContents />
        <Socials />
      </aside>
    </motion.div>
  );
}

export default GlobalMenu;
