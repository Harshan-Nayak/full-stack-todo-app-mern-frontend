import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import {  getAllToDo ,addTodo,updateTodo,deleteToDo} from "./utils/handleApi";


function App() {

  const [toDo, setToDo] = useState([])
  const [text,setText] = useState('')
  const [isUpdating,setIsupdating] = useState(false)
  const [todoId,setTodoId] = useState('')


  useEffect(() => {
    getAllToDo(setToDo)
  })

const updateMode = (_id,text)=>{
setIsupdating(true)
setText(text)
setTodoId(_id)
}

  return (
    <div className="App">

      <div className="container">  

        <h1>ToDo App</h1>

        <div className="top">
          <input
            type="text"
            placeholder="Add ToDos..."
    value={text}
    onChange={(e)=>setText(e.target.value)}  
           
          />
        <div className="add"   onClick={ isUpdating ? ()=>updateTodo(todoId,text,setTodoId,setText,setIsupdating) :         ()=>addTodo(text,setText,setToDo)} > 
        
                     {isUpdating ? "Update":"Add"}
        
        </div>
   

        </div>

        <div className="list">
      
      {
        toDo && toDo.map((item)=>{
          return(
            <ToDo key={item._id} text={item.text} 
            updateMode={()=>updateMode(item._id,item.text)}
            deleteToDo = {()=>deleteToDo(item._id,setToDo)} 
            
            />
          )
        })
      }



{console.log(toDo)}

        </div>

      </div>

    </div>
  );
}

export default App;
