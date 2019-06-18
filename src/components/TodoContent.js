import React from 'react';

function TodoContent(props) {
    
    return (
        
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
               {Object.keys(props.todoList).map((todo) => {
                    return (
                        <li 
                            className={ props.todoList[todo]['activ'] ? 'activ' : 'completed' } 
                            key={ todo }
                        >
                            <div className='view'>
                                <input 
                                    className="toggle" type="checkbox"
                                    onClick ={ () => props.checkActiv( todo ) }
                                />
                                <label>{ props.todoList[todo]['text'] }</label>
                                <button 
                                    className="destroy" 
                                    onClick={ () => props.deleteTask( todo ) }
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