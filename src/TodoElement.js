import React from 'react';
class TodoElement extends React.Component{
    render(){
        return(
            <li>
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