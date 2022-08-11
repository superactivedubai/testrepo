import './App.css';
import axios from 'axios';
import { useState,useEffect } from 'react';
import AddTaskForm from './AddTaskForm';
import TaskCard from './TaskCard';
import SlidePage from './SlidePage';






function App() {

  const [showForm, setShowForm] = useState(false);
  const [data,setData] = useState([]);
  const [slidePage, setSlidePage] = useState(false);

  const refreshPage = ()=> {
    window.location.reload(false);
  }

  const getData = async () => {
    const { data } = await axios.get(`http://localhost:3004/tasks?_sort=id&_order=desc`);
    setData(data);
  };

  const delTask = async (taskId) => {
    const { deletedTask } = await axios.delete(`http://localhost:3004/tasks/${taskId}`);
    refreshPage();
  }
 
   useEffect(()=> {
    getData();
   },[]);
   

  // fetching data from backend server

  // sample fixed task data, to be changed to DB. 
  // const taskInfo = {
  //   project : "NISSAN",
  //   taskName : "Repairing right door ",
  //   taskDesc : "Hi please dint and re-paint. good work with metal finish please. keep it until it dries",
  //   priority : "low",
  //   status : "completed",
  //   dueDate : "12/8/2022",
  //   assignee : [1,22]  

  // }

 

  const toggleForm = () => {
    setShowForm(prev => !prev);
  }


  const toggleSlidePage = () => {
    setSlidePage(prev => !prev);
  }

  const closeForm = () => {
    if (showForm === true) {
      setShowForm(false)
    }
  }

  return (
   
    <div className="App" >
      {slidePage? <SlidePage toggle={toggleSlidePage} requiredComponent="Filter"/> : <></>}
   
    <div className="containerOne">
      <div className="containerHeader">
        <div>Task Meter 25/50</div>
        {showForm?<AddTaskForm toggle={toggleForm}/>:<></>}
        <div className="add_task_button" onClick={toggleForm}>Add Task</div>
      </div>
      <div className="column_group" onClick={closeForm}>
      <div className="column_1">

        <div className="row-container-space">
        <div className="column_header_container">
        
          <div className="purple_dot"></div>
          <div>To Do</div>
          
        </div> 
        {/* end of column_header_container */}
        <img className='closebtn' src={require('./asset/filterIcon.png')} width={'30px'} height={'30px'} alt="" onClick={toggleSlidePage}/>
        

        </div>
        <hr className="purple" />
    

        {data.map((task) => {
          if(task.status === "new")
          return <TaskCard key={Math.floor(Math.random() * 1000) + 1} taskInfo={task} refreshFunction={refreshPage} delFunction={delTask} slideFunction={toggleSlidePage}/>
        })}
        
        {/* <div className="label_purple">Project1</div>
        <div className="task_card">
          <div className="edit">...</div>
          <div className="task_lable">lable</div>
          <div className="task_desc">This is the decription</div>
          <div className="low_lable">low</div>
          <div className="high_lable">high</div>
          <div className="complete_status">Completed</div>
          <div className="new_status">New</div>
          <div className="in_progress_status">In-Progress</div>
          <div className="date_lable">1/4/2022</div>
          <Avatar  size="20" round={true} src="https://images.generated.photos/jOMSG0IoFR3x5qZiY0HAkRspTrb54uzOtgiiStOI7ZQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTg1OTA3LmpwZw.jpg" alt="" />
        </div>  */}
       
      </div>
      <div className="column_1">
      <div className="column_header_container">
      <div className="yellow_dot"></div>
          <div>In Progress</div>   
      </div>
      <hr className="yellow" />
      {data.map((task)=> {
          if(task.status === "inProgress")
          return <TaskCard key={Math.floor(Math.random() * 1000) + 1} taskInfo={task}/>
        })}
      </div>
      <div className="column_1">
      <div className="column_header_container">
      <div className="green_dot"></div>
          <div>Completed</div>   
      </div>
      <hr className="green" />
      {data.map((task) => {
          if(task.status === "completed")
          return <TaskCard key={Math.floor(Math.random() * 1000) + 1} taskInfo={task} />
        })}
      </div>
     
      </div>
    </div>
    
    </div>
    
  );
}

export default App;
