import React from 'react';

const SkillsSection = () => {
  return (
    <div className="container mt-4">
      <h2>Habilidades</h2>
      <div className="row">
        <div className="col-md-3">
          <h4>HTML</h4>
          <p>
            HTML es el lenguaje de marcado estándar para crear páginas web.
            Conozco los elementos básicos y semánticos de HTML5.
          </p>
        </div>
        <div className="col-md-3">
          <h4>CSS</h4>
          <p>
            CSS es un lenguaje de estilo que se utiliza para dar estilo a las
            páginas web. Puedo aplicar estilos y diseños atractivos utilizando
            CSS3 y Bootstrap.
          </p>
        </div>
        <div className="col-md-3">
          <h4>JavaScript</h4>
          <p>
            JavaScript es un lenguaje de programación que se utiliza para
            agregar interactividad a las páginas web. Tengo experiencia en el
            manejo de eventos, manipulación del DOM y uso de bibliotecas como
            jQuery.
          </p>
        </div>
        <div className="col-md-3">
          <h4>React</h4>
          <p>
            React es una biblioteca de JavaScript para crear interfaces de
            usuario. Puedo construir componentes reutilizables y aplicaciones
            web modernas utilizando React y Redux.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
