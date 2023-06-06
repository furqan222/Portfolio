import React from 'react';
import './App.css';
import Header from './componenets/Header/Header'
import Footer from './componenets/Footer/Footer'
import Nav from './componenets/Nav/Nav'
import About from './componenets/About/About'
import Experience from './componenets/Experience/Experience'
import Contact from './componenets/Contact/Contact'
import Testimonials from './componenets/Testimonials/Testimonials'
import Portfolio from './componenets/Portfolio/Portfolio'
import Services from './componenets/Services/Services'
function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      </>

  );
}

export default App;
