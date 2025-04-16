
import { motion } from "framer-motion";

export function AnimatedBackground({ variant = "default" }: { variant?: "default" | "light" | "dark" }) {
  const blobOpacity = variant === "light" ? "opacity-20" : variant === "dark" ? "opacity-30" : "opacity-30";
  const gradientFrom = variant === "light" ? "from-white" : variant === "dark" ? "from-orange-950" : "from-white";
  const gradientTo = variant === "light" ? "to-orange-50/50" : variant === "dark" ? "to-black" : "to-orange-50";
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-80`}></div>
      
      {/* Background blobs */}
      <motion.div 
        className={`absolute top-20 -left-40 w-96 h-96 rounded-full bg-orange-100 mix-blend-multiply dark:mix-blend-overlay dark:bg-orange-900/30 ${blobOpacity}`}
        animate={{
          x: [0, 20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className={`absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-blue-100 mix-blend-multiply dark:mix-blend-overlay dark:bg-blue-900/20 ${blobOpacity}`}
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div 
        className={`absolute bottom-20 left-1/3 w-96 h-96 rounded-full bg-purple-100 mix-blend-multiply dark:mix-blend-overlay dark:bg-purple-900/20 ${blobOpacity}`}
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.02]"></div>
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-white/80 dark:to-black/80"></div>
    </div>
  );
}
