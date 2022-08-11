import React from 'react'
import './App.css';

const Notification = (props) => {
  return (
    <div className='alert'>
  <span>&times;</span> 
  <strong>{props.title}</strong> {props.message}
</div>
  ) 
}

export default Notification