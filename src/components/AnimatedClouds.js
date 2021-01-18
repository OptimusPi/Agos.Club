import React from 'react';
import { motion } from 'framer-motion';
import cloudUri from '../assets/clouds_full.png';
import cloud1Uri from '../assets/clouds_1.png';
import cloud2Uri from '../assets/clouds_2.png';
import cloud3Uri from '../assets/clouds_3.png';

export default function AnimatedClouds() {
  const [width, setWidth] = React.useState(window.innerWidth);

  const handleResize = (e) => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    handleResize();
  });

  window.addEventListener('resize', handleResize);

  return (
    <div>
      <motion.img
        key="Cloud1"
        src={cloudUri}
        animate={{
          translateX: [0, width - 400, 0],
          translateY: [0, -5, 0, -5, 0, -5, 0, -5, 0, -5, 0, -5, 0],
        }}
        transition={{ duration: 220, repeat: Infinity, repeatDelay: 0, delay: 0 }}
        style={{ position: 'absolute', marginTop: 3 }}
      />
      <motion.img
        key="Cloud2"
        src={cloud1Uri}
        animate={{
          translateX: [(width - 137) / 2 + 137 / 2 - 5, 0, width - 137 - 5, (width - 137) / 2 + 137 / 2 - 5],
          translateY: [0, -5, 0, -5, 0, -5, 0, -5, 0, -5, 0, -5, 0],
        }}
        transition={{ duration: 210, repeat: Infinity, repeatDelay: 0, delay: 0 }}
        style={{ position: 'absolute', marginTop: 3 }}
      />
      <motion.img
        key="Cloud3"
        src={cloud2Uri}
        animate={{
          translateX: [(width - 189) / 2 - 189 - 5, width - 189 - 5, 0, (width - 189) / 2 - 189 - 5],
          translateY: [0, -5, 0, -5, 0, -5, 0, -5, 0, -5, 0],
        }}
        transition={{ duration: 200, repeat: Infinity, repeatDelay: 0, delay: 0 }}
        style={{ position: 'absolute', marginTop: 3 }}
      />
      <motion.img
        key="Cloud4"
        src={cloudUri}
        animate={{
          translateX: [width - 400, 0, width - 400],
          translateY: [0, -5, 0, -5, 0, -5, 0, -5, 0, -5, 0],
        }}
        transition={{ duration: 190, repeat: Infinity, repeatDelay: 0, delay: 0 }}
        style={{ position: 'absolute', marginTop: 3 }}
      />
      <motion.img
        key="Cloud5"
        src={cloud3Uri}
        animate={{
          translateX: [555, 0, width - 80, 555],
          translateY: [0, -5, 0, -5, 0],
        }}
        transition={{ duration: 150, repeat: Infinity, repeatDelay: 0, delay: 0 }}
        style={{ position: 'absolute', marginTop: 3 }}
      />
      <motion.img
        key="Cloud6"
        src={cloud3Uri}
        animate={{
          translateX: [width - 570, width - 70, 0, width - 570],
          translateY: [0, -5, 0, -5, 0],
        }}
        transition={{ duration: 1700, repeat: Infinity, repeatDelay: 0, delay: 0 }}
        style={{ position: 'absolute', marginTop: 3 }}
      />
    </div>
  );
}
