import React from 'react';
import ToDoItem from './ToDoItem.js';

const ToDosList = (props) => {
    {/* Create to do list and passes states */}
    return(
        <ul className='toDosList'>
              { props.filteredToDos.map(
              todo => (
              <ToDoItem
              key={todo.id} 
              text={todo.text}
              date={todo.date}
              setInputDesc={props.setInputDesc}
              setInputText={props.setInputText}
              setInputDate={props.setInputDate}
              setItemKey={props.setItemKey}
              desc={todo.desc}
              setToDos={props.setToDos}
              toDos={props.toDos} 
              toDo={todo}
              clearAfterDel={props.clearAfterDel}
              itemIsActive={props.itemIsActive}
              />
            )
            )}
            </ul>
    );
}
export default ToDosList;