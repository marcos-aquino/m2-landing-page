
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'C.P 48 anos',
      result: 'Transformação de corpo e alma',
      quote: 'Foi desafiador e hoje percebo que valeu cada esforço. Foi incrível participar do desafio, já estou com saudade. Sem palavras! Marcela e Mariana, vocês são incríveis. Atenção maravilhosa, me senti super acolhida o dia todo. A dieta foi a parte mais incrível, não tive um único dia que senti fome ou vontade de comer fora do horário, e me coloquei na disciplina de manter os cardápios em dia na geladeira. Foi muito legal! minha transformação maior não foi no corpo, foi na alma. Cada dia que eu me sentia melhor, mais eu queria fazer tudo certo. Isso é sobre mudanças milagrosas e sei que o entusiasmo de vocês mexeu comigo. Que energia incrível! Muito feliz!',
      rating: 5,
      avatar: 'CP'
    },
    {
      name: 'R.S 54 anos',
      result: 'Roupas mais largas',
      quote: 'Roupas largas..uma das melhores coisas visíveis. O fato de treinar mais e a ajuda na alimentação também foi surpreendente. Comecei a me cuidar muito mais e não quero parar, achei que fez toda diferença.',
      rating: 5,
      avatar: 'RS'
    },
    {
      name: 'R.C 45 anos',
      result: 'Venceu o medo da academia',
      quote: 'Participar do BMT me deu uma grande conquista que foi conseguir começar a treinar em uma academia. Parece algo simples para a maioria do grupo, mas eu tinha uma dificuldade imensa em começar a treinar. Era um misto de preguiça, vergonha e falta de estímulo. Estar em um grupo onde todas estavam com o mesmo propósito me fez vencer esse desafio. Obrigada Mari por propor um treino executável até mesmo para alguém sem experiência. Na parte da dieta passei a entender melhor sobre boas escolhas e como ter a alimentação equilibrada como aliada para um corpo que desejo construir. Nunca tinha feito uma dieta antes e participar dessa experiência tirou o peso que esse nome \'dieta\' parece carregar. Hoje vejo o nome dieta como reeducação alimentar, ou seja, entendo o que é melhor e procuro priorizar o que me faz bem. Marcela, agradeço sua disponibilidade e todo conhecimento que você nos transmitiu nesse período. As trocas, dicas e incentivos que tivemos no grupo foram muito valiosas.',
      rating: 5,
      avatar: 'RC'
    },
    {
      name: 'M.M 19 anos',
      result: '-3% de gordura e -2kg',
      quote: 'Eu amei fazer todos os treinos, não ficou um treino massante, dava vontade de ir e fazer. Adorei, pesado na medida certa! Muito boa, com várias opções diferentes e gostosas que me fez conseguir levar a dieta mais a sério e não furar! Maravilhoso! Mari e Marcela super atenciosas, nos deram apoio durante todos os dias de desafio no grupo. A minha experiência pela primeira vez no BMT foi muito positiva! Diminui 3% de percentual de gordura e perdi 2kg (só de gordura). Senti meu humor melhorar, a minha pele, disposição, o corpo! Com certeza foi a melhor escolha que fiz no meu final de ano!',
      rating: 5,
      avatar: 'MM'
    },
    {
      name: 'K.A 27 anos',
      result: 'De 75kg para 69kg',
      quote: 'Eu estava pesando 75,300 kg. Quando soube que ia acontecer o Desafio BMT, senti que era exatamente o empurrão que eu precisava para sair da minha zona de conforto e focar de verdade no meu objetivo. Hoje estou pesando 69,2 kg. É uma diferença enorme, mas o que mais me impressionou foi como minhas roupas mudaram: todas largas, caindo muito. Eu jamais imaginei que conseguiria sair da casa dos 70, muito menos voltar a vestir 38, depois de quase 3 anos nessa luta. Estou muito feliz com o que conquistei e quero continuar nesse caminho. Sei que, sem o desafio para me motivar, eu não teria chegado até aqui.',
      rating: 5,
      avatar: 'KA'
    },
    {
      name: 'C.P 51 anos',
      result: 'Mente e corpo renovados',
      quote: 'Perfeito! Mari respeita o meu ritmo, me motivou bastante e hj sei que posso mais que antes! Marcela Mara, que maravilha é fazer dieta com vc ! Voltei cozinhar pelo seu incentivo! Mto feliz! Vcs arrasam sempre! Entregaram além ! Sempre conversando , ensinando e motivando! Sei que meu metabolismo, falta de reposição hormonal não colaboram , mas me dediquei, mudei hábitos , enfrentei dias de desânimo e hj sei que posso e consigo! Estou mto satisfeita!!! Isso vai além do físico, mentalmente estou bem melhor tbm!',
      rating: 5,
      avatar: 'CP'
    },
    {
      name: 'A.C. 37 anos',
      result: 'Resultados treinando em casa',
      quote: 'Não imaginei que daria certo treinar em casa e deu. Pretendo continuar com a consultoria até que eu consiga voltar para a academia. Amei o tanto de opções. Sempre fui limitada naquilo que eu gosto, sem querer experimentar outras coisas. Com as poções, cada um fazendo uma e postando, foi dando vontade de fazer tb. Sempre gostei muito da atenção de vcs. Isso que me faz indicar o desafio sem medo.',
      rating: 5,
      avatar: 'AC'
    },
    {
      name: 'S.H 49 anos',
      result: '-4,2kg e -6cm de medidas',
      quote: 'Gostei bastante do treinamento. Os exercícios foram bem explicados e fáceis de acompanhar. Foi puxado na medida certa e deu pra sentir evolução ao longo do desafio. A dieta foi tranquila de seguir e não achei restritiva demais. Consegui adaptar bem à minha rotina e isso ajudou muito a manter a constância. O suporte foi muito bom. Sempre que precisei, tive resposta e incentivo, o que fez diferença pra continuar firme no desafio. Minha experiência no BMT foi muito positiva. Ao longo do desafio perdi 4,2 kg, minhas calças voltaram a servir e shorts que estavam apertados agora vestem bem melhor. Também tive redução nas medidas (cerca de 6 cm de cintura, quadril e busto) e notei diferença nos braços. A dieta ajudou bastante, me deixou mais saciada e com menos vontade de comer doce. Fiquei satisfeita com os resultados dentro da minha realidade e do meu empenho.',
      rating: 5,
      avatar: 'SH'
    },
    {
      name: 'R.G 30 anos',
      result: 'Definição abdominal visível',
      quote: 'O desafio foi muito importante para mim, principalmente no aspecto psicológico, comecei a ver resultados muito bons tanto estéticos quanto de energia e constância. Eu entrei no desafio com a expectativa de melhorar meu foco, minha disciplina e ver mais definição no meu corpo e posso dizer que realmente consegui evoluir muito nessas áreas. Eu ainda não me pesei e não fiz novas medições, mas o que vejo no espelho e o que as pessoas estão comentando já diz bastante sobre meus resultados. Minha definição muscular está muito mais aparente, principalmente na região do abdômen, braços e pernas. Foi extremamente positiva e transformadora minha experiencia.',
      rating: 5,
      avatar: 'RG'
    },
    {
      name: 'M.S 26 anos',
      result: 'Resultados na 1ª semana',
      quote: 'O desafio foi ótimo para eu voltar a perceber resultados e me sentir feliz com meu corpo. Além disso, voltei a amar comer em casa, mesmo comidas \'de final de semana\'. A alimentação refletiu no humor e a dedicação refletiu no corpo. O treino estava maravilhoso, consegui ver mudança no corpo ainda na primeira semana. Qualidade excepcional. Boa distribuição sem ser treino longo. Maravilhosa como sempre. Boas opções com comidas de verdade, sem firulas kkk. Eu nunca vi um desafio com dedicação das profissionais igual ao BMT. Nada compara!',
      rating: 5,
      avatar: 'MS'
    },
    {
      name: 'C.P 48 anos',
      result: '-6kg e -7cm de barriga',
      quote: 'O que dizer do Desafio BMT? Sem palavras, foi incrível participar, @Marcela Mara e @Mariana Personal muito obrigada! gratidão eterna por essa virada de chave na minha vida. Segui exatamente tudo que foi passado e bati todas as metas que a @Mariana Personal colocou na avaliação de 28 dias atrás. Vamos de um pouquinho dos números: Foram 6 Kg. Ganho de 1 Kg de massa magra. De 40% de gordura para 36%. Perdi 7 cm de barriga. Tem como estar mais feliz? Só se o próximo desafio estiver chegando!!! Parabéns @Mariana Personal e para @Marcela Mara , vocês são incríveis. GENTEEE...!!! Faz tudo certinho que o resultado é um fato!!!',
      rating: 5,
      avatar: 'CP'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#9ACD32]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#9ACD32]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Histórias de <span className="text-[#9ACD32]">Transformação</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Mulheres reais, resultados reais
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative h-full flex flex-col justify-center min-h-[450px]"
            >
              <Quote className="absolute top-8 left-8 text-[#9ACD32]/20" size={64} />
              
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-20 h-20 bg-[#9ACD32] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg shadow-[#9ACD32]/20 shrink-0">
                  {testimonials[currentIndex].avatar}
                </div>

                <div className="flex gap-1 mb-4 shrink-0">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={24} className="fill-[#9ACD32] text-[#9ACD32]" />
                  ))}
                </div>

                <div className="overflow-y-auto max-h-[400px] mb-6 px-2 scrollbar-hide">
                  <p className="text-lg md:text-xl text-gray-700 italic leading-relaxed" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    "{testimonials[currentIndex].quote}"
                  </p>
                </div>

                <div className="mt-auto shrink-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-lg text-[#9ACD32] font-semibold font-medium">
                    {testimonials[currentIndex].result}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 bg-[#9ACD32] rounded-full flex items-center justify-center text-gray-900 hover:bg-[#8BC123] transition-colors duration-300 shadow-lg z-20"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 bg-[#9ACD32] rounded-full flex items-center justify-center text-gray-900 hover:bg-[#8BC123] transition-colors duration-300 shadow-lg z-20"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6 flex-wrap px-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 mb-2 ${
                  index === currentIndex ? 'w-8 bg-[#9ACD32]' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
