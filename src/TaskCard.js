import React from 'react'
import Avatar from 'react-avatar';

const TaskCard = (props) => {

  const {project,taskName,taskDesc,priority,status,dueDate, assignee,id} = props.taskInfo;
  
  let priorityClass , priorityLabel;
  let statusClass , statusLabel, label_color;

  // determine with priority label I should display
  switch(priority) {
    case "low" : 
    priorityClass = "low_lable";
    priorityLabel = "LOW";
    break;
    case  "high" : 
    priorityClass = "high_lable";
    priorityLabel = "HIGH";
    break;
    default : 
    priorityClass = "";
    priorityLabel = "Unkown priority";
  }

  // determine with status lable I should display

  switch(status) {
    case "new" :
      statusClass = "new_status";
      statusLabel = "NEW";
      label_color="label_purple";
      
      break;
    case "inProgress" :
      statusClass = "in_progress_status";
      statusLabel = "IN-PROGRESS";
      label_color="label_yellow";
      break;
    case "completed" : 
      statusClass = "complete_status";
      statusLabel = "COMPLETED";
      label_color="label_green";
    break;
    default : 
      statusClass = "";
      statusLabel = "unkown status";
      label_color="label_purple";
  


    
  }


  const confirmDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      props.delFunction(id);
    }
  }

      
  

  return (
    <>
    <div className={label_color}>{project}</div>
    <div className="task_card">
    <div className="edit" onClick={()=>confirmDelete(id)}>Delete {id}</div>
    <div className="task_lable">{taskName}</div>
    <div className="task_desc">{taskDesc}</div>
    <div className={priorityClass}>{priorityLabel}</div>
    <div className={statusClass}>{statusLabel}</div>
    <div className='row-container'>
    {
      assignee.map((assignee)=> {
        
        return <Avatar style={{'marginRight':'5px'}} key={assignee} id={assignee} size="30" round={true} src="https://images.generated.photos/jOMSG0IoFR3x5qZiY0HAkRspTrb54uzOtgiiStOI7ZQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTg1OTA3LmpwZw.jpg" alt="Karla" />
      })
    }
    
    </div>
    <div className='date_lable'>{dueDate}</div>
    </div>
    </>
  )
}

export default TaskCard