import React from 'react'

const API = 'https://randomuser.me/api/?results=5&nat=us&inc=gender,name,email';

function TestDummyUser(){
    const[users, setUsers] = React.useState(null)

    React.useEffect(
        () => {
            /*
            fetch(API)
                .then(res => res.json())
                .then(json => setUser(json))
            */

            /*
            async function fetchUser(){
                const response = await fetch(API)
                .then(res => res.json())

                setUser(response)
            }
            fetchUser()
            */
            //即時実行関数
            (async function(){
                const response = await fetch(API)
                .then(res => res.json())

                setUsers(response.results)
            }

            )()
        }
        ,[]
    )

    console.log(users)

    return(
        users?
        <>
            <h1>TestDummyUser</h1>
            {
                users.map(user => (
                    <div>
                        <h1> {user.gender} </h1>
                        <h2> {user.name.first}</h2>
                    </div>
                ))
            }
        </>
        :''
    )
}

export default TestDummyUser