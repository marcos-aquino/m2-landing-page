
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Droplet, Heart, Target } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Sparkles size={32} />,
      title: 'Mais definição',
      description: 'Resultados visíveis e duradouros'
    },
    {
      icon: <Zap size={32} />,
      title: 'Mais força e disposição',
      description: 'Energia para o dia a dia'
    },
    {
      icon: <Droplet size={32} />,
      title: 'Menos inchaço e retenção',
      description: 'Sinta-se mais leve'
    },
    {
      icon: <Heart size={32} />,
      title: 'Mais consciência corporal',
      description: 'Conexão mente e corpo'
    },
    {
      icon: <Target size={32} />,
      title: 'Uma rotina sustentável',
      description: 'Hábitos que duram'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="benefits" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Seus <span className="text-[#9ACD32]">Resultados</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Outfit, sans-serif' }}>
            O que você vai conquistar com o Método M2
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 25px 50px -12px rgba(154, 205, 50, 0.25)',
                y: -5
              }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#9ACD32] cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-[#9ACD32]/10 rounded-full flex items-center justify-center mb-4 text-[#9ACD32]"
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {benefit.title}
                </h3>
                <p className="text-gray-600" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
