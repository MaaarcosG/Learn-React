import React from 'react'
import { useCounter } from '../../Hooks/useCounter'
import { UseFetch } from '../../Hooks/UseFetch'
import '../02-useEffect/effect.css'

export const MulitpleCustomHook = () => {
    /* importacion de custom hooks */
    const {counter, increment} = useCounter(1);
    const {loading, data} = UseFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {author, quote} = !!data && data[0];

    return (
    <div>
        <h1>Breaking Bad Quotes</h1>
        <hr/>

        {
            loading 
            ? 
                (
                    <div className='alert alert-info text-center'>
                        loading...
                    </div>
                )
            :
                (
                    <blockquote className='blockquote text-end'>
                        <p className='mb-3'>{quote}</p>
                        <footer className='blockquote-footer'>{author}</footer>
                    </blockquote>
                )
        }

        <button className='btn btn-primary' onClick={increment}>Siguiente Frase</button>
    </div>
  )
}
