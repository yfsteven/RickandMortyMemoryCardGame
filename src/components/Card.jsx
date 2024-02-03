import React from 'react'

const Card = (props) => {
  return (
   <div className={props.key}>
    <img src={props.photo} />
   </div>
  )
}

export default Card