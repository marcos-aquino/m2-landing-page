import React from 'react';
import { motion } from 'framer-motion';

const IndicatedFor = () => {
  return (
    <section className="py-20 bg-gray-900">
      {/* Luz de fundo verde suave no topo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-[#9ACD32] opacity-10 blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        
        {/* Título */}
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12 md:mb-20 uppercase tracking-widest drop-shadow-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Para quem é <span className="text-[#9ACD32] drop-shadow-[0_0_15px_rgba(154,205,50,0.3)]">indicado?</span>
        </h2>

        {/* Container Principal - MATEMÁTICA CORRIGIDA AQUI */}
        <div className="flex flex-col gap-6 lg:gap-10">

          {/* LINHA 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">
            
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="relative border border-gray-700 rounded-xl p-6 bg-gray-900 flex items-center justify-end shadow-[0_0_20px_rgba(154,205,50,0.1)] hover:border-[#9ACD32] transition-colors duration-300 mr-10 lg:mr-14 min-h-[120px]"
            >
              <p className="text-white text-left w-full pr-8 md:pr-10 text-sm md:text-base" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Quer finalmente entrar em suas roupas favoritas e se sentir bem em qualquer look
              </p>
              <div className="absolute right-[-40px] md:right-[-48px] top-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-[#9ACD32] overflow-hidden shadow-[0_0_15px_rgba(154,205,50,0.3)]">
                <img src="/indicado/c1.jpeg" alt="Mulher feliz" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="relative border border-gray-700 rounded-xl p-6 bg-gray-900 flex items-center justify-end shadow-[0_0_20px_rgba(154,205,50,0.1)] hover:border-[#9ACD32] transition-colors duration-300 mr-10 lg:mr-14 min-h-[120px]"
            >
              <p className="text-white text-left w-full pr-8 md:pr-10 text-sm md:text-base" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Precisa de ajuda para não desanimar com um suporte especializado
              </p>
              <div className="absolute right-[-40px] md:right-[-48px] top-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-[#9ACD32] overflow-hidden shadow-[0_0_15px_rgba(154,205,50,0.3)]">
                <img src="/indicado/c2.jpeg" alt="Suporte" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
            </motion.div>
          </div>

          {/* LINHA DE BAIXO */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">
            
            {/* Coluna Esquerda: Os 3 Cards - MATEMÁTICA CORRIGIDA AQUI */}
            <div className="flex flex-col gap-6 lg:gap-10">
              
              {/* Card 3 */}
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative border border-gray-700 rounded-xl p-6 bg-gray-900 flex items-center justify-end shadow-[0_0_20px_rgba(154,205,50,0.1)] hover:border-[#9ACD32] transition-colors duration-300 mr-10 lg:mr-14 min-h-[120px]">
                <p className="text-white text-left w-full pr-8 md:pr-10 text-sm md:text-base" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Deseja ter mais disposição e saúde para curtir a vida com leveza e sem preocupações.
                </p>
                <div className="absolute right-[-40px] md:right-[-48px] top-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-[#9ACD32] overflow-hidden shadow-[0_0_15px_rgba(154,205,50,0.3)]">
                  <img src="/indicado/c3.jpeg" alt="Saúde" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
              </motion.div>

              {/* Card 4 */}
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="relative border border-gray-700 rounded-xl p-6 bg-gray-900 flex items-center justify-end shadow-[0_0_20px_rgba(154,205,50,0.1)] hover:border-[#9ACD32] transition-colors duration-300 mr-10 lg:mr-14 min-h-[120px]">
                <p className="text-white text-left w-full pr-8 md:pr-10 text-sm md:text-base" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Sente que a autoestima e a confiança pessoal estão ligadas à imagem corporal e quer dar o próximo passo
                </p>
                <div className="absolute right-[-40px] md:right-[-48px] top-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-[#9ACD32] overflow-hidden shadow-[0_0_15px_rgba(154,205,50,0.3)]">
                  <img src="/indicado/c4.jpeg" alt="Autoestima" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
              </motion.div>

              {/* Card 5 */}
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="relative border border-gray-700 rounded-xl p-6 bg-gray-900 flex items-center justify-end shadow-[0_0_20px_rgba(154,205,50,0.1)] hover:border-[#9ACD32] transition-colors duration-300 mr-10 lg:mr-14 min-h-[120px]">
                <p className="text-white text-left w-full pr-8 md:pr-10 text-sm md:text-base" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Está cansada de dietas radicais e treinos sem resultado e quer resultado de verdade
                </p>
                <div className="absolute right-[-40px] md:right-[-48px] top-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-[#9ACD32] overflow-hidden shadow-[0_0_15px_rgba(154,205,50,0.3)]">
                  <img src="/indicado/c5.jpeg" alt="Treino" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
              </motion.div>

            </div>

            {/* Coluna Direita: Colagem */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              className="hidden lg:grid grid-cols-4 gap-1 h-full min-h-[400px] bg-[#9ACD32] p-1 rounded-xl shadow-[0_0_20px_rgba(154,205,50,0.2)]"
            >
              <img src="/indicado/m1.jpeg" className="w-full h-full object-cover rounded-l-lg grayscale hover:grayscale-0 transition-all duration-500" alt="Treino 1" />
              <img src="/indicado/m2.jpeg" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Treino 2" />
              <img src="/indicado/m3.jpeg" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Treino 3" />
              <img src="/indicado/m4.jpeg" className="w-full h-full object-cover rounded-r-lg grayscale hover:grayscale-0 transition-all duration-500" alt="Treino 4" />
            </motion.div>

          </div>
        </div>

        {/* Botão */}
        <div className="mt-12 lg:mt-20 flex justify-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#9ACD32] hover:bg-[#8abd2d] text-gray-900 font-extrabold py-5 px-10 md:px-14 rounded-full text-lg md:text-xl uppercase tracking-wider shadow-[0_0_20px_rgba(154,205,50,0.4)] transition-all duration-300"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Quero Transformar Meu Corpo!
          </motion.button>
        </div>

      </div>
    </section>
  );
};

export default IndicatedFor;