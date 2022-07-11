import React from 'react'

function CountButton(){
    const countState = React.useState(0)

    const count = countState[0]
    const setCount = countState[1]

    const handleClick = () => setCount(count+1)

    return <button onClick={handleClick}>{count}</button>
}

export default CountButton