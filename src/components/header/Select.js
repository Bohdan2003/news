import React, { useState, useRef } from 'react';

import "./select.scss"; 

const Select = ({props, option, setOption}) => {
  
  const refList = useRef(null);
  const refTitle = useRef(null);

  const ShowList = () => {
    refTitle.current.classList.toggle("select__title--active");
    refList.current.classList.toggle("select__list--hidden");
    refList.current.parentNode.classList.toggle("select__list-wrapper--disable");    
  };

  return (
    <div className="select">
      <div 
        ref={refTitle}
        className="select__title"
        onClick={ShowList}
        >{option}</div>
      <div className="select__list-wrapper">
        <ul className="select__list select__list--hidden" ref={refList}>
        {
          props.map(({value}, i) => {
            return (
              <li 
                className={`select__item 
                            ${value == option ? 'active' : ''}`} 
                key={i}
                onClick={()=>{
                    setOption(value);
                    ShowList();
                }}>
                {value}
              </li>
            )           
          })
        }       
      </ul>
      </div>
      
    </div>
  );
}

export {Select};