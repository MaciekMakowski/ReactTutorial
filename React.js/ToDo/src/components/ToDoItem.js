import React from "react";

const ToDoItem = (props) =>{
    {/* Delete toDoItem */}
    const deleteHandler = () => {
        props.setToDos(props.toDos.filter((el) => el.id !== props.toDo.id));
    }
    {/* Change class of toDoItem depends if is it completed */}
    const completeHandler = () => {
        props.setToDos(
            props.toDos.map((item)=> {
                if(item.id === props.toDo.id){
                    return{
                        ...item, 
                        completed: !item.completed,
                    };
                }
                return item;
            })
        );
    }
    {/* change values states to values of clicked button */}
    const inputDescHandler = (e) => {
        if(props.itemIsActive)
        {
        props.setInputDesc(props.desc);
        props.setInputText(props.text);
        props.setInputDate(props.date);
        props.setItemKey(props.toDo.id);
        }
      }
    {/* Clear states and delete toDoItem */}
    const deleteDescHandler = (e) =>{
        props.clearAfterDel();
        deleteHandler();
    }
    return(
        <div className="toDoItem">
            <li className={`todo-item ${props.toDo.completed ? "completed" : ""}`}> <div className="itemData">{props.date}</div> <div className="itemText" onClick={inputDescHandler}> {props.text}</div></li>
            <div className="buttons">
                <button onClick={completeHandler} className={`todo-item ${props.toDo.completed ? "complete-btn" : "uncomplete-btn"}`}>
                    <i className={`todo-item ${props.toDo.completed ? "icon-cancel" : "icon-ok"}`}/>
                </button>
                <button onClick={deleteDescHandler} className="trash-btn">
                    <i className="icon-trash-empty"/>
                </button>
            </div>

        </div>
    );
};
export default ToDoItem;
