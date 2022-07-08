import React from 'react';
class TodoElement extends React.Component{
    render(){

        //console.log("render in TodoElement")
        //console.log({...this.props})
        //console.log(this.props.id)

        return(
            <li key={this.props.id}>
                {this.props.content}
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