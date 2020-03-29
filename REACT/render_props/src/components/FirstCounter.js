import React from 'react';
import Counter from './Counter';

const FirstCounter = () => {
    return (
        <Counter
            initialValue={5}
            render={({ count, increment }) => (
                <>
                    <h2>The count is currently {count}!</h2>
                    <button onClick={increment}>Add One</button>
                </>
            )}
        />
    )
}

export default FirstCounter;