'use client'
import { CustomButton } from "@/components/ui/custom-button";
import { Card } from "@/components/ui/card";
import { VideoBackground } from "@/components/ui/video-background";
import { motion } from "framer-motion";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { ArrowRight, Play, Star, Trophy, Users, Video } from "lucide-react";

export default function Home() {
  return (
    <>
      <VideoBackground />
      <div className="relative min-h-screen">
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-32 pb-20 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              className="flex justify-center items-center gap-2 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm text-custom-lightBlue border border-white/20">
                Editor Profissional de Vídeos
              </span>
            </motion.div>
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-custom-lightBlue to-custom-blue"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transforme seus vídeos em conteúdos profissionais
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-12 text-custom-lightBlue/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Edição profissional que faz seu conteúdo se destacar no YouTube e redes sociais
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <CustomButton size="lg" className="shadow-lg shadow-custom-blue/20 group">
                Solicitar orçamento
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </CustomButton>
              <CustomButton size="lg" variant="outline" className="backdrop-blur-sm group">
                Ver portfólio
                <Play className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
              </CustomButton>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20"
            >
              {[
                { icon: Video, label: "Vídeos Editados", value: "500+" },
                { icon: Users, label: "Clientes Satisfeitos", value: "100+" },
                { icon: Star, label: "Avaliação Média", value: "4.9/5" },
                { icon: Trophy, label: "Anos de Experiência", value: "5+" },
              ].map((stat, index) => (
                <div key={index} className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                  <stat.icon className="w-6 h-6 text-custom-lightBlue mb-2" />
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-custom-lightBlue/80">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Serviços Section */}
        <section className="relative py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-custom-navy/90 to-custom-navy" />
          <div className="container relative mx-auto px-4">
            <motion.h2
              className="text-4xl font-bold text-center text-white mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Nossos Serviços
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Pacote Básico",
                  description: "Edição de vídeos curtos para Reels, Shorts e TikTok",
                  price: "A partir de R$ 97",
                  features: ["Cortes precisos", "Transições suaves", "Música de fundo"]
                },
                {
                  title: "Pacote Intermediário",
                  description: "Edição para vídeos longos com cortes e efeitos básicos",
                  price: "A partir de R$ 197",
                  features: ["Efeitos visuais", "Color grading", "Legendas estilizadas"]
                },
                {
                  title: "Pacote Avançado",
                  description: "Edição completa com thumbnail personalizada e SEO",
                  price: "A partir de R$ 297",
                  features: ["Motion graphics", "Thumbnail profissional", "Otimização SEO"]
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card className="p-8 backdrop-blur-md bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-custom-lightBlue/90 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="text-white/80 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-custom-lightBlue" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <p className="text-2xl font-bold text-custom-lightBlue mb-6">{service.price}</p>
                    <CustomButton variant="secondary" className="w-full">
                      Selecionar
                    </CustomButton>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Depoimentos Section */}
        <section className="relative py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-custom-navy to-custom-navy/90" />
          <div className="container relative mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                O que dizem nossos clientes
              </h2>
              <p className="text-custom-lightBlue/90 text-xl">
                Histórias reais de criadores que transformaram seu conteúdo
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Ana Silva",
                  role: "YouTuber de Lifestyle",
                  image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=96",
                  testimonial: "A qualidade da edição superou todas as minhas expectativas. Meu canal cresceu 300% em 3 meses após começar a trabalhar com esse serviço!"
                },
                {
                  name: "Carlos Santos",
                  role: "Criador de Conteúdo Tech",
                  image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=96",
                  testimonial: "Profissionalismo e criatividade em cada edição. Os efeitos especiais e as transições deram uma nova vida aos meus vídeos."
                },
                {
                  name: "Julia Costa",
                  role: "Influenciadora Digital",
                  image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=96",
                  testimonial: "A melhor decisão que tomei para meu Instagram. As edições são perfeitas e sempre entregues no prazo!"
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <TestimonialCard {...testimonial} />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mt-16"
            >
              <CustomButton size="lg" variant="secondary" className="shadow-lg shadow-custom-blue/20">
                Ver mais depoimentos
              </CustomButton>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative bg-custom-navy/80 backdrop-blur-md text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Contato</h3>
                <p className="text-custom-lightBlue/90">contato@editor.com.br</p>
                <p className="text-custom-lightBlue/90">+55 (11) 99999-9999</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-custom-lightBlue hover:text-white transition-colors">Instagram</a>
                  <a href="#" className="text-custom-lightBlue hover:text-white transition-colors">YouTube</a>
                  <a href="#" className="text-custom-lightBlue hover:text-white transition-colors">TikTok</a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                <p className="text-custom-lightBlue/90 mb-4">Receba dicas de edição e novidades</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-custom-lightBlue"
                  />
                  <CustomButton variant="secondary">Inscrever</CustomButton>
                </div>
              </div>
            </div>
            <div className="text-center pt-8 border-t border-white/10">
              <p className="text-custom-lightBlue/90">
                Desenvolvido por{" "}
                <a href="https://all.dev.br" className="text-custom-lightBlue hover:text-white transition-colors">
                  all.dev.br
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
