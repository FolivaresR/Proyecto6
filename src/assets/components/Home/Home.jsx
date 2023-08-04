import React from 'react';

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://img.freepik.com/foto-gratis/retrato-joven-sonriente-gafas_171337-4842.jpg"
            alt="Imagen de inicio"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h1>SOBRE MI</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel
            elit nec nunc gravida consequat in in est. Vivamus eget luctus
            lectus. Sed ut ultricies metus. Nullam iaculis, arcu a ultrices
            lacinia, odio eros mattis tortor, vel vulputate arcu nibh nec orci.
            Vivamus tristique, sem vel tincidunt aliquet, eros nisi lacinia
            odio, ut auctor arcu turpis eget velit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
