import React from 'react'
import CountButton from './CountButton'
class PropsTest extends React.Component{

    render()
    {
        return(
            <div>
                <h1>Hello</h1>
                <h2>{this.props.string}</h2>
                <h3>{this.props.number}</h3>
                <h1>{this.props.bool}</h1>
                <h2>{this.props.array}</h2>
                
                <CountButton />        
            </div>
        )
    }
}

export default PropsTest