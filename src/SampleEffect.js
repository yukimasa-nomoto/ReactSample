import React from 'react'


function Children(){
    React.useEffect(
        () => {
            console.log('hello')

            return () => console.log('bye')
        }
        ,[]
    )

    return <p>I am a child.</p>;
}

function SampleEffect(){
    const[num , setNum] = React.useState(0)

    const handleClick = () => setNum(num + 1)

    return(
        <>
            <h1>SampleEffect</h1>
            <button onClick={handleClick}>{num}</button>
            {num % 2 === 0 && <Children />}
        </>
    )
}

export default SampleEffect