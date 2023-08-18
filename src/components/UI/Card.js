import React from 'react'
import styled from "./Card.module.css";

const Card = ({children,className}) => {
    const madeClass = 'card ' + className;
  return (
    <div className={`${styled.card} ${className}`}>
        {children}
    </div>
  )
}

export default Card