import React from 'react'
import ContextA from './ContextSample/ContextA'

export const UserContext = React.createContext()
export const HobbyContext = React.createContext()

function SampleUseContext(){

    const[user,setUser] = React.useState({
        name:'test',
        age:49
    })

    const[hobby,setHobby] = React.useState('Camp')

    return(
        <div className='App'>
            <h1>SampleUseContext</h1>
            <UserContext.Provider value={user}>
                <HobbyContext.Provider value={hobby}>
                    <ContextA />
                </HobbyContext.Provider>
            </UserContext.Provider>
        </div>
    )
}

export default SampleUseContext