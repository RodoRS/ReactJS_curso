import React from 'react';

//Components
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import Loading from '../components/Loading';
//Styles
import './styles/BadgeEdit.css';
//Images
import header from '../images/platziconf-logo.svg';
//Api
import api from '../api'



class BadgeEdit extends React.Component{
    state = {
        loading: true,
        error: null,
        form: {
            firstName: "",
            lastName: "",
            email: "",
            jobTitle: "",
            twitter: "",
        }
    };

    componentDidMount(){
       this.fetchData(); 
    }

    fetchData = async e =>{
        this.setState({ loading:true, error: null });

        try{
            const data = await api.badges.read(
                this.props.match.params.badgeId
            );

            this.setState({ loading:false, form: data});
        }catch(error){
            this.setState({ loading:false, error: error });
        }
    }

    handleChange = e =>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name] : e.target.value,
            }
        });

        console.log(this.state, "Badge New");
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({
            loading: true,
            error: null
        });

        try{
            await api.badges.update(this.props.match.params.badgeId ,this.state.form);
            this.setState({
                loading: false
            });

            this.props.history.push('/badges');
        }catch(error){
            this.setState({
                loading: false,
                error: error
            });
        }
    }

    render(){


        if(this.state.loading){
            return (
                <Loading />
            );
        }

        return(
            <React.Fragment>          
                <div className='BadgeEdit__hero'>
                    <img className='BadgeEdit__hero-image img-fluid' src= {header} alt="logo" />
                </div>

                <div className="container">
                    <div className="row" style={{"width": "100%"}}>
                        <div className="col-6">
                            <Badge 
                                firstName= {this.state.form.firstName || 'FIRST_NAME'}
                                lastName= {this.state.form.lastName || 'LAST_NAME'}
                                twitter= {this.state.form.twitter || 'TWITTER'}
                                jobTitle= {this.state.form.jobTitle || 'JOB_TITLE'}
                                email= {this.state.form.email || 'EMAIL'}
                                avatarUrl= "https://avatarfiles.alphacoders.com/236/236719.jpg"                   
                            />
                        </div>

                        <div className="col-6">
                            <h1> Edit Attendant </h1>
                            <BadgeForm 
                                onChange={this.handleChange} 
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default BadgeEdit;

/* <Navigate to='/badges' replace={true}/> */


//avatarUrl= "https://avatars.alphacoders.com/avatars/view/236719"
  /* firstName= "Rodrigo" 
    lastName= "Ramos"
    avatarUrl= "https://avatarfiles.alphacoders.com/236/236719.jpg"
    twitter= "ramos"
    jobTitle= "Ingeniero Mecatrónico" */