import React from 'react'
import { motion } from "framer-motion"

function AnimateBox({children , className="" , delay = 0}) {
  return (
    <motion.div initial={{ y: 50, opacity: 0}} whileInView={{y:0,opacity:1}}   transition={{ duration: 1.2 ,delay:delay}}
    >
        {children}
    </motion.div>
  )
}

export default AnimateBox