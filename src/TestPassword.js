import React from 'react'

function TestPassword(){
    const[myWatchSelected , setMyWatchSelected] = React.useState(false)
    const[myText , setMyText] = React.useState('')

    const handleWatchSelected = e => {
        setMyWatchSelected(!myWatchSelected)
    }
    const handleTextChange = e => {
        if(myWatchSelected === true)
        {

        }
        else{
            setMyText(e.target.value)
        }
    }

    const getButtonText = () => {
        if(myWatchSelected === true)
        {
            return '隠す'
        }
        else
        {
            return '見る'
        }
    }

    const getText = () => {
        if(myWatchSelected === true)
        {
            return myText;
        }
        else{
            return '***'
        }
    }

    return(
        <div>
            <h1>TestPassword</h1>
            <p>パスワード</p>
            <input type="text"
                value={getText()}
                onChange={handleTextChange}
            />
            <button onClick={handleWatchSelected}>{getButtonText()}</button>
            <p>文字数：{myText.length}</p>
        </div>
    )
}

export default TestPassword
