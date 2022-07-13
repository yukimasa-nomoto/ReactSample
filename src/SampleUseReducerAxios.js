import React from 'react'
import axios from 'axios'

const initialSate = {
    isLoading:true,
    isError:'',
    post:{}
}

const dataFetchReducer = (dataState, action) =>{
    switch(action.type){
        case 'FETCH_INIT':
            return{
                isLoading:true,
                post:{},
                isError:''
            }

        case 'FETCH_SUCCESS':
            return{
                isLoading:false,
                post:action.payload,
                isError:''
            }

        case 'FETCH_ERROR':
            return{
                isLoading:false,
                post:{},
                isError:'読み込みに失敗しました'
            }
    
        default:
            return dataState
    }
}

function SampleUseReducerAxios(){

    const[dataState , dispatch] = React.useReducer(dataFetchReducer , initialSate)

    React.useEffect(() => {
        //dispatch({type:'FETCH_INIT'})
        axios
        .get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res =>{
            dispatch({type:'FETCH_SUCCESS',payload:res.data})
        })
        .catch(err => {
            dispatch({type:'FETCH_ERROR'})
        })
    })

    return(
        <div className='App'>
            <h1>SampleUseReducerAxios</h1>
            <h3>{dataState.isLoading?'Loading...':dataState.post.title}</h3>
            <p>{dataState.isError?dataState.isError:null}</p>
        </div>
    )
}

export default SampleUseReducerAxios