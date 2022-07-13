import React from 'react'
import './style.css'

function SampleUseState(){
    const initialState = Math.floor(Math.random() * 10) + 1

    const[count,setCount] = React.useState(initialState)
    const[open,setOpen] = React.useState(true)

    const toggle = () => setOpen(!open)

    return(
        <>
            <h1>SampleUseState</h1>
            <button onClick={() => toggle()}>{open?'close':'open'}</button>
            <div className={open?'isOpen':'isClose'}>
                <p>現在の数字は{count}です</p>
                <button onClick={() => setCount(p => p+1)}>+1</button>
                <button onClick={() => setCount(count-1)}>-1</button>
                <button onClick={() => setCount(0)}>0</button>
                <button onClick={() => setCount(initialState)}>最初の値に戻す</button>
            </div>
        </>
    )
}

export default SampleUseState