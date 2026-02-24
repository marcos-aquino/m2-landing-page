
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Differentials = () => {
  const differentials = [
    'Método validado por duas profissionais com vasta experiência no corpo feminino.',
    'Seu treino se adapta à sua rotina e respeita cada fase do seu ciclo menstrual.',
    'Dieta que não te limita: opções deliciosas para vegetarianas, celíacas e intolerantes à lactose.'
  ];

  return (
    <section id="differentials" className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://horizons-cdn.hostinger.com/0888f485-866d-422a-b42b-647ff1ec90d7/capa-dC8rl.png"
                alt="Woman training with dumbbells showing determination and strength"
                className="w-full h-[500px] object-cover"
              />
              {/* Removed the green filter overlay */}
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#9ACD32] rounded-full blur-3xl opacity-30"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              O que torna o <span className="text-[#9ACD32]">M2 único</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Um método pensado especialmente para você
            </p>

            <div className="space-y-6">
              {differentials.map((differential, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-[#9ACD32] rounded-full flex items-center justify-center">
                    <Check size={20} className="text-gray-900 font-bold" />
                  </div>
                  <p className="text-lg text-white font-medium" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {differential}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 p-6 bg-[#9ACD32]/10 border-2 border-[#9ACD32] rounded-2xl"
            >
              <p className="text-xl text-white font-semibold" style={{ fontFamily: 'Outfit, sans-serif' }}>
                💡 Transformação real acontece com estrutura, não com promessas vazias
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
