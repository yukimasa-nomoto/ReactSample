import React from 'react'

function Tab({onChange}){
    return(
        <ul>
            <li onClick={() => onChange(1)}>React</li>
            <li onClick={() => onChange(2)}>Vue.js</li>
            <li onClick={() => onChange(3)}>Angular</li>
        </ul>
    )

}

function SampleTab(){
    const[myTab , setMyTab] = React.useState(1)

    const handleChange = val => setMyTab(val)

    return(
        <div>
            <h1>SampleTab</h1>

            <Tab onChange={handleChange}/>

            <div hidden={myTab !== 1}>
                No1 Selected
            </div>
            <div hidden={myTab !== 2}>
                No2 Selected
            </div>
            <div hidden={myTab !== 3}>
                No3 Selected
            </div>
        </div>
    )
}

export default SampleTab
