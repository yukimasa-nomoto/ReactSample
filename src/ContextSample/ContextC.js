import React from 'react'
import {UserContext , HobbyContext} from '../SampleUseContext'

function ContextC(){
    const user = React.useContext(UserContext)
    const hobby = React.useContext(HobbyContext)
    return (
        <p>{user.name}{user.age}歳: 趣味は{hobby}です。</p>
    )
}

export default ContextC