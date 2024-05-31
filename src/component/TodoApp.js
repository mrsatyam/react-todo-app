import React, { useState } from 'react';

const TodoApp = () => {
   const [todos, setTodos] = useState([]);
   const [input, setInput] = useState('');

    const handleAddTodo = () => {
      if (input.length > 0) {
        setTodos([...todos, { text: input, id: Date.now() }]);
        setInput('');
      }
    };

  const handleDeleteTodo = (todoId) => {
        setTodos(todos.filter(td => td.id !== todoId));
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
        <div>
            {todos.map(todo => (
              <div key={todo.id}>
                  {todo.text}
                  <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
              </div>
            ))}
        </div>
    </div>
  );
};

export default TodoApp;
