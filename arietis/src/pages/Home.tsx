import React from 'react';
import Hero from '../components/Hero';
import Clients from '../components/Clients';
import Services from '../components/Services';
import Works from '../components/Works';
import Reviews from '../components/Reviews';
import Cards from '../components/Cards';
import Benefits from '../components/Benefits';

const Home: React.FC = () => {
  return (
    <>
        <Hero/>
        <Clients/>
        <Cards/>
        <Benefits/>    
        <Works/>
        <Reviews/>
        <Services/>
    </>
  );
};

export default Home;
