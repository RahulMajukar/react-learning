import React, { useState, useEffect, useLayoutEffect } from 'react';

const UseEffectLayoutExample = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('useEffect - After render');
    }, [count]);

    useLayoutEffect(() => {
        console.log('useLayoutEffect - Before render');
    }, [count]);

    return (
        <div>
            <h1>useEffect vs useLayoutEffect</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default UseEffectLayoutExample;
