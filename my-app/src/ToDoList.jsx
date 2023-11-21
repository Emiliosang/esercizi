import React, { useState } from "react";

function ToDoList(){
    const [ToDos, setToDos] = useState([])
    const [newToDos, setNewToDos] = useState('')

    const  handleInputChange = (event) => {
        setNewToDos(event.target.value)
    }

    const handleAddToDo = () => {
        setToDos([...ToDos, newToDos]);
    }
    return (
        <div>
            <ul>
                {ToDos.map((ToDos, index) => (
                    <li key={index}>{ToDos}</li>
                ))}
            </ul>
            <div>
                <input type="text" value={newToDos} onChange={handleInputChange} placeholder="aggiungi un ToDo"/>
                <button onClick={handleAddToDo}>click me</button>
            </div>
        </div>
    )
}

export default ToDoList