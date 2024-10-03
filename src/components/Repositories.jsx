import React from 'react';
import './Repositories.css';

function Repositories() {
  const firstCutRepos = [
    { name: 'Proyecto Grupal', url: 'https://github.com/juansteban08/ProyectoDise-oWeb.git' },
    { name: 'clase 2, 3 y parcial', url: 'https://github.com/juansteban08/Dise-oWebMultimedia.git' },
  ];

  const secondCutRepos = [
    { name: 'Clase 8', url: 'https://github.com/juansteban08/JAVASCRIPT-HTML-CLASE8.git' },
    { name: 'Clase 10', url: 'https://github.com/juansteban08/VercelReacCls10.git' },
  ];

  return (
    <div className="repositories">
      <h2>Repositorios</h2>
      <div className="repos-container">
        <div className="cut-repos">
          <h3>Primer Corte</h3>
          {firstCutRepos.map(repo => (
            <RepoButton key={repo.name} repo={repo} />
          ))}
        </div>
        <div className="cut-repos">
          <h3>Segundo Corte</h3>
          {secondCutRepos.map(repo => (
            <RepoButton key={repo.name} repo={repo} />
          ))}
        </div>
      </div>
    </div>
  );
}

const RepoButton = ({ repo }) => {
  return (
    <a href={repo.url} target="_blank" rel="noopener noreferrer" className="repo-button">
      {repo.name}
    </a>
  );
};

export default Repositories;