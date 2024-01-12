import React, { useState } from "react";


const App=()=>{
    const[todo,setTodo]=useState("");
    const[count,setCount]=useState(0);
    const[list,setList]=useState([]);
    const[item,setItem]=useState("");

    function addToList(e){
        if(item.length<5)return;
        e.preventDefault();
        setList([...list,item]);
        setItem("");
    }
    return(
        <div id="main">
            <h1>My todos</h1>
            <div>{todo}</div>
            <button id="add-todo-btn" onClick={()=>setTodo("New todo")}>Add Todo</button>
            <hr/>
            <div>Count: {count}
                <button id="incr-cnt" onClick={()=>setCount(count+1)}>+</button>
            </div>
            <hr/>
            <hr/>
            <form onSubmit={addToList}>
                <input placeholder="Add Skill" onChange={(e)=>setItem(e.target.value) } id="skill-input" value={item}/>
                <button>Add Skill</button>
            </form>
            <ul>
                {
                    list.map((ele,i)=>
                    <li key={i}>{ele}</li>
                    )
                }
            </ul>

        </div>
    )
}

export default App
