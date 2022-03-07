/* racf para mayor facilidad */
import React, {useState} from "react";
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {
    const [counter, setCounter] = useState(value);

    // Funciones
    const handleAdd = () => {
       setCounter(counter+1);
       //setCounter((c) => c + 1);
    }; 

    const handleReset = () => setCounter(value);

    const handleSubstract = () => setCounter(counter-1);

    return(
        <div>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>

            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSubstract}>-1</button>
        </div>
    )
};

CounterApp.propTypes = {
    saludo: PropTypes.number
}

export default CounterApp;