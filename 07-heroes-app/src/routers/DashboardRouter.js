import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { DCScreen } from '../components/dc/DCScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { Navbar } from '../components/ui/NavBar'
import { SearchScreen } from '../components/search/SearchScreen'
import { HeroesScreen } from '../components/heroes/HeroesScreen'

export const DashboardRouter = () => {
    return (
        <>
            <Navbar/>
            <div className='container'>
                <Routes>
                    <Route path="marvel" element={<MarvelScreen />} />
                    <Route path="dc" element={<DCScreen />} />

                    <Route path="search" element={<SearchScreen />} />
                    <Route path="heroe/:heroeId" element={<HeroesScreen />} />

                    <Route path="/" element={<MarvelScreen />} />
                </Routes>
            </div>
        </>
    )
}
