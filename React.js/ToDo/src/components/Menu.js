import React from 'react';

const Menu = (props) =>{
  {/*set status of displayed toDos by filter (all, Completed, Uncompleted)) */}
  const statusHandler = (e) =>{
    props.setStatus(e.target.value);
  }
  
    return(
        <div className='menu'>
          <select id='ch' onChange={statusHandler} name="todos">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
      </div>
    );
}
export default Menu;