import React from 'react'

export const Button = ({ name, picture, description, visibility = true }) => {
  let btnClassName = visibility? "btnVisible" : "btnNotVisible"
  return(
    <button className={btnClassName} name={name} type="button" onClick={picture}>{description}</button>
  )
}
