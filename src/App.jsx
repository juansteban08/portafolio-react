import React from 'react';
import Description from './components/Description';
import SoftSkills from './components/SoftSkills';
import HardSkills from './components/HardSkills';
import SocialLinks from './components/SocialLinks';
import Repositories from './components/Repositories';
import VirtualClass from './components/VirtualClass';
import Counter from './components/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Mi Portafolio</h1>
        <nav className="nav-bar">
        <a href="#description">Descripcion</a>
          <a href="#soft-skills">Habilidades Blandas</a>
          <a href="#hard-skills">Habilidades Duras</a>
          <a href="#social-links">Redes Sociales</a>
          <a href="#repositories">Repositorios</a>
          <a href="#virtual-class">Clase Virtual</a>
        </nav>
      </header>
      <section id="description">
        <Description />
      </section>
      <section id="soft-skills">
        <SoftSkills />
      </section>
      <section id="hard-skills">
        <HardSkills />
      </section>
      <section id="social-links">
        <SocialLinks />
      </section>
      <section id="repositories">
        <Repositories />
      </section>
      <section id="virtual-class">
        <VirtualClass />
      </section>
      <section id="counter">
        <Counter />
      </section>
    </div>
  );
}

export default App;
