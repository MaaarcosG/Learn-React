import React, { useCallback, useEffect, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

import '../02-useEffect/effect.css'

export const CallBack = () => {

    const [counter, setCounter] = useState(10);

    /* useCallBack */
    const increment = useCallback( (num) => {
        setCounter(c => c+num);
      }, [setCounter],
    );

    useEffect(() => {
      // renderizar unicamente una vez
    }, [increment])
    

    return (
        <div>
            <h1>CallBack Hook: {counter}</h1>  
            <hr/>
            
            <ShowIncrement increment={increment}/>
        </div>
    );
};
