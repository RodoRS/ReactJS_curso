import React, { useState } from 'react';
import {Link} from 'react-router-dom'

import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

import confLogo from '../images/platziconf-logo.svg';
import './styles/BadgeDetails.css';


function useIncreaseCount(max){ //CustomHook
    const [count, setCount] = React.useState(0);

    if(count > max){
        setCount(0);
    }    

    return [count, setCount];
}


function BadgeDetails(props){
    const [cuenta, setCuenta] = useState(1);
    const [count, setCount] = useIncreaseCount(4);
    const badge = props.badge;
    //className="container"
    return (
        <div >
            <div className="BadgeDetails__hero">
                <div >
                    <div className='row'>
                        <div className="col-6">
                            <img 
                                className='Badges__conf-logo'
                                src={confLogo} 
                                alt="Logo de la Conferencia" />
                        </div>
                        <div className="col-6 BadgeDetails__hero-attendant-name">
                            <h1>{badge.firstName} {badge.lastName}</h1>
                        </div>
                    </div>
                </div>  
            </div>


            <div className="container">
                <div className="row">
                    <div className="col">
                        <Badge 
                            firsName={badge.firstName}
                            lastName={badge.lastName}
                            twitter={badge.twitter}
                            jobTitle={badge.jobTitle}
                            email={badge.email}                         
                        />
                    </div>
                    <div className="col">
                        <h2>Actions</h2>
                        <div>
                            <div>
                                <button onClick={()=>{ setCount(count + 1); setCuenta(cuenta + 1.5)}} className='btn btn-primary'> Increase Count: {count} - {cuenta} </button>
                                <Link to={`/badges/${badge.id}/edit` } className='btn btn-primary mb-4'> 
                                    Edit
                                </Link>
                            </div>
                            <div>
                                <button  
                                    onClick={props.onOpenModal}
                                    className='btn btn-danger'> 
                                    Delete
                                </button>

                                <DeleteBadgeModal 
                                    isOpen={props.modalIsOpen } 
                                    onClose={props.onCloseModal} 
                                    onDeleteBadge={props.onDeleteBadge}
                                />
                            </div>       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BadgeDetails;