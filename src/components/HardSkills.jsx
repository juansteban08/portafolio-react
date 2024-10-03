import React from 'react';
import './HardSkills.css'; // Importa tu archivo CSS

function HardSkills() {
  const skills = [
    { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
    { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { name: 'C#', logo: 'https://github.com/dotnet/vscode-csharp/blob/main/images/csharpIcon.png?raw=true' },
    { name: 'CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
  ];

  return (
    <div className="hard-skills">
      <h2>Habilidades Duras</h2>
      <div className="skills-container">
        {skills.map(skill => (
          <SkillLogo key={skill.name} logo={skill.logo} />
        ))}
      </div>
    </div>
  );
}

const SkillLogo = ({ logo }) => {
  return (
    <div className="skill-logo">
      <img src={logo} alt="Skill Logo" />
    </div>
  );
}

export default HardSkills;
