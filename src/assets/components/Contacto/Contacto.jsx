import React from 'react';

const ContactSection = () => {
  return (
    <div className="container mt-4">
      <h2>Contacto</h2>
      <p>Para cualquier consulta o colaboración, no dudes en contactarme:</p>
      <ul>
        <li>
          <strong>Correo electrónico:</strong>{' '}
          <a href="mailto:tu_correo@gmail.com">faolivaresrojas@gmail.com</a>
        </li>
        <li>
          <strong>WhatsApp:</strong>{' '}
          <a href="https://wa.me/1234567890">+56930000090</a>
        </li>
        <li>
          <strong>LinkedIn:</strong>{' '}
          <a href="https://www.linkedin.com/in/fernando-andres-olivares-rojas-371b5226a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </li>
      </ul>
    </div>
  );
};

export default ContactSection;
