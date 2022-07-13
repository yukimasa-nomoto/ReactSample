import React from 'react'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'

const initialState = 0

const reducerFunc = (countState , action) =>{
    switch (action){
        case 'increment':
          return countState + 1
        case 'decrement':
          return countState - 1
        case 'reset':
          return initialState
        default:
          return countState
      }
}

function SampleUseReducer(){

    const[count , dispatch] = React.useReducer(reducerFunc, initialState)

    return(
        <>
            <h1>SampleUseReducer</h1>
            <h2>カウント：{count}</h2>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button onClick={()=>dispatch('increment')}>increment</Button>
                <Button onClick={()=>dispatch('decrement')}>decrement</Button>
                <Button onClick={()=>dispatch('reset')}>reset</Button>
            </ButtonGroup>
        </>
    )
}

export default SampleUseReducer