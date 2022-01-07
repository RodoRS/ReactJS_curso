import React, {Component} from 'react';

class BadgeForm extends Component{
    /*
    state = {
        jobTitle: ""
    };

     handleChange = e =>{
  
        this.setState({
            [e.target.name]: e.target.value,
        });
     
    } */

    handleClick = e =>{
        console.log("button Click");
    }

    /* handleSubmit= e =>{
        e.preventDefault();
        console.log('Form was submitted');
        // console.log(this.state);
    } */

    render(){
        console.log(this.props);
        const {
            onChange,
            formValues,
            onSubmit,
            error
        } = this.props;

        console.log(this.props, "BadgeForm");

        return(
            <div className='BadgeForm'>

                <form onSubmit={onSubmit}>
                    <div className='form-group'> 
                        <label htmlFor="">First Name</label>
                        <input 
                            className='form-control' 
                            type="text" 
                            name='firstName' 
                            value= {formValues.firstName}
                            onChange= {onChange}
                        />
                    </div>
                    <div className='form-group'> 
                        <label htmlFor="">Last Name</label>
                        <input 
                            className='form-control' 
                            type="text" 
                            name='lastName' 
                            value= {formValues.lastName}
                            onChange= {onChange}
                        />
                    </div>
                    <div className='form-group'> 
                        <label htmlFor="">Email</label>
                        <input 
                            className='form-control' 
                            type="email" 
                            name='email' 
                            value= {formValues.email}
                            onChange= {onChange}
                        />
                    </div>
                    <div className='form-group'> 
                        <label htmlFor="">Job Title</label>
                        <input 
                            className='form-control' 
                            type="text" 
                            name='jobTitle' 
                            value= {formValues.jobTitle}
                            onChange= {onChange}
                        />
                    </div>
                    <div className='form-group'> 
                        <label htmlFor="">Twitter</label>
                        <input 
                            className='form-control' 
                            type="text" 
                            name='twitter' 
                            value= {formValues.twitter}
                            onChange= {onChange}
                        />
                    </div>

                    <button 
                        style={ {'marginTop': '1rem'} }
                        className='btn btn-primary'
                        onClick= {this.handleClick}>
                        Save
                    </button>

                    { error && 
                        <p className='text-danger' >{error.message}</p> 
                    }
                </form>
            </div>
        );
    }
}


export default BadgeForm;