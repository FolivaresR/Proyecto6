import React from 'react';

const ContactSection = () => {
  return (
    <div className="container mt-4">
      <h2>Contacto</h2>
      <p>Para cualquier consulta o colaboración, no dudes en contactarme:</p>
      <ul>
        <li>
          <strong>Correo electrónico:</strong>{' '}
          <a href="mailto:tu_correo@gmail.com">luisolivares.r717@gmail.com</a>
        </li>
        <li>
          <strong>WhatsApp:</strong>{' '}
          <a href="https://wa.me/1234567890">+56956087515</a>
        </li>
        <li>
          <strong>LinkedIn:</strong>{' '}
          <a href="https://www.linkedin.com/in/tu_perfil" target="_blank" rel="noopener noreferrer">Tu Perfil de LinkedIn</a>
        </li>
      </ul>
    </div>
  );
};

export default ContactSection;
