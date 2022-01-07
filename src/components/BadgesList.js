import React, {Component, useMemo, useState} from 'react';
import {Link} from 'react-router-dom';

//Component
import Gravatar from './Gravatar';
//Css
import './styles/BadgesList.css'


class BadgesListItem extends Component{
    render(){
        const {    
            badge
        } = this.props;
        console.log(this.props, "BadgeListItem");
        return(
            <div className="BadgesListItem">
                <Gravatar  
                        className= 'Badge__avatar'
                        email= {badge.email}
                    />     
                <div>
                    <strong>
                        {badge.firstName} {badge.lastName} 
                    </strong>
                    <br /> 
                    @{badge.twitter}
                    <br />
                    {badge.jobTitle}
                </div>
            </div>
        );
    }
}

function useSearchBadges(badges){ //Custom Hooks
    const [query, setQuery] = useState('');
    const [filteredBadges, setFilteredBadges] = useState(badges);

    useMemo(()=> {
        const result = badges.filter(badge => {
        return `${badge.firstName} ${badge.lastName}`
            .toLowerCase()
            .includes(query.toLowerCase());
        });

        setFilteredBadges(result);
    }, [badges, query]);

    return [ query, setQuery, filteredBadges];
}

function BadgesList(props) {    
    const {badges} = props;
    const [query,setQuery, filteredBadges] = useSearchBadges(badges);
   
    console.log(filteredBadges);

    console.log(props, "BadgeList");

    if(filteredBadges.length === 0){
        return (
            <div>
                <div className="form-group mb-4">
                    <label >Filter Badges</label>
                    <input 
                        type="text" 
                        className='form-control' 
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                        }}
                    />
                </div>
                <h3> No badges were found</h3>
                <Link className="btn btn-primary" to= "/badges/new">
                    Create New Badge
                </Link>
            </div>
        );
    }
    
    return(
        <div className="BadgesList">
            <div className="form-group mb-4">
                <label >Filter Badges</label>
                <input 
                    type="text" 
                    className='form-control' 
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                    }}
                />
            </div>

            <ul className="list-unstyled">
                {filteredBadges.map((badge)=> {
                    return(
                        <li key={badge.id}>
                            <Link className='text-reset text-decoration-none' 
                                to={`/badges/${badge.id}`}>
                                <BadgesListItem badge={badge} />
                            </Link>
                        </li>
                    ) 
                })}
            </ul>
        </div>
    );
    
}


export default BadgesList;





   /* <img
        className='BadgesListItem__avatar' 
        src={badge.avatarUrl} 
        alt={`${badge.firstName} ${badge.lastName}`} />
        */