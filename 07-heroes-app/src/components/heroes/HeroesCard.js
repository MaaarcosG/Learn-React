import React from 'react'
import './HeroStyle.css';
import {Link} from 'react-router-dom'

export const HeroesCard = ({id, superhero, publisher, alter_ego, first_appearance, characters}) => {

    const imgPath = `${process.env.PUBLIC_URL}/assets/heroes/${id}.jpg`;

    return (
        <Link to={`/heroe/${id}`} className='my-card'>
            <img src={imgPath} className='img img-responsive' alt={superhero}/>
            <div className='profile-name'>{superhero}</div>
            <div className='profile-position'>{alter_ego}</div>
            <div className='profile-overview'>
                <div className='row'>
                    <div className='col-ms-4'>
                        <h3>{publisher}</h3>
                        <p> Primera Aparicion: <br/>{first_appearance}</p>
                        {
                            (alter_ego !== characters)
                            && <p>{characters}</p>
                        }
                    </div>
                </div>
            </div>
        </Link>
        
    );
};
