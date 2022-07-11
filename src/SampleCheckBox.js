import React from 'react'

function SampleCheckBox(){
    const[myVal , setMyVal] = React.useState(['js'])

    const handleChange = e =>{
        if(myVal.includes(e.target.value)){
            let r = myVal.filter(v => v !== e.target.value)
            setMyVal(r)
        }else{
            let r = [...myVal , e.target.value]
            console.log('false')
            console.log(r)
            setMyVal(r)
        }
    }

    return(
        <div>
            <h1>SampleCheckBox</h1>
            <label>
                <input type="checkbox"
                value="js"
                onChange={handleChange}
                checked={myVal.includes('js')}
                />
                JavaScript
            </label>
            <label>
            <input type="checkbox"
                value="python"
                onChange={handleChange}
                checked={myVal.includes('python')}
                />
                Python
            </label>
            <label>
            <input type="checkbox"
                value="java"
                onChange={handleChange}
                checked={myVal.includes('java')}
                />
                Java
            </label>
            <p>選択値:{myVal}</p>
        </div>
    )
}

export default SampleCheckBox