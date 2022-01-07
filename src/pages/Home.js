import React , {Component} from 'react';
import {Link} from 'react-router-dom';

//Css
import './styles/Home.css'

//Images
import platziConfLogoImage from '../images/platziconf-logo.svg';
import astronautsImage from '../images/astronauts.svg';

class Home extends Component{

    render(){
        console.log(this.props, "HOME");
        return(
            <div className="Home">
                <div className="container">
                    <div className="row">
                        <div className="Home__col col-12 col-md-4">
                            <img
                                className='img-fluid mb-2' 
                                src={platziConfLogoImage} 
                                alt="Platzi Conf Logo" />
                            <h1>
                                Badge Managment System
                            </h1>
                            <Link 
                                className='btn btn-primary' 
                                to="/badges">
                                    Start
                            </Link>
                        </div>

                        <div className="Home__col d-none d-md-block col-md-8">
                            <img 
                                className='img-fluid p-4'
                                src= {astronautsImage}
                                alt="Astronauts" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Home;