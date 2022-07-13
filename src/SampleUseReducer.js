import React from 'react'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'

const initialState = {
    firstCounter: 0,
    secondCounter:100
}

const reducerFunc = (countState , action) =>{
    switch(action.type){
        case 'increment1':
            return {...countState,firstCounter:countState.firstCounter + action.value}
        case 'decrement1':
            return {...countState,firstCounter:countState.firstCounter - action.value}
        case 'increment2':
            return {...countState,secondCounter:countState.secondCounter + action.value}
        case 'decrement2':
            return {...countState,secondCounter:countState.secondCounter - action.value}
        case 'reset1':
            return {...countState,firstCounter:initialState.firstCounter}
        case 'reset2':
            return {...countState,secondCounter:initialState.secondCounter}
        default:
            return countState
    }
}

function SampleUseReducer(){

    const[count , dispatch] = React.useReducer(reducerFunc, initialState)

    return(
        <>
            <h1>SampleUseReducer</h1>
            <h2>カウント：{count.firstCounter}</h2>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button onClick={()=>dispatch({type:'increment1',value:1})}>increment</Button>
                <Button onClick={()=>dispatch({type:'decrement1',value:1})}>decrement</Button>
                <Button onClick={()=>dispatch({type:'reset1'})}>reset</Button>
            </ButtonGroup>

            <h2>カウント２：{count.secondCounter}</h2>
            <ButtonGroup color="secondary" aria-label="outlined primary button group">
                <Button onClick={()=>dispatch({type:'increment2',value:100})}>increment</Button>
                <Button onClick={()=>dispatch({type:'decrement2',value:100})}>decrement</Button>
                <Button onClick={()=>dispatch({type:'reset2'})}>reset</Button>
            </ButtonGroup>

        </>
    )
}

export default SampleUseReducer