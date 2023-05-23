import React , {useState, useEffect} from 'react';
import './App.css';
import Menu from './components/Menu.js';
import ToDosList from './components/ToDosList.js';
import DescItem from './components/DescItem';
import Form from './components/Form';
import {v4 as uuid} from 'uuid';
import './fontello-24bb93dd/css/fontello.css';


function App() {

  //Check if some toDos alredy exists

  const toDoLocal = JSON.parse(localStorage.getItem("toDos")) || [];

  //Create states
  const [inputText, setInputText] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [itemKey, setItemKey] = useState(uuid());
  const [toDos, setToDos] = useState(toDoLocal);
  const [keys, setKeys] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredToDos, setFilteredToDos] = useState([]);
  const [halfMainDisp, setHalfMainDisp] = useState(true);

  //Create useEffects

  //Keep actual showing toDos list
  useEffect(()=> {
    saveLocalToDos();
    filterHandler();
  }, [toDos,status]);

  //Filtering todos

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredToDos(toDos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredToDos(toDos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredToDos(toDos);
        break;
    }
  };

  //Saveing toDos to LocalStorage
  const saveLocalToDos = () => {
    localStorage.setItem("toDos", JSON.stringify(toDos))
  };


  //Clearing states before let user add new todo
  const clearToAdd = () => {
    setHalfMainDisp(!halfMainDisp);
    if(halfMainDisp === true){
    setInputText("");
    setInputDate("");
    setInputDesc("");
    setItemKey(uuid());
    }
  };

  //Clearing states after deleting some todo
  const clearAfterDel = () => {
    setInputText("");
    setInputDate("");
    setInputDesc("");
    setItemKey(uuid());
  };

  //render app
  return (
    <div className='App'>
      <header>
      <Menu setStatus={setStatus}/>
        <div id='Title'>ToDo List</div>
      </header>
      <main>
        {/* Creating toDoList and passing props */}
        <div className='half-main' id="h-m-l">
            <ToDosList 
            setToDos={setToDos} 
            toDos={toDos} 
            filteredToDos = {filteredToDos} 
            setInputDesc={setInputDesc}
            setInputText={setInputText}
            setInputDate={setInputDate}
            setItemKey={setItemKey}
            clearAfterDel={clearAfterDel}
            itemIsActive={halfMainDisp}
            />
        </div>
        <div className='half-main' >
          <div id='h-m-r-top'>
            <button className='add-button' onClick={clearToAdd}>{halfMainDisp === true &&  'Add new'} {halfMainDisp === false &&  'Back'}</button>
          </div>
          <div id="h-m-r-content">
            {/* Display Describe Component or Form depends on button state */}
            {halfMainDisp === true &&  <DescItem
                                        desc={inputDesc}
                                        />}
                                        {/* Display Form and pass props */}
            {halfMainDisp === false &&  <Form
                                        inputText={inputText}
                                        setInputText={setInputText}
                                        inputDate={inputDate}
                                        setInputDate={setInputDate}
                                        inputDesc={inputDesc}
                                        setInputDesc={setInputDesc}
                                        toDos={toDos} 
                                        setToDos={setToDos}
                                        itemKey={itemKey}
                                        setItemKey={setItemKey}
                                        keys={keys}
                                        setKeys={setKeys}
                                        clearAfterAdd={clearToAdd}
                                        />}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
