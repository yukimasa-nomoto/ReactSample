import React from 'react'
import Child from "./Child"

function Parent(){
    const[num , setNum] = React.useState(0)

    const handleClick = () => setNum(num+1)

    console.log('Parent Start')
    console.log(num)

    return(
        <div>
            <h1>Parent</h1>
            <p><button onClick={handleClick}>{num}</button></p>
            <p><Child num={num} /></p>
            <p><Child num={num} /></p>        
        </div>
    )
}

export default Parent