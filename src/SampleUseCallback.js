import React from 'react'

const Title = React.memo( () => {
    console.log('Title Component')
    return(
        <>
            <h2>Callback Test Title</h2>
        </>
    )
})

const Count = React.memo( ({text,countState}) =>{
    console.log('Count child component')
    return(
        <>
            <p>{text}:{countState}</p>
        </>
    )
})

const Button = React.memo(({handleClick,value}) =>{
    console.log('Button child component')
    return <button type="button" onClick={handleClick}>{value}</button>
})

function SampleUseCallback(){

    const[firstCountState,setFirstCountState] = React.useState(0)
    const[secondCountState,setSecondCountState] = React.useState(10)

    const incrementFirstCounter = React.useCallback(() =>
        setFirstCountState(firstCountState + 1)
        ,[firstCountState]
    )

    const incrementSecondCounter = React.useCallback(() =>
        setSecondCountState(secondCountState + 10)
        ,[secondCountState]
    )

    return(
        <>
            <Title />
            <Count text="+1 ボタン" countState={firstCountState} />
            <Count text="+10 ボタン" countState={secondCountState} />
            <Button handleClick={incrementFirstCounter} value={'+1 ボタン'}/>
            <Button handleClick={incrementSecondCounter} value={'+10 ボタン'}/>
        </>
    )
}

export default SampleUseCallback