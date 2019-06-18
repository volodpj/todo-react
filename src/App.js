import React from 'react';

import TodoContent from './components/TodoContent';
import './App.css';

class App extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            todos: {
               
            }
          }
        
        this.generateNewId = () => {
            let id = [];
            for(let i = 0; i < 5; i++ ){
                id = [
                    ...id,
                    this.getRandomIntInclusive(0,9)
                ]
            };
            return id.join('')
        }

        this.getRandomIntInclusive = (min, max) => {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
          }
        
        this.addTodo = (event) => {
            
            if (event.key === "Enter") {
                let newTodo = event.target.value;
                let newKey = this.generateNewId();
                event.target.value = '';
                this.setState({
                    todos: {
                        ...this.state.todos,
                        [newKey]: {
                            'text': newTodo,
                            'activ': true
                        }
                    }
                })
            }    
        };

        this.checkStatus = (event) => {
            
            this.setState((prevState) => {
                let newData = prevState.todos;
                newData[event]['activ'] ? 
                newData[event]['activ'] = false :
                newData[event]['activ'] = true;
                return {
                    todos : newData
                }
            })
        }

        this.deleteTask = (task) => {

            this.setState((prevState) => {
                let newData = prevState.todos;
                delete newData[task]
                return {
                    todos : newData
                }
            })
        }
    };


    render(){
        console.log(this.state.todos)
        return (
            <div className="App">
                <section className="todoapp">
    
                    <header className="header">
                        <h1>todos</h1>
                        <input className="new-todo"
                            placeholder="What needs to be done?" 
                            onKeyPress={ this.addTodo }
                        />
                    </header>
    
                    <TodoContent 
                        todoList = { this.state.todos } 
                        checkActiv = { this.checkStatus }
                        deleteTask = { this.deleteTask }
                    />
    
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
