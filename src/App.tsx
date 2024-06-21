import React, { useState } from 'react';
import { TodoProvider } from './contexts/TodoContext';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.scss';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <TodoProvider>
      <div className={`app ${darkMode ? 'dark' : 'light'}`}>
        <header className="app-header">
          <h1>TODO</h1>
          <button className="toggle-theme" onClick={toggleDarkMode}>
            {darkMode ? '🌞' : '🌙'}
          </button>
        </header>
        <div className="app-container">
          <TodoInput />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
};

export default App;
