import React from 'react';
export default function Projects() {
    return (
      <section className="py-10 px-4 bg-white text-gray-800 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Proyectos</h2>
        <ul className="space-y-4">
          <li className="border p-4 rounded">
            <h3 className="font-semibold">Desarrollo de Sistemas Web para una Municipalidad Distrital</h3>
            <p>
                Participé en el desarrollo de un sistema web basado en ERP, utilizando Laravel como backend
                para la gestión de predios de los ciudadanos del distritos.
                Facilitando el control y administración de la gestión de información tributaria.
            </p>
          </li>
          <li className="border p-4 rounded">
            <h3 className="font-semibold">Seguimiento de trámites ciudadanos</h3>
            <p>
                Contribuí al desarrollo de un sistema web que permite a los ciudadanos subir y realizar seguimiento a sus trámites. 
                Implementé funcionalidades clave para mejorar la experiencia del usuario y la eficiencia en el procesamiento de trámites.
            </p>
          </li>
          <li className="border p-4 rounded">
            <h3 className="font-semibold">Sistema de Gestión de Contratos Empresariales</h3>
            <p>
                Formé parte de un equipo de desarrollo encargado de crear un sistema web para la gestión de contratos corporativos. 
                Utilizamos Laravel para el backend y React junto con NestJs para el frontend, logrando una solución robusta y escalable.
            </p>
          </li>
        </ul>
      </section>
    );
  }
  