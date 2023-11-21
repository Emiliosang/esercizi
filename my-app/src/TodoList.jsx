import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleReset = () => {
    setTodos([]);
    setNewTodo('');
  };

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <input type="text" value={newTodo} onChange={handleInputChange} placeholder="Aggiungi un nuovo Todo" />
      <button onClick={handleAddTodo}>Aggiungi Todo</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default TodoList