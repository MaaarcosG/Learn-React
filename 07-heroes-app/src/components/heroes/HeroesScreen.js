import {Navigate, useNavigate, useParams} from 'react-router-dom'

import { getHeroesById } from '../../helpers/getHeroesById';

export const HeroesScreen = () => {

    /* Parametro que tengamos en nuetro router */
    const { heroeId } = useParams();

    const heroe = getHeroesById(heroeId);

    /* navegar para regresar */
    const navegar = useNavigate();

    /* desesctructuracion de la data */
    const {id, superhero, publisher, alter_ego, first_appearance, characters} = heroe;
    const imgPath = `${process.env.PUBLIC_URL}/assets/heroes/${id}.jpg`;

    /* Si no existe el heroe se regresa a la pagina principal */
    if(!heroe){
        return <Navigate to='/'/>
    };

    const handleReturn = () => {
        /* -1 regresa una pagina anterior */
        navegar(-1);
    };

    return (
        <div className='row mt-5'>
            <div className='col-4'>
                <img className='img-thumbnail' src={imgPath} alt={superhero}/>
            </div>
            <div className='col-8'>
                <h3>{superhero}</h3>
                <ul className='list-group'>
                    <li className='list-group-item'>
                        <b>Alter Ego:</b> {alter_ego}
                    </li>
                    <li className='list-group-item'>
                        <b>Publisher:</b> {publisher}
                    </li>
                    <li className='list-group-item'>
                        <b>First Appearance:</b> {first_appearance}
                    </li>
                    <li className='list-group-item'>
                        <b>Characters:</b> {characters}
                    </li>
                </ul>
                <button className='btn btn-outline-info mt-3' onClick={handleReturn}>Regresar</button>
            </div>
        </div>
    )
}
