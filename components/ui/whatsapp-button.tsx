'use client'

import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      // Oculta o botão quando estiver no topo (hero section) ou muito próximo ao final
      const isHeroSection = latest < 100;
      const isNearBottom = (window.innerHeight + latest) >= document.documentElement.scrollHeight - 200;

      setIsVisible(!isHeroSection && !isNearBottom);
    });

    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{
        scale: isVisible ? 1 : 0,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: isVisible ? 1.1 : 0 }}
      className="fixed bottom-8 left-8 p-4 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors z-50 md:block"
    >
      <MessageCircle className="w-6 h-6" />
    </motion.a>
  );
}