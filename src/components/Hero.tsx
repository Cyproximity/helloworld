import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

function Hero({ tagline, translate }: { tagline: string, translate: string }) {
  const taglineSplits = tagline.split("")
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  })

  return (
    <div className="hero-container" ref={ref}>
      <div className="hero">
        <motion.span className="tagline">
          {taglineSplits.map((i, key) => (<motion.span key={key} className="tagline-letter">{i}</motion.span>))}
        </motion.span>
        <motion.em>
          {translate}
        </motion.em>
        <div className="hero-linebottom"></div>
      </div>
    </div>
  )
}

export default Hero;
