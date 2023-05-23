import React from "react";
import {v4 as uuid} from 'uuid';

const Form = (props) => {
  {/* Change value in Date input depends on this if it was used*/}
    function _onFocus(e){
        e.currentTarget.type = "date";
    }
    function _onBlur(e){
        e.currentTarget.type = "text";
        e.currentTarget.placeholder = "Enter a Date";
    }

    {/* Pass imputs value to states */}
    const inputTextHandler = (e) => {
        props.setInputText(e.target.value);
      }
      const inputDescHandler = (e) => {
        props.setInputDesc(e.target.value);
      }
    const inputDateHandler = (e) => {
        props.setInputDate(e.target.value);
    }

    {/* Pass states value into toDos*/}
      const submitTodoHandler = (e) => {
        e.preventDefault();

        props.setToDos([
          ... props.toDos,
          {text: props.inputText, date: props.inputDate, desc: props.inputDesc, completed: false, id: props.itemKey},
        ]);
        props.clearAfterAdd();
      }

    return(
        <form className="FormClass">
            <input id="Form-t" type='text' placeholder="Something to do..." name="text"  value={props.inputText} onChange={inputTextHandler}/>
            <input id="Form-d" type="text" placeholder="Type Date"          name="Date"  value={props.inputDate} onChange={inputDateHandler} onFocus = {_onFocus} onBlur={_onBlur}/>
            <textarea id="Form-desc" type='text' placeholder="Describe..."  name="Desc"  value={props.inputDesc} onChange={inputDescHandler}/>
            <button id ="Form-s" type="submit" onClick={submitTodoHandler}> Save </button>
        </form>
    );
}
export default Form;