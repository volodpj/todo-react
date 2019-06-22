import React from 'react';

function TodoContent(props) {
    
    return (
        
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
               { props.todoList.map((todo, index) => {
                    return (
                        <li 
                            className={ todo['activ'] ? 'activ' : 'completed' } 
                            key={ todo['id'] }
                        >
                            <div className='view'>
                                <input 
                                    className="toggle" type="checkbox"
                                    onClick={ () => props.checkActiv( index ) }
                                />
                                <label>{ todo['text'] }</label>
                                <button 
                                    className="destroy" 
                                    onClick={ () => props.deleteTask( index ) }
                                ></button>
                            </div>
                        </li>
                    )
               })}
            </ul>
        </section>
    )


}

export default TodoContent