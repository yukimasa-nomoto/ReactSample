import React from 'react'
import './gamestyle.css'

function Square(props){
    //const[myValue,setMyValue]=React.useState(value)

    return(
        <button className='square' onClick={props.onClick}>{props.value}</button>
    )
}

function Board({squares , onClick}){
    
    const renderSquare = (i) => {
        return(
            <Square 
                value={squares[i]}
                onClick={() => onClick(i)}
            />
        )
    }


    return(
        <div>
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
    const[stepNumber , setStepNumber]=React.useState(0)

    const moves = myHistory.map((step,move)=>{
        const desc = move ? 'Go to move #' + move : 'Go to game start';
        return(
            <li key={move}>
                <button
                    onClick={() =>{
                        //console.log('move')
                        //console.log(move)

                        //console.log('step')
                        //console.log(step)

                        setStepNumber(move)
                        setXIsNext(move%2 === 0)
                    }}
                >
                    {desc}
                </button>
            </li>
            
        )
    })

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

    const current = myHistory[stepNumber]
    const winner = calculateWinner(current.squares)

    let status = 'Next palayer: ' + (xIsNext? '✕' : '◯')
    if(winner) {
        status = "勝者：" + winner
    }

    return(
        <div className="game">
            <div className="gmae-board">
            <Board  squares={current.squares} 
                onClick={i =>{
                    //console.log('click')

                    //console.log("current.squares")
                    //console.log(current.squares)

                    const copySquares = [...current.squares]
                    //console.log("copySquares")
                    //console.log(copySquares)

                    if(calculateWinner(copySquares) || copySquares[i]){
                        return;
                    }

                    copySquares[i] = xIsNext? '✕' : '◯'

                    //console.log("myHistory")
                    //console.log(myHistory)

                    const newHistory = myHistory.slice(0, stepNumber + 1);
                    const copyHistory =
                        newHistory.concat({squares:copySquares})
                    
                    //console.log("copyHistory")
                    //console.log(copyHistory)
                    setMyHistory(copyHistory)
                    setXIsNext(!xIsNext)
                    setStepNumber(newHistory.length)
                }}
            />
            </div>
            <div className="game-info">
            <div className="status">{status}</div>
            <div>{moves}</div>
            </div>
        </div>    
    )
}

export default TestGame2