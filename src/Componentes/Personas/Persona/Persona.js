/*
Primer componente.
Un componente es una función que retorna código JSX.
const persona = () => {

} Función ES6

"{}" -> Sintaxis para pasar argumentos dinámicos

Math.random genera un número entre 0 y 1. Se multiplica por 30 en este caso.
Math.floor devuelve el máximo entero menor o igual a un número.

prop es el argumento que se le pasa al componente
es decir, las "propiedades" que se le agregan.

.children (palabra reservada) se refiere a cualquier elemento que esté después
de las etiquetas del componente.
*/
import React, { Component } from 'react';
import clasesCSS from './Persona.css'; //Importa el archivo CSS

class Persona  extends Component {
  render () {
    return (
      <div className={clasesCSS.Persona}>
        <p onClick={this.props.click}>Soy {this.props.nombre} y tengo {this.props.edad} años de edad</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.cambiado} value={this.props.nombre}/>
      </div>
      //return <p>Soy una persona y tengo {Math.floor(Math.random() * 30)} años de edad</p>
    )
  }
}

export default Persona;
