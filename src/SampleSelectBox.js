import React from 'react'

function SampleSelectBox(){
    const[myVal , setMyVal] = React.useState('react')

    const handleChange = e => setMyVal(e.target.value)

    return(
        <div>
            <h1>SampleSelectBox</h1>
            <select value={myVal} onChange={handleChange}>
                <option value='react'>React</option>
                <option value='vue'>Vue.js</option>
                <option value='angular'>Angular</option>
            </select>
            <p>選択値:{myVal}</p>
        </div>
    )
}

export default SampleSelectBox