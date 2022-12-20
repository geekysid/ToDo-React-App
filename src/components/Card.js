import React from 'react'

const Card = ({ header, children }) => {
  return (
    <div className="container">
        <header className="header"><span>{header}</span></header>
        { children }
    </div>
  )
}

export default Card