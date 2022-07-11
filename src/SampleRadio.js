import React from 'react'

function SampleRadio(){

    const[myBool , setMyBool] = React.useState('dog')

    const handleChange = e => setMyBool(e.target.value)

    return(
        <div>
            <h1>SampleRadio</h1>
            <label>
                <input type="radio"
                    value="cat"
                    onChange={handleChange}
                    checked={myBool === 'cat'}
                />
                猫派
            </label>
            <label>
            <input type="radio"
                    value="dog"
                    onChange={handleChange}
                    checked={myBool === 'dog'}
                />
                犬派
            </label>
            <p>選択値:{myBool}</p>
        </div>
    )
}

export default SampleRadio