import React from 'react';

import TodoContent from './components/TodoContent';
import './App.css';

class App extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            stateContent: 'all',
            newTask: '',
            todos: [],
          }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    };

    deleteTask = (index) => {

        this.setState((prevState) => {
            let newData = prevState.todos;
            newData.splice(index, 1)
            return {
                todos : newData
            }
        })
    };

    filterTofosFoo = () => {
        this.data = this.state.todos;
        if(this.state.stateContent === 'active'){
            this.filtersT = this.data.filter((key) => {
                return key['activ']
            })
            return this.filtersT
        }else if(this.state.stateContent === 'completed'){
            this.filtersT = this.data.filter((key) => {
                return !key['activ']
            })
            return this.filtersT
        }
        
    };

    checkStatus = (task) => {
        
        let newData = this.state.todos;
        
            newData[task]['activ'] ? 
            newData[task]['activ'] = false :
            newData[task]['activ'] = true;
        this.setState({
                todos : newData,
        })
        
    }

    counter = () => {

        let data = this.state.todos;
        let test = data.filter((key) => {
            return key['activ']
        })
        return test.length
    }

    checkContent = (condition) => {
        this.setState({
            stateContent: condition,
        })
    }


    handleChange(event) {
        
            this.setState({newTask: event.target.value});
        
        
      }

    handleSubmit(event) {
        if(this.state.newTask !== ''){
            let newKey = Date.now();
            event.preventDefault();
            this.setState({
                todos: [
                    ...this.state.todos,
                    {
                        id: newKey,
                        text: this.state.newTask,
                        activ: true,
                    }
                ],
                newTask: '',
            });
        }
 
      }

    clearCompleted = () => {
        this.data = this.state.todos;
        this.filtersT = this.data.filter((key) => {
            return key['activ']
        })
        this.setState({
            todos: this.filtersT
        })
    }

    render(){
        let filterTodos = this.filterTofosFoo();
        
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
                        todoList={ (this.state.stateContent !== 'all') ? filterTodos : this.state.todos } 
                        checkActiv={ this.checkStatus }
                        deleteTask={ this.deleteTask }
                    />
    
                    <footer className="footer" >
                        <span className="todo-count"><strong>{ this.counter() }</strong> items left</span>
                        <ul className="filters">
                            <li>
                                <a href="#1" className={ (this.state.stateContent === 'all') ? "selected" : 'none'} onClick={ () => { this.checkContent('all') } }>All</a>
                            </li>
                            <li>
                                <a href="#1" className={ (this.state.stateContent === 'active') ? "selected" : 'none'} onClick={ () => { this.checkContent('active') } }>Active</a>
                            </li>
                            <li>
                                <a href="#1" className={ (this.state.stateContent === 'completed') ? "selected" : 'none'} onClick={ () => {this.checkContent('completed')} }>Completed</a>
                            </li>
                        </ul>
                        <button className="clear-completed" onClick={() => {this.clearCompleted()}}>{(this.counter() < this.state.todos.length) ? 'clear' : ''}</button>
                    </footer>
    
                </section>
            </div>
        );
    }
}

export default App;
