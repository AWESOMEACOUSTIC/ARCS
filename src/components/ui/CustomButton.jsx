import React from 'react';
import { motion } from 'framer-motion';

const CustomButton = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  onClick,
  ...props 
}) => {
  const baseClasses = 'relative font-bold tracking-wider uppercase transition-all duration-300 overflow-hidden group';
  
  const variants = {
    primary: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-black',
    secondary: 'bg-transparent border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white',
    accent: 'bg-transparent border-2 border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const clipPath = 'polygon(0 0, calc(100% - 20px) 0, 100% 100%, 20px 100%)';
  
  return (
    <motion.button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      style={{ clipPath }}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
        style={{ clipPath }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default CustomButton;
