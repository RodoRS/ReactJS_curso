import React from 'react';

import error404 from '../images/error404.svg';

function NotFound(){
    return (
        <div className='col-md-8' style={{"margin": "0 auto"}}>
            <img 
                className='d-none d-md-block img-fluid p-4'
                style={{"margin": "0 auto"}}
                src={error404} 
                alt="Error 404" />
        </div>
    );
}

export default NotFound;