import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="relative">
        {/* Outer rotating ring */}
        <motion.div
          className="w-32 h-32 border-4 border-transparent border-t-blue-500 border-r-red-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner rotating ring */}
        <motion.div
          className="absolute inset-2 border-4 border-transparent border-b-blue-400 border-l-red-400 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Center logo animation */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        >
          <svg width="48" height="48" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 10 L25 30 L5 30 Z" fill="#3B4BA8"/>
            <path d="M45 10 L55 30 L35 30 Z" fill="#3B4BA8"/>
            <path d="M5 35 L15 55 L25 35 L15 50 Z" fill="#E53E3E"/>
            <path d="M35 35 L45 55 L55 35 L45 50 Z" fill="#E53E3E"/>
            <path d="M30 25 L35 30 L30 35 L25 30 Z" fill="#3B4BA8"/>
            <path d="M30 35 L35 40 L30 45 L25 40 Z" fill="#E53E3E"/>
          </svg>
        </motion.div>
      </div>
      
      {/* Loading text */}
      <motion.div
        className="absolute mt-48 text-white text-xl font-semibold tracking-wider"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Loading...
      </motion.div>
    </div>
  );
}
