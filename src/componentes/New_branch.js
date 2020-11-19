import React from 'react';
import {Button, Form } from "react-bootstrap";
import axios from "axios";


class New_branch extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            form: {
                name: '',
                state: 'Active',
            }
        }
    }

    handleChange = e => {
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }


    submitBtn = (event) =>{
        event.preventDefault(); 
        try{
        axios.post('https://backend-proyi.herokuapp.com/branch/create', this.state.form)
            .then(response => {
                this.handleSubmit(response)
            })
            .catch(error => {
                this.handleSubmit(error)
            })
        }catch(e){
            this.handleSubmit(e)
        }
    };

    handleSubmit(response){
        alert(response.data.result.message);
    }

    render(){
        return(
            <div className="container p-8 py-5 my-3 bg-dark text-white mt-5">
            <Form>  
                <h1>Add details of branch:</h1>
                <hr color='white'></hr>

                <Form.Group onChange= {this.handleChange}>
                    <Form.Label>Name of branch</Form.Label>
                    <Form.Control type="name" placeholder="Enter Name" name = 'name' />
                </Form.Group>
                    
                <Button variant="primary" type="submit" onClick = {this.submitBtn}>
                    Submit
                 </Button>
                </Form>
            </div>
        );
    }
}

export default New_branch;