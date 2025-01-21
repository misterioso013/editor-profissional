'use client'
import { CustomButton } from "@/components/ui/custom-button";
import { Card } from "@/components/ui/card";
import { VideoBackground } from "@/components/ui/video-background";
import { motion } from "framer-motion";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { ArrowRight, Play, Star, Trophy, Users, Video, ArrowUp, Scissors, Film, Wand2 } from "lucide-react";
import { FloatingNav } from "@/components/ui/floating-nav";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

export default function Home() {
  return (
    <>
      <VideoBackground />
      <FloatingNav />
      <WhatsAppButton />
      <ScrollToTop />
      <div className="relative min-h-screen">
        {/* Hero Section */}
        <section id="home" className="container mx-auto px-4 pt-32 pb-32 text-white">
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
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-40"
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
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 -mt-24 relative z-10 mb-16"
              >
                {[
                  {
                    icon: Video,
                    label: "Vídeos Editados",
                    value: "500+",
                    gradient: "from-[#FF6B6B] to-[#FF8E8E]"
                  },
                  {
                    icon: Users,
                    label: "Clientes Satisfeitos",
                    value: "100+",
                    gradient: "from-[#4ECDC4] to-[#6EE7E7]"
                  },
                  {
                    icon: Star,
                    label: "Avaliação Média",
                    value: "4.9/5",
                    gradient: "from-[#FFD93D] to-[#FFE869]"
                  },
                  {
                    icon: Trophy,
                    label: "Anos de Experiência",
                    value: "5+",
                    gradient: "from-[#6C63FF] to-[#8F89FF]"
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="relative p-6 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 overflow-hidden group">
                      {/* Gradient Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                      {/* Glass Effect Overlay */}
                      <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Content */}
                      <div className="relative flex flex-col items-center">
                        <div className="mb-3 p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                          <stat.icon className={`w-6 h-6 text-gradient-${index} bg-clip-text`} />
                        </div>
                        <p className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                          {stat.value}
                        </p>
                        <p className="text-sm text-custom-lightBlue/90 text-center">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
        </div>
          </motion.div>
        </section>

        {/* Seção Motivacional */}
        <section className="relative py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-custom-navy/90 to-custom-navy" />
          <div className="container relative mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto text-center"
            >
              <span className="px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm text-custom-lightBlue border border-white/20 inline-block mb-6">
                Comece Seu Canal Hoje
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Quer Começar um Canal de Sucesso no YouTube?
              </h2>
              <p className="text-xl text-custom-lightBlue/90 mb-8 leading-relaxed">
                Não deixe a falta de conhecimento em edição impedir seus sonhos.
                Seja você uma dona de casa com receitas incríveis, um especialista
                compartilhando conhecimento ou alguém com histórias para contar -
                podemos transformar suas ideias em conteúdo profissional.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                  {
                    title: "Ideias Simples",
                    description: "Transforme suas receitas caseiras, dicas de artesanato ou experiências pessoais em conteúdo profissional"
                  },
                  {
                    title: "Sem Complicação",
                    description: "Você grava do seu jeito, nós cuidamos de toda a parte técnica da edição"
                  },
                  {
                    title: "Suporte Completo",
                    description: "Orientação sobre equipamentos básicos, iluminação e dicas para gravar melhor"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all"
                  >
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-custom-lightBlue/90">{item.description}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <CustomButton size="lg" className="group">
                  Saiba como começar
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </CustomButton>
                <span className="text-white/60 text-sm">
                  Consultoria gratuita para iniciantes
                </span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Serviços Section */}
        <section id="services" className="relative pt-16 pb-32">
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
                  features: ["Cortes precisos", "Transições suaves", "Música de fundo"],
                  badge: "Popular",
                  icon: Scissors
                },
                {
                  title: "Pacote Intermediário",
                  description: "Edição para vídeos longos com cortes e efeitos básicos",
                  price: "A partir de R$ 197",
                  features: ["Efeitos visuais", "Color grading", "Legendas estilizadas"],
                  badge: "Recomendado",
                  icon: Film
                },
                {
                  title: "Pacote Avançado",
                  description: "Edição completa com thumbnail personalizada e SEO",
                  price: "A partir de R$ 297",
                  features: ["Motion graphics", "Thumbnail profissional", "Otimização SEO"],
                  badge: "Completo",
                  icon: Wand2
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card className="relative p-8 backdrop-blur-md bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300">
                    {service.badge && (
                      <span className="absolute -top-3 right-4 px-3 py-1 text-xs rounded-full bg-custom-blue text-white">
                        {service.badge}
                      </span>
                    )}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-white/5">
                        <service.icon className="w-6 h-6 text-custom-lightBlue" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {service.title}
                      </h3>
                    </div>
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
        <section id="testimonials" className="relative py-32">
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
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="relative bg-custom-navy/80 backdrop-blur-md text-white py-12">
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
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-custom-lightBlue"
                  />
                  <CustomButton variant="secondary" className="whitespace-nowrap">
                    Inscrever
                  </CustomButton>
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
