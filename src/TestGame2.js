import React from 'react'
import './gamestyle.css'

function Square(props){
    //const[myValue,setMyValue]=React.useState(value)

    return(
        <button className='square' onClick={props.onClick}>{props.value}</button>
    )
}

function Board({xIsNext , squares , onXIsNext , onFinish , onSquare}){


    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
          ];
          for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
              return squares[a];
            }
          }
          return null;       
    }

    const winner = calculateWinner(squares)
    
    const renderSquare = (i) => {
        return(
            <Square 
                value={squares[i]}
                onClick={() =>{
                    const copySquares = Object.create(squares)

                    if(calculateWinner(copySquares) || copySquares[i]){
                        return;
                    }

                    copySquares[i] = xIsNext? '✕' : '◯'
                    onSquare(copySquares)
                    onXIsNext(!xIsNext)
                }}
            />
        )
    }

    let status = 'Next palayer: ' + (xIsNext? '✕' : '◯')
    if(winner) {
        status = "勝者：" + winner

        onFinish()
    }

    return(
        <div>
            <div className="status">
                {status}
            </div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}

function TestGame2(){
    const[xIsNext,setXIsNext] = React.useState(true)
    const[myHistory,setMyHistory]=React.useState([{squares:Array(9).fill(null)}])

    const handleNext = (result) =>{
        setXIsNext(result)
    }

    const handleFinish = () => {
        console.log('finish')
    }

    const handleSquares = (his) => {
        setMyHistory([his])
    }

    const current = myHistory[myHistory.length-1]

    return(
        <div className="game">
            <div className="gmae-board">
            <Board xIsNext = {xIsNext} squares={current}
                onXIsNext={handleNext} onSquare={handleSquares} onFinish={handleFinish}/>
            </div>
            <div className="game-info">
            <div>{/* status */}</div>
            <div>{/* TODO */}</div>
            </div>
        </div>    
    )
}

export default TestGame2