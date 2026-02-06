
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Differentials from '@/components/Differentials';
import Testimonials from '@/components/Testimonials';
import ProductDetails from '@/components/ProductDetails';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

const SalesPage = () => {
  return (
    <>
      <Helmet>
        <title>Método M2 - Treino + Nutrição + Acompanhamento | Transformação Real</title>
        <meta 
          name="description" 
          content="Um processo inteligente que respeita seu corpo e constrói resultados reais. Método completo com treino estruturado, nutrição estratégica e acompanhamento profissional para mulheres." 
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <Benefits />
          <Differentials />
          <Testimonials />
          <ProductDetails />
          <Pricing />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default SalesPage;
