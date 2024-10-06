'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
export default function LoadingScreen({ setLoading }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 8000);
    return () => clearTimeout(timer); 
  }, [setLoading]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <div className="text-white text-xl">
        <TypeAnimation
      sequence={[
 
        "Please Wait !!",
        1000,
        "While we prepare your space ship :)",
        1000,
 
      ]}
      speed={30}
      deletionSpeed={30}
      repeat={Infinity}
      cursor={true} // Enable cursor
      cursorColor="white" //
      wrapper="h1"
      className="m-0 p-0 text-4xl font-medium tracking-tight "
      /></div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 8 }}
        className="absolute bottom-10 h-4 bg-pink-500"
      />
        <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 8 }}
        className="absolute top-10 h-4 bg-pink-500"
      />
        <motion.div
        initial={{ width: 0 }}
        animate={{ width: '50%' }}
        transition={{ duration: 8 }}
        className="absolute right-10 h-4 bg-pink-500 rotate-90"
      />
        <motion.div
        initial={{ width: 0 }}
        animate={{ width: '50%' }}
        transition={{ duration: 8 }}
    
        className="absolute left-10 h-4 bg-pink-500 rotate-90"
      />
    </div>
    
  );
}
