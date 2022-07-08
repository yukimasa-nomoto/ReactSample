import React from 'react'

class AddTodo3 extends React.Component {

    onChange(e){
        //console.log("onChange In AddTodo3")
        //console.log(e.target.value)
        this.props.onChange(
            {value:e.target.value}
        )
    }

    add(){
        console.log("add in AddTodo3")
        const todoElement ={
            content:this.props.value,
            id:this.props.todoList.length+1
        }
        console.log(todoElement)
        this.props.add(todoElement)
    }

    render()
    {
        return(
            <div>
                <input
                    type="text"
                    value={this.props.value}
                    onChange={e=>this.onChange(e)}
                />
                <button onClick={()=>this.add()}>追加</button>
            </div>
        )
    }
}

export default AddTodo3