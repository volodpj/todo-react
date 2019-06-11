import React from 'react';

import TodoContent from './components/TodoContent';
import './App.css';

class App extends React.Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return (
            <div className="App">
                <section className="todoapp">
    
                    <header className="header">
                        <h1>todos</h1>
                        <input className="new-todo" placeholder="What needs to be done?" autofocus="" />
                    </header>
    
                    <TodoContent />
    
                    <footer className="footer" >
                        <span className="todo-count"><strong>0</strong> items left</span>
                        <ul className="filters">
                            <li>
                                <a href="#123" className="selected">All</a>
                            </li>
                            <li>
                                <a href="#11">Active</a>
                            </li>
                            <li>
                                <a href="#11">Completed</a>
                            </li>
                        </ul>
                        <button className="clear-completed" ></button>
                    </footer>
    
                </section>
            </div>
        );
    }
}

export default App;
