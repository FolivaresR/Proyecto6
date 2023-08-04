import React from 'react';

const EducationSection = () => {
  return (
    <div className="container mt-4">
      <h2>Educación</h2>
      <div className="row">
        <div className="col-md-6">
          <h4>Nombre de la Universidad</h4>
          <p>Grado obtenido: Licenciatura en Ciencias de la Computación</p>
          <p>Año de graduación: 20XX</p>
        </div>
        <div className="col-md-6">
          <h4>Insignias</h4>
          <ul>
            <li>Insignia 1 - Descripción de la insignia.</li>
            <li>Insignia 2 - Descripción de la insignia.</li>
            <li>Insignia 3 - Descripción de la insignia.</li>
            {/* Agrega más insignias si es necesario */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
