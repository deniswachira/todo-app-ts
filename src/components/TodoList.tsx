import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const { state, dispatch } = useContext(TodoContext);

  const filterTodos = () => {
    switch (state.filter) {
      case 'active':
        return state.todos.filter((todo) => !todo.completed);
      case 'completed':
        return state.todos.filter((todo) => todo.completed);
      default:
        return state.todos;
    }
  };

  const itemsLeft = state.todos.filter((todo) => !todo.completed).length;

  return (
    <div className="todo-list">
      {filterTodos().map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      <div className="todo-footer">
        <span>{itemsLeft} items left</span>
        <div className="filters">
          <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'all' })}>
            All
          </button>
          <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'active' })}>
            Active
          </button>
          <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'completed' })}>
            Completed
          </button>
        </div>
        <button onClick={() => dispatch({ type: 'CLEAR_COMPLETED' })}>
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default TodoList;
