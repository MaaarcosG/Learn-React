import React from 'react'

/* Switch fue cambiado por Routes, pero por fines practicos lo renombraremos a Switch */
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
    Navigate
} from "react-router-dom";

/* Componentes creados por nosotros mismos */
import { NavBar } from './NavBar';
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar/>
                <div className='container'>
                    <Switch>
                        <Route path='/' element={<HomeScreen/>}/>
                        <Route path='/about' element={<AboutScreen/>}/>
                        <Route path='/login' element={<LoginScreen/>}/>
                        {/* Si no encuentra ningun path */}
                        <Route path='*' element={<Navigate replace to='/'/>}/>
                    </Switch>
                </div>
            </div>
        </Router>
    );
};
