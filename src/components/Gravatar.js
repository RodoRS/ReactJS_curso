import React from 'react';
import md5 from 'md5';

function Gravatar(props){
    const {
        className,
        email
    } = props;

    const emailStr = email;
    const hash = md5(emailStr);

    return (
        <img 
            className={className}
            src={`https://www.gravatar.com/avatar/${hash}?d=identicon`} 
            alt="Avatar" />
    );
}


export default Gravatar;
