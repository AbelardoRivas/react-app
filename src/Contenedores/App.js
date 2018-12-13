import React, { Component } from 'react';
import clasesCSS from './App.css';
/*import nombre_opcional importa el componente creado.
state es una propiedad que permite manejar los atributos
desde el interior del componente

state se inicializa asignando un valor, osea un objeto de Javascript

{this} -> Se refiere a la clase, se utiliza para acceder a los datos
de forma dinámica.

setState -> Es un método que permite actualizar la propiedad de state
y le permite a React reconocerla. Tiene un objeto como argumento y combina
lo que se defina en el argumento con la propiedad state.

NOTA: state solo funciona con componente que extienden otras
propiedades

NOTA: es recomendable usar componente con funciones ya que state
hace la aplicación más impredecible

.bind enlaza un argumento a un método

target y value son palabras reservadas para acceder a las propiedades de React

map lee un array en Javascript y devuelve un array nuevo en JSX

splice agrega o elimina elemetos de un array

slice copia el array y lo devueelve uno nuevo que se puede guardar en una
variable
*/
import Personas from '../Componentes/Personas/Personas';
import Cockpit from '../Componentes/Cockpit/Cockpit';

class App extends Component {
  state = {
    personas: [
      {id: 'a', nombre: 'José', edad: 28},
      {id: 'b', nombre: 'Pedro', edad: 30},
      {id: 'c', nombre: 'Maria', edad: 24}
    ],
    mostrarPersonas: false
  }

  eventoCambiarNombre = (event , id) =>{
    const personaIndex = this.state.personas.findIndex(p => {
      return p.id === id;
    });

    const persona = {
      ...this.state.personas[personaIndex]
    };

    persona.nombre = event.target.value;

    const personas = [...this.state.personas];
    personas[personaIndex] = persona;

    this.setState({ personas: personas })
  }

  eliminarPersona = (personaIndex) =>{
    const personas = [...this.state.personas];
    personas.splice(personaIndex, 1);
    this.setState({personas : personas});
  }

  activarNombrePersona = () => {
    const siMuestra = this.state.mostrarPersonas;
    this.setState({mostrarPersonas : !siMuestra}) //Dos puntos significa igual a
  }

  render() {

    let personas = null;

    if (this.state.mostrarPersonas) {
      personas = <Personas
            personas={this.state.personas}
            clicked={this.eliminarPersona}
            cambiado={this.eventoCambiarNombre}/>;
    }

    return (
      <div className={clasesCSS.App}>
        <Cockpit
        mostrarPersonas={this.state.mostrarPersonas}
        personas={this.state.personas}
        clicked={this.activarNombrePersona}/>
        {personas}
      </div>
      /*<Persona nombre="Abelardo" edad="21">Mi hobby: Programar</Persona>
      <Persona nombre="Manuel" edad="22"/>
      <Persona nombre="Vicdalis" edad="21"/>*/
    );
  }
}

export default App;
