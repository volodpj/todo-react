import React from 'react';

import TodoContent from './components/TodoContent';
import './App.css';

class App extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            stateContent: 'all',
            mainContent: true,
            newTask: '',
            todos: {},
            filterTodos: [],
          }
        

        this.checkStatus = (task) => {
            
            this.setState((prevState) => {
                let newData = prevState.todos;
                newData[task]['activ'] ? 
                newData[task]['activ'] = false :
                newData[task]['activ'] = true;
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
        };

        this.counter = () => {

            let data = this.state.todos;
            let test = Object.keys(data).filter((key) => {
                return data[key]['activ']
            })
            return test.length
        }


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        

    };

    f = (condition) => {
        let filtersTodo = [];
        if(condition === 'active'){
            filtersTodo = Object.keys(this.state.todos)
            .filter((key) => {
                return this.state.todos[key]['activ']
            })
            .map(key => {
                return this.state.todos[key]
            });
            this.setState({
                mainContent: false,
            })
        }else if(condition === 'completed'){
            filtersTodo = Object.keys(this.state.todos)
            .filter((key) => {
                return !this.state.todos[key]['activ']
            })
            .map(key => {
                return this.state.todos[key]
            });
            this.setState({
                mainContent: false,
            })
        }else if(condition === 'all'){
            this.setState({
                mainContent: true,
            })
        }

        this.setState({
            stateContent: condition,
            filterTodos: filtersTodo,
        })
    }


    handleChange(event) {
        this.setState({newTask: event.target.value});
      }

    handleSubmit(event) {
        let newKey = Date.now();
        event.preventDefault();
        this.setState({
                todos: {
                    ...this.state.todos,
                    [newKey]: {
                        id: newKey,
                        'text': this.state.newTask,
                        'activ': true,
                    }
                },
                newTask: '',
        });
      }



    render(){
        
        return (
            <div className="App">
                <section className="todoapp">
    
                    <header className="header">
                        <h1>todos</h1>
                        <form onSubmit={this.handleSubmit}>
                            <input className="new-todo"
                                placeholder="What needs to be done?" 
                                value={this.state.newTask }
                                onChange={ this.handleChange }
                            />
                        </form>
                    </header>
    
                    <TodoContent 
                        todoList={ (this.state.mainContent) ? this.state.todos : this.state.filterTodos } 
                        checkActiv={ this.checkStatus }
                        deleteTask={ this.deleteTask }
                    />
    
                    <footer className="footer" >
                        <span className="todo-count"><strong>{ this.counter() }</strong> items left</span>
                        <ul className="filters">
                            <li>
                                <a href="#1" className="selected" onClick={ () => { this.f('all') } }>All</a>
                            </li>
                            <li>
                                <a href="#1" onClick={ () => { this.f('active') } }>Active</a>
                            </li>
                            <li>
                                <a href="#1" onClick={ () => {this.f('completed')} }>Completed</a>
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
