import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../Hooks/useCounter'
import { UseFetch } from '../../Hooks/UseFetch'

import './layout.css'

export const LayoutEffect = () => {
    /* importacion de custom hooks */
    const {counter, increment} = useCounter(1);
    const {data} = UseFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {quote} = !!data && data[0];

    const pTag = useRef();
    /* Guardar los tamanos */
    const [boxSize, setboxSize] = useState({});

    useLayoutEffect(() => {
     setboxSize(pTag.current.getBoundingClientRect());
    }, [quote])

    return (
    <div>
        <h1>Layout Effect</h1>
        <hr/>

        <blockquote className='blockquote text-end'>
            <p className='mb-3' ref={pTag}>{quote}</p>
        </blockquote>
            
        <pre>{JSON.stringify(boxSize, null, 3)}</pre>
        <button className='btn btn-primary' onClick={increment}>Siguiente Frase</button>
    </div>
  )
}
