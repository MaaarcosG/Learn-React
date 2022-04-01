import React, { useRef } from 'react'
import '../02-useEffect/effect.css'

export const FocusScreen = () => {

    const inputRef = useRef();
    
    const handleClick = () => {
        inputRef.current.select();
    };

    return (
    <div>
        <h1>FocusScreen</h1>
        <hr/>
        <input
            ref={inputRef}
            className='form-control'
            placeholder='Nombre'    
        />
        <button 
            className='btn btn-outline-primary mt-3'
            onClick={handleClick}
        >
            Focus
        </button>
    </div>
  )
}
