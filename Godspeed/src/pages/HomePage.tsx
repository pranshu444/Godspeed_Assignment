import React from 'react';
import Hero from '../components/home/Hero';
import ProductsOverview from '../components/home/ProductsOverview';
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
import Stats from '../components/home/Stats';
import CTA from '../components/home/CTA';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <ProductsOverview />
      <Features />
      <Stats />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default HomePage;