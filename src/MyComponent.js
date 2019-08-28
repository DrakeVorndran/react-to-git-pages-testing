import React from 'react'
import './MyComponent.css'

function MyComponent(props) {
  return (
    <div className='my-component'>
      <h1>{props.text}</h1>
    </div>
  )
}

export default MyComponent