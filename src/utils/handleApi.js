import axios from "axios"

const baseUrl = "https://full-stack-todo-app-mern.onrender.com/"

const getAllToDo = (setToDo) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            console.log('data ---> ', data);
            setToDo(data)
        })
}


const addTodo = (text,setText,setToDo)=>{

    axios
    .post(`${baseUrl}save`,{text})
    .then((data)=>{
        console.log(data);
        setText('');
        getAllToDo(setToDo)
    })

    .catch((err)=>console.log(err))

}

const updateTodo = (todoId,text,setToDo,setText,setIsupdating)=>{

    axios
    .post(`${baseUrl}update`,{_id:todoId,text})
    .then((data)=>{
       setText('')
       setIsupdating(false)
        getAllToDo(setToDo)
    })

.catch((err)=>console.log(err))

}

const deleteToDo = (_id,setToDo)=>{

    axios
    .post(`${baseUrl}delete`,{_id:_id})
    .then((data)=>{
     
        getAllToDo(setToDo)
    })

.catch((err)=>console.log(err))

}





export {getAllToDo,addTodo,updateTodo,deleteToDo}