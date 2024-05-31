import React, { useState } from 'react';

const Todo = () => {
  const [todo, setTodo] = useState('');
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    if (input.length > 0) {
      setTodo(input);
      setInput('');
    }
  };

  const handleDeleteTodo = () => {
      if (todo.length > 0) {
        setTodo('');
      }
    };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
          <div><p>{todo}</p><button onClick={handleDeleteTodo}>Delete</button> </div>
    </div>
  );
};

export default Todo;
