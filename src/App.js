import React from 'react';

import TodoContent from './components/TodoContent';
import './App.css';

class App extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {

            mainContent: 'all',
            newTask: '',
            todos: {
               
            }
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

    changeActive = () => {
        this.setState({
            mainContent: 'active',
        })
    };

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
        

        const filtersTodo = Object.keys(this.state.todos)
            .filter((key) => {
                return this.state.todos[key]['activ']
            })
            .map(key => {
                return this.state.todos[key]
            });

        console.log(filtersTodo);

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
                        todoList={ (this.state.mainContent === 'active') ? filtersTodo : this.state.todos } 
                        checkActiv={ this.checkStatus }
                        deleteTask={ this.deleteTask }
                    />
    
                    <footer className="footer" >
                        <span className="todo-count"><strong>{ this.counter() }</strong> items left</span>
                        <ul className="filters">
                            <li>
                                <a href="#123" className="selected">All</a>
                            </li>
                            <li>
                                <a href="#11" onClick={ this.changeActive }>Active</a>
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
