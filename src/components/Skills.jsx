import React from 'react';

const softSkills = [
  "Capacidad de Trabajo en Equipo",
  "Autodidacta",
  "Comunicación Efectiva",
  "Proactividad",
  "Adaptabilidad",
];

const technicalSkills = [
  "Lenguajes: Java, Python, PHP, JavaScript, C#",
  "Frontend: React, Angular, Bootstrap",
  "Backend: Spring Boot, Laravel, NestJs, ASP.NET",
  "Bases de Datos: MySQL, PostgreSQL, SQL Server",
  "Herramientas: Git, Docker",
  "Metodologías: Scrum",
];

export default function Skills() {
  return (
    <section>
      <h2>Habilidades</h2>
      <div className="grid">
        <div className="card">
          <h3>Habilidades Blandas</h3>
          <ul>
            {softSkills.map((skill, index) => (
              <li key={index}>✔ {skill}</li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h3>Habilidades Técnicas</h3>
          <ul>
            {technicalSkills.map((skill, index) => (
              <li key={index}>✔ {skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
