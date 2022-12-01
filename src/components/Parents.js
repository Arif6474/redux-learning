import React, { useState } from 'react';
import Child from './Child';

const Parents = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h2>{count}</h2>
            <Child count={count} setCount={setCount}/>
        </div>
    );
};

export default Parents;