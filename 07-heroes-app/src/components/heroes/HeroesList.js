import { HeroesCard } from "./HeroesCard";
import { getHeroesByPublisher } from "../../helpers/getHeroesByPublisher";

export const HeroesList = ({publisher}) => {
    
    const heroes = getHeroesByPublisher(publisher);

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                    heroes.map(hero => (
                        <HeroesCard key={hero.id} {...hero}/>
                    ))
            }
        </div>
    );
};
