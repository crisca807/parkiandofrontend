import React from 'react';
import { Banner } from './Homepage/Banner';
import { Contact } from './Homepage/Contact';
import { Footer } from './Homepage/Footer';
import { NavBar } from './Homepage/NavBar';
import { Projects } from './Homepage/Projects';
import { Skills } from './Homepage/Skills';
import '../assets/css/Home.css'

const Home = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
