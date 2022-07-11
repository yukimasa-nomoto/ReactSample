import React from 'react'

function Child({num}){
    const[myNum , setMyNum] = React.useState(0)

    const handleClick = () => setMyNum(myNum+1)

    console.log('Child Start')
    console.log(num)

    return(
        <div>
            <button onClick={handleClick}>
                {num + myNum}
            </button>
        </div>
    )
}

export default Child
