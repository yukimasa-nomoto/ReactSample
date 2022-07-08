import React from 'react';
class TodoElement extends React.Component{

    onDelete(){
        this.props.onDelete(this.props.id)
    }

    render(){

        //console.log("render in TodoElement")
        //console.log({...this.props})
        //console.log(this.props.id)

        return(
            <li key={this.props.id}>
                {this.props.content}
                <button onClick={() => this.onDelete()}>削除</button>
            </li>
        )
    }
}

export default TodoElement
/*
const TodoElement = (props) =>{
    return(
        <li>
            {props.content}
        </li>
    )
}
*/