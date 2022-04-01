import React, { useState } from 'react';
import '../02-useEffect/effect.css';
import { MulitpleCustomHook } from '../03-example/MulitpleCustomHook';

export const RealExample = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>Real Example</h1>
            <hr/>
            {show && <MulitpleCustomHook/>}

            <button 
                className='btn btn-primary mt-5' 
                onClick={() => {
                    setShow(!show);
                }}
            >
                Show/Hidde
            </button>
        </div>
  )
}
