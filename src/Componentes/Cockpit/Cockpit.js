import React from 'react';
import clasesCSS from './Cockpit.css';

const cockpit = (prop) => {

  const clases = [];
  let claseBoton = '';

  if (prop.mostrarPersonas) {
    claseBoton = clasesCSS.Red;
  }

  if (prop.personas.length <= 2) {
    clases.push(clasesCSS.red);
  }
  if (prop.personas.length <= 1) {
    clases.push(clasesCSS.bold);
  }

  return (
    <div className={clasesCSS.Cockpit}>
      <h1>Hola, soy una aplicación de React</h1>
      <p className={clases.join(' ')}>¡Esto está funcionando!</p>
      <button
        className={claseBoton}
        onClick={prop.clicked}>Cambiar Personas</button>
    </div>
  );
};

export default cockpit;
