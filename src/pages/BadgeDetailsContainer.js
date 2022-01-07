import React from 'react';

import BadgeDetails from './BadgeDetails'

import Loading from '../components/Loading';
import PageError from '../components/PageError';
import api from '../api'


class BadgeDetailsContainer extends React.Component{
    state = {
        loading: true,
        error: null,
        data: [],
        modalIsOpen: false,
    };

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async e => {
        this.setState({ loading:true, error: null });

        try{
            const data = await api.badges.read(
                this.props.match.params.badgeId
            );

            this.setState({
                loading: false,
                data: data,
            });
        }catch(error){
            this.setState({
                loading: false,
                error: error,
            });
        }

    } 


    handleOpenModal = e =>{
        this.setState({
            modalIsOpen:true,
        });
    }

    handleCloseModal = e =>{
        this.setState({
            modalIsOpen:false,
        });
    }

    handleDeleteBadge = async e =>{
        this.setState({ loading: true, error:null });

        try{
            await api.badges.remove(
                this.props.match.params.badgeId
            ); 
            this.setState({ loading: false });
            
            this.props.history.push('/badges');
                 
        }catch(error){
            this.setState({ loading: false, error: error });
        }
    }
    
   
    render(){

        if(this.state.loading){
            return (
                <Loading />
            );
        }

        if(this.state.error){
            return (
                <PageError error={this.error.message} />
            );
        }

        return (
            <BadgeDetails 
                badge={this.state.data} 
                modalIsOpen= {this.state.modalIsOpen}
                onCloseModal= {this.handleCloseModal}
                onOpenModal= {this.handleOpenModal}
                onDeleteBadge = {this.handleDeleteBadge}
               
            />
        );
    }
}


export default BadgeDetailsContainer;