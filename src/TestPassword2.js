import React from 'react'

function Password({onChange,value}){

    const getButtonText = () => {
        if(myType === 'password')
        {
            return '見る'
        }
        else
        {
            return '隠す'
        }
    }

   const[myType , setMyType] = React.useState('password')

   const handleMyType = () => {
    if(myType === 'password'){
        setMyType('text');
    }else{
        setMyType('password')
    }
    
   }


    return(
        <div>
            <input type={myType}
                value={value}
                onChange={(e) => onChange(e)}
            />
            <button onClick={handleMyType}>
                {getButtonText()}
            </button>  

            <p>
                {myType === 'password' ? '見る' : '隠す'}    
            </p> 
        </div>
    )
}



function TestPassword2(){
    const[myText , setMyText] = React.useState('')

    const handleMyText = e => setMyText(e.target.value)

    return(
        <div>
            <h1>TestPassword2</h1>
            <p>パスワード</p>
            <Password onChange={handleMyText} value={myText}/>
            <p>文字数：{myText.length}</p>
        </div>
    )
}

export default TestPassword2