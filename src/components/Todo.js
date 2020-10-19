import React, { Component } from 'react'
import firebase from '../config/firebase.js'
class Todo extends Component {
    constructor() {
        super();
        this.state = {
            todos: [
                {
                    title: "kishor",
                    edit: false
                },
                {
                    title: 'kumar',
                    edit: false
                }
            ],
            value: ""
        }
    }
    addTodo = () => {
        let obj = {
            title: this.state.value
        }
        firebase.database().ref('/').child("todos").push(obj);

        // when you have only arry in the state to render : then try to replace the obj with  this.state.value and comment the above obj
        if (this.state.value !== '') {
            var todos = [...this.state.todos, obj]
            // this.state.todos.push(this.state.value)
            this.setState({
                todos: todos,
                value: ""
            })

        }


    }
    remove = (i) => {
        // var todoList = [...this.state.todos]; // make a separate copy of the array
        this.state.todos.splice(i, 1);
        this.setState({ todos: this.state.todos });

    }
    removeAll = () => {
        // var todosList = [...this.state.todos]; // make a separate copy of the array
        // todosList = []
        this.setState({ todos: [] });
    }
    edit_item = (item, index) => {


        // this.setState(this.state.todos[i] = todo );
        /// this only works when we have arry in the state
        
        // let update_item = prompt("Enter Value");
        // this.state.todos[i] = update_item;
        // this.setState({
        //     todos: this.state.todos
        // });

        this.state.todos[index].edit = true;
        this.setState({
            todos: this.state.todos

        })
    }

    handleChange = (e, index) => {
        console.log(e.target.value, index)
        this.state.todos[index].title = e.target.value
        this.setState({
            todos: this.state.todos
        })
    }
    update = (item, index) => {
        this.state.todos[index].edit = false;
        this.setState({
            todos: this.state.todos

        })
    }
    render() {
        let { todos, value } = this.state;

        return (
            <div>
                <header>
                    <input type="text" value={value} onChange={(e) => this.setState({ value: e.target.value })} />
                    <button onClick={this.addTodo}>Add Todo</button>
                    <br />
                    <button onClick={this.removeAll}>remove All</button>
                </header>
                <div>
                    <ul>
                        {todos.map((todo, i) => {
                            return <li key={i}>
                                {todo.edit ? <input value={todo.title} type="text" onChange={(e) => this.handleChange(e, i)} /> : todo.title}

                                {todo.edit ?
                                    <button onClick={() => this.update(todo.title, i)}>Update</button>
                                    :
                                    <button onClick={() => this.edit_item(todo.title, i)}>Edit</button>
                                }
                                <button onClick={() => this.remove(i)}>Remove</button>

                            </li>
                        })}

                    </ul>

                </div>
            </div>
        )
    }
}
export default Todo;