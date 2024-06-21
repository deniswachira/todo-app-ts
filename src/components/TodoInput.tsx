// src/components/TodoInput.tsx
import React, { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const TodoInput: React.FC = () => {
  const [text, setText] = useState('');
  const { dispatch } = useContext(TodoContext);

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch({ type: 'ADD_TODO', payload: text });
      setText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Create a new todo..."
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default TodoInput;
