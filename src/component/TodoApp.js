import React, { useState, useCallback, useMemo } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTodo = useCallback(() => {
    if (input.trim()) {
      setTodos([...todos, { text: input, id: Date.now() }]);
      setInput('');
    }
  }, [input, todos]);

  const handleDeleteTodo = useCallback((id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }, [todos]);

  const handleEditTodo = useCallback((id, newText) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, text: newText } : todo)));
  }, [todos]);

  const renderedTodos = useMemo(() => {
    return todos.map(todo => (
      <div key={todo.id}>
        <input
          type="text"
          value={todo.text}
          onChange={(e) => handleEditTodo(todo.id, e.target.value)}
        />
        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
      </div>
    ));
  }, [todos, handleDeleteTodo, handleEditTodo]);

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <div>{renderedTodos}</div>
    </div>
  );
};

export default TodoApp;
