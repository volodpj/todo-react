import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <section className="todoapp">
    <header className="header">
        <h1>todos</h1>
        <input className="new-todo" placeholder="What needs to be done?" autofocus=""/>
    </header>
    <section className="main" >
        <input id="toggle-all" className="toggle-all" type="checkbox"/>
        <label for="toggle-all">Mark all as complete</label>
        <ul className="todo-list"></ul>
    </section>
    <footer className="footer" >
        <span className="todo-count"><strong>0</strong> items left</span>
        <ul className="filters">
            <li>
                <a href="#" className="selected">All</a>
            </li>
            <li>
                <a href="#">Active</a>
            </li>
            <li>
                <a href="#">Completed</a>
            </li>
        </ul>
        <button className="clear-completed" ></button>
    </footer>
</section>
    </div>
  );
}

export default App;
