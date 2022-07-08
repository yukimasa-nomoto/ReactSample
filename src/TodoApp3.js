import React from 'react'
import AddTodo3 from './AddTodo3'
import TodoElement from './TodoElement'

class TodoApp3 extends React.Component
{
    constructor(){
        super()
        this.state = {
            todoList:[],
            value:""
        }
    }

    handleDelete(id){
        let todoList = this.state.todoList.concat()
        let index = 0

        todoList.forEach((element , idx) => {
            if (element.id === id) {
                index = idx
              }
        });
        todoList.splice(index, 1)
        this.setState({todoList: todoList})
    }

    onChange(key_value){
        //console.log("onChange In TodoApp3")
        //console.log(key_value)

        //this.setState({value:key_value})
        this.setState(key_value)
    }

    add(todoElement){
       //console.log("add In TodoApp3") 
       //console.log(todoElement)

       this.setState({
        todoList: this.state.todoList.concat(todoElement),
        value:""
        })
        //ここでは入ったのは見れなかった
        //console.log({...this.state})
    }

    render(){
        const todoListNode = this.state.todoList.map(element =>{

            //console.log("element in map")
            //console.log(element.id)
            //console.log(element.content)
            return(
                <TodoElement
                    id={element.id}
                    content={element.content}
                    onDelete={(id) => this.handleDelete(id)}
                />
            )
        })

        //console.log("render")
        //console.log({...this.state})
        return(
            <div>
                <h1>ToDo App3</h1>
                <AddTodo3
                    {...this.state}
                    onChange={e=>this.onChange(e)}
                    add={e=>this.add(e)}
                />
                <ul>
                    {todoListNode}
                </ul>
            </div>
        )
    }
}

export default TodoApp3