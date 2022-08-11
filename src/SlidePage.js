import React,{useState} from 'react';
import AddTaskForm from './AddTaskForm';
import Filter from './Filter';


 
const SlidePage = (props) => {



 const refreshPage = ()=> {
  window.location.reload(false);
}



  return (
    <div className="slide_container">
      <div className="cancel" onClick={props.toggle}>X</div>
      {props.requiredComponent === "Filter" ? <Filter /> : <></>}
     
      </div>
  )
}

export default SlidePage;