import React from 'react';

const ConClase = (props) => (
  <div className={props.clasesCSS}>
    {props.children}
  </div>
);

export default ConClase;
