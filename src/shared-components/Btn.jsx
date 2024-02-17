import React from 'react'
import { Link } from 'react-router-dom'

function Btn({title,link , className ,id}) {
  return (
    <Link to={link ? link : "#"} data-id={id ? id : ""} className={`tre-btn ${className ? className : ""}`}><span data-text={title}><span>{title}</span></span></Link>
  )
}

export default Btn