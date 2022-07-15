import React from 'react'
import './gamestyle.css'

const initialBoard = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

function Square({position , onClick , myValue}){

    const[myPosition , setMyPosition] = React.useState(position)
    let dispData = ""
    if(myValue === 1) dispData = '◯'
    if(myValue === 2) dispData = '✕'

    //console.log('position')
    //console.log(position)

    //console.log('myValue')
    //console.log(myValue)

    return(

        <button className="square" onClick={() => onClick(myPosition)}>
            {dispData}
        </button>
    )
}

function Board() {
    const status = 'Next player: X';

    const[myOrder,setMyOrder]=React.useState(false)
    const[myBoard,setMyBoard]=React.useState(initialBoard)

    const handleClick = (pos) => {

        let writeData = 0
        if(myOrder === false)
        {
            //まる      
            writeData = 1
        }
        else{
            //バツ
            writeData = 2
        }

        let divide = Math.floor(pos / 3)
        //console.log(divide)
        let reminder = pos % 3
        //console.log(reminder)
        let newMyBoard = [...myBoard]
        //console.log(newMyBoard)
        newMyBoard[divide][reminder] = writeData

        //console.log('clicked')
        //console.log(pos)
        //console.log(newMyBoard)

        setMyBoard(newMyBoard)
        setMyOrder(!myOrder)
    }

    const renderSquare = (position , myValue) =>{
        return(
            <Square position={position} onClick={handleClick} myValue={myValue} />
        )
    }
    return(
        <div>
            <div className="status">{status}</div>
            <div className='board-row'>
                {renderSquare(0,myBoard[0][0])}
                {renderSquare(1,myBoard[0][1])}
                {renderSquare(2,myBoard[0][2])}
            </div>
            <div className='board-row'>
                {renderSquare(3,myBoard[1][0])}
                {renderSquare(4,myBoard[1][1])}
                {renderSquare(5,myBoard[1][2])}
            </div>
            <div className='board-row'>
                {renderSquare(6,myBoard[2][0])}
                {renderSquare(7,myBoard[2][1])}
                {renderSquare(8,myBoard[2][2])}
            </div>
        </div>
    )
}

function TestGame(){
    return(
        <div className="game">
             <div className="game-board">
                <Board />
             </div>
             <div className="game-info">
                <div>{/*status */}</div>
                <ol>{/* TODO */}</ol>
             </div>
        </div>
    )
}

export default TestGame