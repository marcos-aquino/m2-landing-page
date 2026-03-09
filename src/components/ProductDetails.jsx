
import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Apple, Users, BookOpen, MessageCircle } from 'lucide-react';

const ProductDetails = () => {
  const features = [
    {
      icon: <Dumbbell size={40} />,
      title: 'Plano de Treino Estruturado',
      description: 'Programa de exercícios personalizado, progressivo e adaptado ao seu nível e objetivos'
    },
    {
      icon: <Apple size={40} />,
      title: 'Orientação Nutricional Estratégica',
      description: 'Guia nutricional completo com estratégias que cabem na sua rotina, sem restrições extremas'
    },
    {
      icon: <Users size={40} />,
      title: 'Acompanhamento Profissional',
      description: 'Suporte semanal de profissionais especializadas para ajustar seu progresso'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            O que está <span className="text-[#9ACD32]">incluído</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Tudo que você precisa para alcançar seus objetivos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border-2 border-gray-700 hover:border-[#9ACD32] transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-20 h-20 bg-[#9ACD32]/10 rounded-2xl flex items-center justify-center mb-6 text-[#9ACD32]"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-[#9ACD32]/10 border-2 border-[#9ACD32] rounded-2xl p-8">
            <p className="text-2xl text-white font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              🎯 Método completo e comprovado
            </p>
            <p className="text-lg text-gray-300" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Tudo em um só lugar para sua transformação
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductDetails;
