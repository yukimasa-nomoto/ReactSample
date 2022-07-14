import React from 'react'

const SampleUseRef = () => {

    const inputEl = React.useRef(null)
    const[text,setText] = React.useState("")

    const handleClick = () => {
        //inputEl.current.focus()
        //console.log("inputEl.current:",inputEl.current)
        setText(inputEl.current.value)
    }
    console.log('レンダリング！！！')

    return(
        <>
            <h1>SampleUseRef</h1>
            <input ref={inputEl} type="text"/>
            <button onClick={handleClick}>set Text</button>
            <p>テキスト：{text}</p>
        </>
    )
}

export default SampleUseRef