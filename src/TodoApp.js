import React from 'react';
//import TodoElement from './TodoElement';

class TodoApp extends React.Component{
    constructor(){
        super()
        this.state = {
            todoList:[],
            value:""}
    }

    onChange(e){
       this.setState({value:e.target.value}) 
    }

    add(){
        this.setState({
            todoList: this.state.todoList.concat(this.state.value),
            value:""
        })
        console.log(this.state.value);
    }

    render(){
        const todoListNode = this.state.todoList.map((todo , idx) =>{
            return <li key={idx}>{todo}</li>
            /*
            return(
                <TodoElement
                    key={idx}
                    content={todo}
                />
            )
            */
        })

        console.log(todoListNode)
        return(
            <div>
                <h1>TODO App</h1>
                <div>
                    <input
                        type="text"
                        value={this.state.value}
                    />
                </div>
                <button onClick={()=>this.add()}>追加</button>
                <ul>{todoListNode}</ul>
            </div>
        )
    }
}

export default TodoApp;
