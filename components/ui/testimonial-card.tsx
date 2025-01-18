import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  role: string;
  testimonial: string;
  image: string;
}

export function TestimonialCard({ name, role, testimonial, image }: TestimonialCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }}>
      <Card className="relative p-8 backdrop-blur-md bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 overflow-hidden">
        <div className="absolute -top-6 -right-6 text-custom-lightBlue/10">
          <Quote size={80} />
        </div>
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-custom-blue to-custom-lightBlue rounded-full blur-md opacity-50" />
            <Image
              src={image}
              alt={name}
              width={64}
              height={64}
              className="rounded-full relative border-2 border-white/20"
            />
          </div>
          <div>
            <h4 className="font-bold text-lg text-white">{name}</h4>
            <p className="text-sm text-custom-lightBlue">{role}</p>
          </div>
        </div>
        <blockquote className="relative text-white/90 italic leading-relaxed">
          <span className="text-3xl font-serif text-custom-lightBlue">"</span>
          {testimonial}
          <span className="text-3xl font-serif text-custom-lightBlue">"</span>
        </blockquote>
      </Card>
    </motion.div>
  );
}