import React, {useEffect, useState} from 'react';

const Main = () => {
    const [state,  setState] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setState(data))
    }, [])
    return (
        <div>
            <ul>
                {
                    state.map(i => <li>{i.name}</li>)
                }
            </ul>
        </div>
    )
}

export default Main