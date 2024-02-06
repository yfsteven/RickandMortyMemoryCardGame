import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
   <div className="morty--card" key={props.id} onClick={() => { props.click(props.id)}}>
    <img src={props.photo} />
    <h1 className="morty--name">{props.title}</h1>
   </div>
  )
}

export default Card