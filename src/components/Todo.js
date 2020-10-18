import React from 'react'
import './TodoStyles.css'

function Todo() {
    return (
        <div className="todoitem">
            <input type="checkbox" />
            <h2>Todo Text</h2>
            <button>X</button>
            <button>Edit</button>
        </div>
    )
}

export default Todo
