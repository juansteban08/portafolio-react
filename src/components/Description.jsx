import React from 'react';
import profileImage from '../imag/profile.jpeg'; // Asegúrate de importar la imagen
import './Description.css'; // Importa el CSS

function Description() {
  return (
    <div className="description">
        <h2>Juan Steban Valverde</h2>
      <img src={profileImage} alt="Foto de perfil" className="profile-image" />
      <h2>Descripción</h2>
      <p>¡Hola! Soy un desarrollador apasionado por crear proyectos web increíbles.</p>
    </div>
  );
}

export default Description;
