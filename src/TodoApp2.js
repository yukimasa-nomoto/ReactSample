import React from 'react'
import AddTodo from './AddTodo'
import TodoElement from './TodoElement'

class TodoApp2 extends React.Component
{
    constructor(){
        super()
        this.state = {
            todoList:[],
            value:""
        }
    }
    onChange(key_value){
        this.setState({key_value})
    }

    add(){
        this.setState({
            todoList: this.state.todoList.concat(this.state.value),
            value:""
        })
    }

    render(){
        const todoListNode = this.state.todoList.map(element =>{
            return(
                <TodoElement
                    key={element.id}
                    content={element.content}
                />
            )
        })


        return(
            <div>
                <h1>ToDo App2</h1>
                <AddTodo
                    {...this.state}
                    onChange={e =>this.onChange(e)}
                    add={() => this.add()}
                />
                <ul>
                    {todoListNode}
                </ul>
            </div>
        
        )
    }
}

export default TodoApp2