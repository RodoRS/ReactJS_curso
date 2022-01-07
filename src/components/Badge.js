import React from 'react';

//Component
import Gravatar from './Gravatar';
//Importar Imágen
import confLogo from '../images/badge-header.svg';
//Importar CSS
import './styles/Badge.css';

class Badge extends React.Component{
    render(){
        const {
            firstName,
            lastName,
            avatarUrl,
            jobTitle,
            twitter,
            email
        } = this.props;
        console.log(this.props, "Badge");

        return  (
            <div className='Badge'>
                <div className='Badge__header'>
                    <img src={ confLogo } alt="Logo de la conferencia" />
                </div> 
                <div className='Badge__section-name'>
                    <Gravatar  
                        className= 'Badge__avatar'
                        email= {email}
                    />
                    <h1> {firstName} <br/> {lastName}</h1>
                </div>
                <div className='Badge__section-info'>
                    <h3> {jobTitle} </h3>
                    <div> @{twitter} </div>
                </div>
                <div className='Badge__footer'>
                    #ramos
                </div>           
            </div>
        );
    }
}

export default Badge;

