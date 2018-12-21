import React, { PureComponent } from 'react';
import Persona from './Persona/Persona';

class Personas extends PureComponent {
  render () {
    return this.props.personas.map(( persona, index ) => {
        return <Persona
          click={() => this.props.clicked (index)}
          nombre={persona.nombre}
          edad={persona.edad}
          key={persona.id}
          cambiado={(event) => this.props.cambiado (event, persona.id)} />
    } );
  }
}

export default Personas;
