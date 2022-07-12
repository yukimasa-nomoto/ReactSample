import React from 'react'
const getKey = () => Math.random().toString(32).substring(2);

function Input({onAdd})
{
    const[text , setText] = React.useState('')
    const handleChange = e => setText(e.target.value)
    const handleKeyDown = e => {
        if (e.key === 'Enter') {
          onAdd(text);
          setText('');
        }
      };

    return(
        <div className="panel-block">
            <input
                class="input"
                type="text"
                placeholder="Enter to add"
                value={text}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
        </div>
    )
}

function TodoItem({item , onCheck}){

    const handleChange = () => {
        onCheck(item)
    }

    return (
        <label className="panel-block">
          <input type="checkbox" checked={item.done} onChange={handleChange}/>
          <span className={item.done ? 'has-text-grey-light' : ''}>{item.text}</span>
        </label>
      );
}

function Filter({value , onChange}){

    const handleClick = (key , e) =>{
        e.preventDefault()
        onChange(key)
    }

    return(

        <div className="panel-tabs">
            <a href="#"
                onClick={handleClick.bind(null, 'ALL')}
                className={value === 'ALL' ? 'is-active' : ''}
            >All</a>
            <a
                href="#"
                onClick={handleClick.bind(null, 'TODO')}
                className={value === 'TODO' ? 'is-active' : ''}
            >ToDo</a>
            <a
                href="#"
                onClick={handleClick.bind(null, 'DONE')}
                className={value === 'DONE' ? 'is-active' : ''}
            >Done</a>
        </div>    
    )
}

function MyTodo(){
    const[items , setItems] = React.useState([
        { key: getKey(), text: 'Learn JavaScript', done: false },
        { key: getKey(), text: 'Learn React', done: false },
        { key: getKey(), text: 'Get some good sleep', done: false },
    ])

    const[filter , setFilter] = React.useState('ALL')

    //
    const handleCheck = (checked) => {
        const newItems = items.map(item => {
            if(item.key === checked.key){
                item.done = !item.done
            }
            return item
        })

        setItems(newItems)
    }

    const handleAdd = (text) => {
        setItems([...items,{key: getKey(), text: text, done: false}])
    }

    const handleChange = (text) => {
        setFilter(text)
    }

    const displayItems = items.filter(item => {
        if (filter === 'ALL') return true;
        if (filter === 'TODO') return !item.done;
        if (filter === 'DONE') return item.done;
      });

    return(
        <div className="panel">
            <div className="panel-heading">
                ⚛️ React ToDo
            </div>
            <Input onAdd={handleAdd}/>
            <Filter onChange={handleChange} value={filter}/>
            {displayItems.map(item => (
                <TodoItem key={item.key} item={item} onCheck={handleCheck}/>
            ))}
            <div className="panel-block">
                {displayItems.length} items
            </div>
        </div>    
    )
}

export default MyTodo