import { React, useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Current Count: {count}</p>
            <button style={{ backgroundColor: 'navy', padding: '10px', margin: '10px' }} onClick={() => setCount(count + 1)}>Increment</button>
            <button style={{ backgroundColor: 'navy', padding: '10px', margin: '10px' }} onClick={() => setCount(count - 1)}>Decrement</button>
            <button style={{ backgroundColor: 'navy', padding: '10px', margin: '10px' }} onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}

export default Counter