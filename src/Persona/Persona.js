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
import React from 'react';

const persona = (prop) => {
  return (
    <div>
      <p>Soy {prop.nombre} y tengo {prop.edad} años de edad</p>
      <p>{prop.children}</p>
    </div>
    //return <p>Soy una persona y tengo {Math.floor(Math.random() * 30)} años de edad</p>
  )
};

export default persona;
