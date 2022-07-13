import React from 'react'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import Input from '@mui/material/Input';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles(() =>({
    root:{
    '& > *': {
        
        },       
    },
}))

function SampleUseEffect () {
    const classes = useStyles();
    const[count,setCount] = React.useState(0)
    const[name,setName] = React.useState({
        lastName:'',
        firstName:''
    })

    React.useEffect(() =>{
        document.title = `${count}回クリックされました`
    },[count])

    return(
        <>
            <h1>SampleUseEffect</h1>
            <p>{count}回クリックされました</p>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button onClick={()=>setCount((prev) => prev + 1)}>
                ボタン
                </Button>
                <Button onClick={()=>setCount(0)}>
                リセット
                </Button>
            </ButtonGroup>
            <p>{`私の名前は${name.lastName} ${name.firstName}です`}</p>
            <form className={classes.root} noValidate autoComplete="off">
                <Input
                placeholder="姓"
                value={name.lastName}
                onChange={(e)=>{setName({...name,lastName: e.target.value})}}/>
                <Input
                placeholder="名"
                value={name.firstName}
                onChange={(e)=>{setName({...name,firstName: e.target.value})}}/>
            </form>
        </>
    )
}

export default SampleUseEffect