import React from 'react';
import { motion } from 'framer-motion';
import cloudsFullUri from '../assets/clouds_full.png';
import clouds2Uri from '../assets/clouds_2.png';

const CLOUD_FULL_WIDTH = 379;
const CLOUD_2_WIDTH = 189;

export default function AnimatedClouds({ large }) {
  const [width, setWidth] = React.useState(window.innerWidth);

  const handleResize = (e) => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    handleResize();
  });

  window.addEventListener('resize', handleResize);

  return (
    <motion.img
      key="Cloud"
      src={large ? cloudsFullUri : clouds2Uri}
      animate={{
        translateX: [0, width - (large ? CLOUD_FULL_WIDTH : CLOUD_2_WIDTH), 0],
      }}
      transition={{ duration: 200, repeat: Infinity, repeatDelay: 0, delay: 0 }}
      style={{ position: 'absolute' }}
    />
  );
}
