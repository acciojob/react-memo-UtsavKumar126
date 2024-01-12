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
            <div id="todo-0">{todo}</div>
            <button id="add-todo-btn" onClick={()=>setTodo("New Todo")}>Add Todo</button>
            <hr/>
            <div id="incr-cnt">Count: {count}</div>
            <button onClick={()=>setCount(count+1)}>+</button>
            <hr/>
            <hr/>
            <form onSubmit={addToList}>
                <input placeholder="Add Skill" onChange={(e)=>setItem(e.target.value) } id="skill-input" value={item}/>
                <button id="skill-btn">Add Skill</button>
            </form>
            <ul>
                {
                    list.map((ele,i)=>
                    <li id="item-jumbotron" key={i}>{ele}</li>
                    )
                }
            </ul>

        </div>
    )
}

export default App
