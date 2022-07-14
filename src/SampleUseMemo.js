import React from 'react'

function SampleUseMemo() {

    const[count01,setCount01] = React.useState(0)
    const[count02,setCount02] = React.useState(0)

    const result01 = () => setCount01(count01+1)
    const result02 = () => setCount02(count02+1)

    /*
    const square = React.useMemo(() => {
        let i = 0
        while (i < 2) i++
        return count02 * count02
      }, [count02])
    */



    const square = React.useMemo(() => {
        let i = 0
        while (i < 2000000000) i++
        return count02 * count02
    },[count02])

    return(
        <>
            <h1>aaa</h1>
            <div>result01: {count01}</div>
            <div>result02: {count02}</div>
            {/*<div>square: {square()}</div>*/}
            <div>square: {square}</div>
            <button onClick={result01}>increment</button>
            <button onClick={result02}>increment</button>
        </>
    )
}

export default SampleUseMemo