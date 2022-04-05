import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/ProcesoPesado';
import { useCounter } from '../../Hooks/useCounter'

import '../02-useEffect/effect.css'

export const MemoHook = () => {

    const {counter, increment} = useCounter(100);
    const [showt, setshowt] = useState(true);

    const memmoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{counter}</small> </h3>
            <hr/>

            <p>{memmoProcesoPesado}</p>
            
            <button className='btn btn-primary' onClick={increment}>+1</button>
            <button className='btn btn-outline-primary ms-3' onClick={
                () => {setshowt(!showt)}
            }> SHOW/HIDDE {JSON.stringify(showt)}</button>
        </div>
    )
}
