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

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
          <div>{todo}</div>
    </div>
  );
};

export default Todo;
