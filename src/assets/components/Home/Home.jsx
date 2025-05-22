import React from 'react';

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="Programador.jpg"
            alt="Imagen de inicio"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h1>💻 Sobre mí</h1>
          <p>
            Soy un desarrollador web apasionado por crear experiencias digitales funcionales y atractivas.
            Mi enfoque se centra en la construcción de interfaces intuitivas y eficientes, combinando diseño y funcionalidad
            para ofrecer soluciones web de alta calidad.
            Me encanta aprender nuevas tecnologías y mejorar mis habilidades constantemente.
            Actualmente, estoy buscando oportunidades para aplicar mis conocimientos en proyectos desafiantes y colaborar con equipos creativos.

           🛠️ Habilidades y Tecnologías
Lenguajes de Programación: JavaScript, HTML, CSS

Frameworks y Librerías: React.js, Bootstrap

Herramientas de Desarrollo: Git, GitHub, Visual Studio Code

Diseño Responsivo: Implementación de diseños adaptables a diferentes dispositivos y tamaños de pantalla

Control de Versiones: Manejo de sistemas de control de versiones para seguimiento y colaboración en proyectos

          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
