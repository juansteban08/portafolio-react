import React, { useEffect, useState } from 'react';
import './SoftSkills.css';

function SoftSkills() {
  const skills = [
    { name: 'Trabajo en equipo', value: 80 },
    { name: 'Comunicación', value: 85 },
    { name: 'Adaptabilidad', value: 90 },
    { name: 'Creatividad', value: 100 },
  ];

  return (
    <div className="soft-skills">
      <h2>Habilidades Blandas</h2>
      <div className="skills-container">
        {skills.map(skill => (
          <SkillCircle key={skill.name} name={skill.name} value={skill.value} />
        ))}
      </div>
    </div>
  );
}

const SkillCircle = ({ name, value }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress < value) {
          return oldProgress + 1; // Incrementa el progreso
        } else {
          clearInterval(timer); // Detiene el temporizador
          return oldProgress;
        }
      });
    }, 20); // Cambia el valor del tiempo para ajustar la velocidad

    return () => clearInterval(timer); // Limpia el temporizador al desmontar
  }, [value]);

  const circumference = 2 * Math.PI * 50; // Circunferencia del círculo
  const offset = circumference - (progress / 100) * circumference; // Calcula el desplazamiento

  return (
    <div className="skill-circle">
      <svg width="120" height="120">
        <circle cx="60" cy="60" r="50" className="circle-background" />
        <circle
          cx="60"
          cy="60"
          r="50"
          className="circle-progress"
          style={{ strokeDasharray: circumference, strokeDashoffset: offset }}
        />
      </svg>
      <div className="percentage">{progress}%</div>
      <span>{name}</span>
    </div>
  );
};

export default SoftSkills;
