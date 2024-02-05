import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
   <div className="morty--card" key={props.id}>
    <img src={props.photo} />
    <h1>{props.title}</h1>
   </div>
  )
}

export default Card