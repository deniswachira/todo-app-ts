// src/components/TodoItem.tsx
import React, { useState,  useContext  } from 'react';
import { Todo } from '../types/types';
import { TodoContext } from '../contexts/TodoContext';

const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleToggleTodo = () => dispatch({ type: 'TOGGLE_TODO', payload: todo.id });
  // const handleDeleteTodo = () => dispatch({ type: 'DELETE_TODO', payload: todo.id });
  // const handleUpdateTodo = () => {
  //   dispatch({ type: 'UPDATE_TODO', payload: { id: todo.id, text } });
  //   setIsEditing(false);
  // };

  return (
    <div className="todo-item">
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          // onBlur={handleUpdateTodo}
        />
      ) : (
        <span
          className={todo.completed ? 'completed' : ''}
          onDoubleClick={() => setIsEditing(true)}
        >
          {todo.text}
        </span>
      )}
      <button onClick={handleToggleTodo}>{todo.completed ? 'Undo' : 'Complete'}</button>
      {/* <button onClick={handleDeleteTodo}>Delete</button> */}
    </div>
  );
};

export default TodoItem;
