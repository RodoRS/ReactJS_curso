import React,{Component} from 'react';
import {Link} from 'react-router-dom';
//Components
import BadgesList from '../components/BadgesList';
import Loading from '../components/Loading';
import PageError from '../components/PageError';

//Css
import './styles/Badges.css'

import confLogo from '../images/badge-header.svg';

//Api
import api from '../api';

class Badges extends Component{
    state = {
        loading: true,
        error: null,
        data: [],
      };
    /* constructor(props){
        super(props);
        console.log('1. constructor()', props);

        this.state = {
            loading: true,
            error: null,
            data: [],
          };
    } */

    componentDidMount(){
        console.log('3. componentDidMount()');
        this.fetchData();

        //setInterval( this.fetchData() , 5000);
    }

    fetchData = async() => {
        this.setState({
            loading: true,
            error: null,
        });

        try{
            const data = await api.badges.list();
            this.setState({
                loading: false,
                data: data,
            });
        }catch(error){
            console.error(error, "Error fetch");

            this.setState({
                loading: false,
                error: error
            });
        }
    }

    componentDidUpdate(prevProps, prevState){
        console.log('5. componentDidUpdate()');
        console.log({prevProps: prevProps, prevState: prevState});
        console.log({currentProps: this.props, currentState: this.state});
    }

    componentWillUnmount(){
        console.log('6. componentWillUnmount()');
        clearTimeout(this.timeoutId);
    }


    render(){
        console.log('2/4. render()', this.props);

        if(this.state.loading === true){
            return <Loading />
        }

        if(this.state.error){
            return <PageError  error={this.state.error} /> 
        }

        return (
            <React.Fragment>
        
                <div className='Badges'>
                    <div className='Badges__hero'>
                        <div className='Badges__container'>
                            <img className='Badges__conf-logo' 
                                src= {confLogo} 
                                alt="Conf Logo" />
                        </div>
                    </div>
                </div>
    
                <div className="Badges__container">
                    <div className="Badges__buttons">              
                        <Link className='btn btn-primary'
                            to="/badges/new">New Badge
                        </Link>                    
                    </div>
                </div>

                <div className="Badges__list">
                    <div className="Badges__container">
                        <BadgesList badges={this.state.data} />
                    </div>
                </div>

            </React.Fragment>
        );
     
    }
}


export default Badges;


/* <a  className='btn btn-primary'
                            href="/badges/new">New Badge
                        </a>  */