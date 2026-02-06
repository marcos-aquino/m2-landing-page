
import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react'; // Removed Shield, Award, Clock as they are no longer used for guarantees
import { useToast } from '@/components/ui/use-toast';

const Pricing = () => {
  const { toast } = useToast();

  const handleCheckout = () => {
    // Preparing for subscription data flow
    const subscriptionData = {
      type: 'subscription',
      interval: 'month',
      currency: 'brl',
      items: [{ price: 'price_m2_monthly_397' }]
    };
    
    console.log('Initiating subscription checkout:', subscriptionData);

    toast({
      title: "🚧 Assinatura em breve!",
      description: "A integração de pagamento recorrente (Stripe) será configurada na próxima etapa. Seus dados de assinatura estão prontos."
    });
  };
  
  const included = [
    'Plano de treino completo e progressivo',
    'Guia nutricional estratégico',
    'Acompanhamento profissional dedicado',
    'Acesso à comunidade exclusiva',
    'Atualizações constantes do programa',
    'Suporte via WhatsApp'
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#9ACD32]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#9ACD32]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Invista em <span className="text-[#9ACD32]">você</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Transformação real e contínua com nosso plano mensal
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-[#9ACD32] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-[#9ACD32] text-gray-900 px-6 py-2 font-bold text-sm rounded-bl-2xl tracking-wider">
              ASSINATURA MENSAL
            </div>

            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Método M2 Completo
              </h3>
              
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-gray-400 line-through text-2xl">R$ 299</span>
                <span className="text-6xl font-bold text-gray-900">R$ 199</span>
                <span className="text-2xl font-medium text-gray-500 self-end mb-2">/mês</span>
              </div>
              
              <div className="flex flex-col items-center gap-1 mb-2">
                <span className="text-lg text-[#9ACD32] font-bold" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Renovação automática a cada mês
                </span>
                <span className="text-sm text-gray-500">
                  Acesso contínuo sem interrupções
                </span>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                ✨ Tudo que está incluso na sua assinatura:
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {included.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-[#9ACD32] rounded-full flex items-center justify-center">
                      <Check size={16} className="text-gray-900" />
                    </div>
                    <p className="text-gray-700" style={{ fontFamily: 'Outfit, sans-serif' }}>
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.03, boxShadow: '0 25px 50px -12px rgba(154, 205, 50, 0.5)' }}
              whileTap={{ scale: 0.97 }}
              onClick={handleCheckout}
              className="w-full bg-[#9ACD32] text-gray-900 py-6 rounded-2xl text-2xl font-bold hover:bg-[#8BC123] transition-all duration-300 shadow-xl flex items-center justify-center gap-3"
            >
              Assinar Agora
              <ArrowRight size={28} />
            </motion.button>
            
            <p className="text-xs text-center text-gray-400 mt-4 max-w-lg mx-auto">
              O pagamento será renovado automaticamente a cada mês. Você pode cancelar a qualquer momento diretamente no seu painel ou entrando em contato com o suporte.
            </p>

            {/* Removed the guarantee section as per task */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
