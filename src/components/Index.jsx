import { use, useEffect, useState } from "react"
import "./index.css"
function Index(){
    const [data,setData] = useState(()=>{
        const savedTodo = localStorage.getItem('mytask')
        if(savedTodo){
            return JSON.parse(savedTodo)
        }else{
            return [];
        }
    })
    const [text,setText] = useState("")

    function addTask(){
        if(text.trim()==="") return
        setData([...data,text])
        setText("")
    }

    function deleteTodo(toIndex){
        const del = data.filter((item,index)=> toIndex !== index)
        setData(del)
    }

    useEffect(()=>{
        localStorage.setItem('mytask',JSON.stringify(data))
    },[data])

    return(
        <div className="Todolist">
            <div className="container">
                <h1>To do list</h1>
                    <form className="todolist-content"></form>
                    <input type="text" 
                    value={text}
                    onChange={(e)=>setText(e.target.value)}
                    />
                    <button className="addtodo" onClick={()=>addTask()}>ADD</button>
                    <ul>
                        {data.map((item,index)=>(
                            <li key={index}>{item}
                            <button className="del-button" onClick={()=>deleteTodo(index)}>X</button>
                            </li>
                        ))}
                    </ul>
            </div>
        </div>
    )
}

export default Index