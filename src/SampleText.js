import React from 'react'
function SampleText(){
    const[myText , setMyText] = React.useState("start")

    const handleChange = (e) => setMyText(e.target.value)

    return(
        <div>
            <h1>Hello ,{myText}</h1>
            <input type="text"
                 value={myText} onChange={(e) => handleChange(e)}
            />
        </div>
    )
}

export default SampleText