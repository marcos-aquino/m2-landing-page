import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const Transformations = () => {
  const carouselRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  // Funções para fazer o clique e arraste funcionar no PC
  const handleMouseDown = (e) => {
    isDown = true;
    startX = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft = carouselRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
  };

  const handleMouseUp = () => {
    isDown = false;
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiplicador de velocidade do arraste
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const results = [
    {
      id: 1,
      name: "Paciente 1",
      result: "Mais definição e perda de gordura em 30 dias",
      beforeImg: "/resultados/p1-antes.jpg",
      afterImg: "/resultados/p1-depois.jpg"
    },
    {
      id: 2,
      name: "Paciente 2",
      result: "Ganho de massa e definição em 30 dias",
      beforeImg: "/resultados/p2-antes.jpg",
      afterImg: "/resultados/p2-depois.jpg"
    },
    {
      id: 3,
      name: "Paciente 3",
      result: "Menos medidas, mais energia",
      beforeImg: "/resultados/p3-antes.jpg", 
      afterImg: "/resultados/p3-depois.jpg" 
    },
    {
      id: 4,
      name: "Paciente 4",
      result: "Definição abdominal em 30 dias",
      beforeImg: "/resultados/p4-antes.jpg", 
      afterImg: "/resultados/p4-depois.jpg" 
    },
    {
      id: 5,
      name: "Paciente 5",
      result: "Perda de gordura em 30 dias",
      beforeImg: "/resultados/p5-antes.jpg", 
      afterImg: "/resultados/p5-depois.jpg" 
    }
  ];

  return (
    <section id="resultados" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4" 
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Resultados <span className="text-[#9ACD32]">Reais</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400" 
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Mulheres que aplicaram o Método M2 e transformaram seus corpos e rotinas.
          </motion.p>
        </div>

        {/* Adicionei o ref, os eventos de mouse e a classe cursor-grab aqui */}
        <div 
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] cursor-grab active:cursor-grabbing"
        >
          {results.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-none w-[70vw] md:w-[320px] snap-center bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl pointer-events-none"
            >
              {/* O pointer-events-none acima evita que a imagem "puxe" o clique e atrapalhe o arraste */}
              <div className="flex h-[350px] md:h-[450px]">
                <div className="w-1/2 relative border-r border-gray-700">
                  <img 
                    src={item.beforeImg} 
                    alt={`Antes de ${item.name}`} 
                    className="w-full h-full object-cover grayscale transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-red-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Antes
                  </div>
                </div>
                
                <div className="w-1/2 relative">
                  <img 
                    src={item.afterImg} 
                    alt={`Depois de ${item.name}`} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[#9ACD32]/90 backdrop-blur-sm text-gray-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Depois
                  </div>
                </div>
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {item.name}
                </h3>
                <p className="text-[#9ACD32] font-semibold text-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {item.result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-2 text-gray-500 text-sm flex items-center justify-center gap-2 animate-pulse">
          <span>← Clique e arraste para ver mais →</span>
        </div>

      </div>
    </section>
  );
};

export default Transformations;