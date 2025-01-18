'use client'

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AnimatedIconProps {
  Icon: LucideIcon;
  className?: string;
}

export function AnimatedIcon({ Icon, className }: AnimatedIconProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.2, rotate: 12 }}
      whileTap={{ scale: 0.9 }}
      className={className}
    >
      <Icon className="w-5 h-5" />
    </motion.div>
  );
}