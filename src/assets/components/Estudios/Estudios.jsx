import React from 'react';
import './Estudios.css';

const EducationSection = () => {
  return (
    <div className="container mt-4">
      <h2>Educación</h2>
      <div className="row">
        <div className="col-md-6">
          <h4>UNIVERSAD DEL DESARROLLO</h4>
          <p>BOOTCAMP DESARROLLO WEB FULL STACK</p>
          <p>Año de graduación: 2023 AGOSTO</p>
        </div>
        <div className="col-md-6 text-center" >
        <h4>Insignias</h4>
        <ul className="horizontal-list">
            <li>
              <a href="https://www.credly.com/earner/earned/badge/c2cb6fe1-8164-4a0e-b9ae-d4cf4e995187" target='_blank'>
                <img src="https://images.credly.com/size/680x680/images/791d0469-ca15-4bc9-b9b3-2b8dca821b62/image.png" 
                width="100"
                height="100"
                className="d-inline-block align-top" alt="Insignia 1" />
              
              </a>
            </li>
            <li>
            <a href="https://www.credly.com/earner/earned/badge/2e1e8bda-26fd-4c3b-8d98-3a2c618f1e8a" target='_blank'>
                <img src="https://images.credly.com/size/680x680/images/71ed1274-3d7c-40f4-9194-e464643719e3/image.png" 
                width="100"
                height="100"
                className="d-inline-block align-top" alt="Insignia 2" />
              
              </a>
            </li>
            <li>
            <a href="https://www.credly.com/earner/earned/badge/0bed7f75-f6fc-4486-beac-8f8281a27141" target='_blank'>
                <img src="https://images.credly.com/size/680x680/images/50a7358c-80d1-4a5d-a1d7-a9e0997de2be/image.png" 
                width="100"
                height="100"
                className="d-inline-block align-top" alt="Insignia 3" />
              
              </a>
            </li>
            <li>
            <a href="https://www.credly.com/earner/earned/badge/e38f80e1-0943-4a9b-8cd2-c1116a8f3371" target='_blank'>
                <img src="https://images.credly.com/size/680x680/images/5a6985ec-c5f8-4c59-8668-8278971a368e/image.png" 
                width="100"
                height="100"
                className="d-inline-block align-top" alt="Insignia 4" />
              
              </a>
            </li>
            {/* Agrega más insignias si es necesario */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
