import React from 'react';
import Counter from './Counter';

const SecondCounter = () => {
    return (
        <Counter
            initialValue={10}
            render={({ count, increment, decrement }) => (
                <>
                    <button onClick={increment}>Increment</button>
                    <button onClick={decrement}>Decrement</button>
                    <p>Current count: {count}</p>
                </>
            )}
        />
    )
}

export default SecondCounter;