import React from 'react';
import Persona from './Persona/Persona';

const personas = (prop) => prop.personas.map((persona, index) => {
    return <Persona
    click={() => prop.clicked (index)}
    nombre={persona.nombre}
    edad={persona.edad}
    key={persona.id}
    cambiado={(event) => prop.cambiado (event, persona.id)} />
  });

export default personas;
