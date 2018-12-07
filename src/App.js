import React, { Component } from 'react';
import './App.css';
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
*/
import Persona from './Persona/Persona';

class App extends Component {
  state = {
    personas: [
      {nombre: 'José', edad: 28},
      {nombre: 'Pedro', edad: 30},
      {nombre: 'Maria', edad: 24}
    ],
    mostrarPersonas: false
  }

  eventoCambiarNombre = (event) =>{
    this.setState({
        personas:[
        {nombre: 'José', edad: 28},
        {nombre: event.target.value, edad: 30},
        {nombre: 'Maria', edad: 26}
      ]
    })
  }

  eliminarPersona = (personaIndex) =>{
    const personas = this.state.personas;
    personas.splice(personaIndex, 1);
    this.setState({personas : personas});
  }

  activarNombrePersona = () => {
    const siMuestra = this.state.mostrarPersonas;
    this.setState({mostrarPersonas : !siMuestra}) //Dos puntos significa igual a
  }

  render() {
    const estilo ={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let personas = null;

    if (this.state.mostrarPersonas) {
      personas = (
        <div>
          {this.state.personas.map((persona, index) => {
            return <Persona
            click={() => this.eliminarPersona (index)}
            nombre={persona.nombre}
            edad={persona.edad}/>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hola, soy una aplicación de React</h1>
        <p>¡Esto está funcionando!</p>
        <button
          style = {estilo}
          onClick={this.activarNombrePersona}>Cambiar Personas</button>
          {personas}
      </div>
      /*<Persona nombre="Abelardo" edad="21">Mi hobby: Programar</Persona>
      <Persona nombre="Manuel" edad="22"/>
      <Persona nombre="Vicdalis" edad="21"/>*/
    );
  }
}

export default App;
