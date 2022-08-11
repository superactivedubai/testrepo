import React from 'react'

const Filter = () => {


  return (
    <div>
        <p>This is where we do filter and sort stuff</p>
        <div className="badge">2</div>

        <form action="">
            <label htmlFor="orderby">Order By</label>
            <select name="orderby" id="orderby">
                <option value="Due Date">Due Date</option>
                <option value="Creation Date">Creation Date</option>
            </select>
           <input type="radio" name="ordertype" value="asc" />Ascending
           <input type="radio" name="ordertype" value="asc" />Ascending
           <div className="add_task_button">Apply</div>
           <div className="row-container">
           <label htmlFor="startwith">field</label>
           <select name="startwith" id="orderby">
                <option value="project">Project</option>
                <option value="task title">Task Title</option>
                <option value="task details">Task Details</option>
            </select>
            contains
            <input type="text" placeholder='start with' />
            </div>
            <div className="add_task_button">Add Another filter</div>
        </form>

    </div>
  )
}

export default Filter