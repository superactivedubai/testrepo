import React,{useState} from 'react';
import axios from 'axios';
import Spinner from './Spinner';

 
const AddTaskForm = (props) => {

const [project,setProject] = useState("volvo");
const [taskName,setTaskName] = useState("");
const [taskdescription,setTaskDescription] = useState("");
const [priority,setPriority] = useState("low");
const [showSpinner,setShowSpinner] = useState(false)


 const refreshPage = ()=> {
  window.location.reload(false);
}



const handleTaskName = (event)=> {
  setTaskName(event.target.value);
  console.log(taskName);
 
}

const handleProject = (event)=> {
  setProject(event.target.value);
  console.log(project);
 
}

const handleDescription = (event) => {
  setTaskDescription(event.target.value)
}

const handlePriority = (event) => {
  setPriority(event.target.value);
}

const handleSubmit = (event) => {
  setShowSpinner(true);
  addTask();
  setShowSpinner(false);
  
  //console.log(`project is ${project} and taskName is ${taskName} and desc is ${taskdescription} with ${priority} priority`)
  
  refreshPage();
  
  event.preventDefault();

}

const addTask = async () => {
  const { data } = await axios.post(`http://localhost:3004/tasks`,{
        "project": project,
        "taskName": taskName,
        "taskDesc": taskdescription,
        "priority": priority,
        "status": "new",
        "dueDate": "12/8/2022",
        "assignee": [
            1,
            22
        ]
  });

  if (data) {
    setProject("");
    setTaskName("");
    setTaskDescription("");
  }
  
};

  return (
    <div className="taskform_container">
      {showSpinner? <Spinner /> : <></>}
      <div className="cancel" onClick={props.toggle}>X</div>
      <div className="task_form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="project">Choose Project</label>
        <select value={project} name="project" id="project" onChange={handleProject}>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
</select>

        <label htmlFor="name">Task Name</label>
        <input value={taskName} type="text" required name="name" id="name" placeholder='Task Name' onChange={handleTaskName}/>
        <label htmlFor="description" id="description">Task Description</label>
        <textarea value={taskdescription} required name="description" id="description" cols="30" rows="10" onChange={handleDescription}></textarea>
        <label htmlFor="priority">Priority</label>
        <div onChange={handlePriority}>
        <div className="row_container">
        <input type="radio" name="priority" defaultChecked={priority} id="low" value="low" />
        <label htmlFor="low">Low</label>
        </div>
       <div className="row_container">
       <input type="radio" name="priority" id="high" value="high"/>
       <label htmlFor="high">High</label>
       </div>
       </div>
       <input type="submit" value="Submit" />
       
        </form>
      </div>

    </div>
  )
}

export default AddTaskForm