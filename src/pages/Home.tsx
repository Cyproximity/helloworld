import { useEffect, useRef, FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

import Hero from "../components/Hero";

function Home() {
  return (
    <motion.main>
      <Hero tagline="kumusta" translate="hello"/>

      <div className="intro-container">
        <div className="intro">
          <p className="type-14">#introduction</p>
          <p className="type-16">Hello! I am Gerald Agustin</p>
          <p className="type-16 shortintro">
            A Fullstack web developer from Philippines, I've been in the web dev industry since twenty sixteen.
          </p>
        </div>
        <div className="intro-sellout">
          <p className="type-16">Let's create a awesome project!</p>
          <p className="type-16">
            Also, I can be part of your team.
          </p>
        </div>
      </div>

      <div className="expertise">
        <p className="type-14">#Frontend Expertise</p>
        <section className="expertise-block">
          <p className="type-16">HTML5/CSS3</p>
          <p className="type-16">Javascript/Typescript</p>
          <p className="type-16">React</p>
          <p className="type-16">SASS/LESS</p>
          <p className="type-16">SVG</p>
          <p className="type-16">RESPONSIVE DESIGN</p>
          <p className="type-16">a11y and i18n</p>
        </section>
        <p className="type-14">#Backend Expertise</p>
        <section className="expertise-block">
          <p className="type-16">Node.js/Express</p>
          <p className="type-16">Next.js</p>
          <p className="type-16">MongoDB/Prisma</p>
          <p className="type-16">Or Any framework written in JS</p>
        </section>
        <p className="type-14">#MyEveryDayTools</p>
        <section className="expertise-block">
          <p className="type-16">GIT</p>
          <p className="type-16">npm/yarn</p>
          <p className="type-16">Webpack/Vite</p>
          <p className="type-16">Docker</p>
          <p className="type-16">Bash/sh</p>
          <p className="type-16">Figma</p>
          <p className="type-16">Expert at Gooogling things</p>
        </section>
      </div>

      <div className="contact">
        <p className="type-14">#Contact me</p>
        <p className="type-16">
          Got a project?
        </p>
        <p className="type-16">
          Hire me?
        </p>

        <p className="type-16">
          <a href="tel:(+63) 915 260 1996">(+63) 915 260 1996</a>
        </p>
        <p className="type-16">
          <a href="mailto:geraldagustin@outlook.com?subject=Hi Gerald Agustin">geraldagustin@outlook.com</a>
        </p>
      </div>
    </motion.main>
  )
}

export default Home;
