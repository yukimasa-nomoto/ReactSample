import React from 'react'

const random = (max) => {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
  };

function Guess({onjudge}){

    const[text , setText] = React.useState('')

    const handleText = (e) => {setText(e.target.value)}

    const handleGuess =() => {

        onjudge(text * 1)   //数値化
    }

    return(
        <div>
            <h1>Guess</h1>
            <input type="text" value={text} onChange={(e) => handleText(e)} />
            <button onClick={handleGuess}>予想する</button>
        </div>
    )
}

function TestGuess(){
    const max = 50;
    const initialCount = 5;
    const [answer, setAnswer] = React.useState(random(max));
    const [count, setCount] = React.useState(initialCount);
    const [message, setMessage] = React.useState('');

    console.log(answer)
    
    const judge = num => {
        if (count === 0) return;
    
        setCount(count - 1);
    
        if (num === answer) {
          setMessage('正解です！');
        } else if (count === 1) {
          setMessage('残念でした！ 正解は' + answer);
        } else if (num > answer) {
          setMessage('もっと小さいです');
        } else if (num < answer) {
          setMessage('もっと大きいです');
        }
      };

    const replay = () => {
        setAnswer(random(max));
        setCount(initialCount);
        setMessage('');
      };


    return(

        <div>
            <h1>TestGuess</h1>

            <Guess onjudge={judge}/>
            {message !== '' ? message : ''}
            <p>あと{count}回</p>
            <button onClick={replay}>初めから</button>
        </div>
    )
}

export default TestGuess