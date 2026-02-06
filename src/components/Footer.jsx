
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const quickLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Benefícios', id: 'benefits' },
    { name: 'Diferenciais', id: 'differentials' },
    { name: 'Depoimentos', id: 'testimonials' },
    { name: 'Comprar', id: 'pricing' }
  ];

  const socialLinks = [
    { icon: <Instagram size={24} />, label: 'Instagram' },
    { icon: <Facebook size={24} />, label: 'Facebook' },
    { icon: <Youtube size={24} />, label: 'YouTube' }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <motion.div whileHover={{ scale: 1.05 }} className="text-3xl font-bold mb-4 cursor-pointer">
              Método <span className="text-[#9ACD32]">M2</span>
            </motion.div>
            <p className="text-gray-400 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Transformando vidas através de um método inteligente que respeita seu corpo e constrói resultados reais.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2, color: '#9ACD32' }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-300 cursor-pointer"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-[#9ACD32] transition-colors duration-300"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Contato
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-[#9ACD32] mt-1 flex-shrink-0" />
                <span className="text-gray-400" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  contato@metodom2.com.br
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-[#9ACD32] mt-1 flex-shrink-0" />
                <span className="text-gray-400" style={{ fontFamily: 'Outfit, sans-serif' }}>(32) 99999-9999</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#9ACD32] mt-1 flex-shrink-0" />
                <span className="text-gray-400" style={{ fontFamily: 'Outfit, sans-serif' }}>Juiz de Fora, MG - Brasil</span>
              </li>
            </ul>
          </div>

          {/* Removed "Dúvidas" column */}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left" style={{ fontFamily: 'Outfit, sans-serif' }}>
              © 2026 Método M2. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <button className="text-gray-400 hover:text-[#9ACD32] transition-colors duration-300" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Política de Privacidade
              </button>
              <button className="text-gray-400 hover:text-[#9ACD32] transition-colors duration-300" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Termos de Uso
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
