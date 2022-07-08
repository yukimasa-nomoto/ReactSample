import React from 'react';

class CountApp extends React.Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }

    render(){
        return(
            <div>
                <h1>カウンターApp</h1>
                <p>{this.state.count}</p>
                <div>
                <button onClick={() => this.plus()}>+</button>
                <button onClick={() => this.minus()}>-</button>
                </div>
            </div>
        )
    }

    minus(){
        this.setState({count: this.state.count - 1})
    }

    plus(){
        this.setState({count: this.state.count + 1})
    }
}

export default CountApp;
