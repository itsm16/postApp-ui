import React from 'react';
import "./Icon.css"

const Icon = ({img : Img, name, size = 22}) => {
  return (
    <div className='icon-body'>
      {Img && <Img className="icon" size={size}/>}
      {name && <span className='icon__name'>{name}</span>}
    </div>
  );
}

export default Icon;
