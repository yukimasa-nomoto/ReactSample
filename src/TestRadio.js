import React from 'react'

const options = [
    { value: 'js', label: 'JavaScript' },
    { value: 'py', label: 'Python' },
    { value: 'rb', label: 'Ruby' },
    { value: '', label: 'その他' },
  ]


function TestRadio(){
    const[myRadio , setMyRadio] = React.useState('js')
    const[myText , setMyText] = React.useState('')

    const handleRadioChange = e => setMyRadio(e.target.value)
    const handleTextChange = e => setMyText(e.target.value)

    const getAnswer = () => {
        return myRadio === ''
        ? myText
        : options.find(o => o.value === myRadio).label;     
    }

    return(
        <div>
            <p>好きなプログラミング言語を教えてください。</p>
            {options.map(option => (
                <label key={option.value}>
                    <input type="radio"
                        value={option.value}
                        onChange={handleRadioChange}
                        checked={myRadio === option.value}
                    />
                    {option.label}
                </label>
            ))

            }

        {myRadio === '' && (
            <p>
            自由記入：<input value={myText} onChange={handleTextChange} />
            </p>
        )}
        <hr />
        <p>回答：{getAnswer()}</p>
        </div>
    )
}

export default TestRadio