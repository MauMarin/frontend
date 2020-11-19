import React from 'react';
import {Button, Form } from "react-bootstrap";
import axios from "axios";


class New_Person extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            districts:['Carmen','Merced','Pavas','Hatillo','Escazú','San Antonio','Frailes','San Rafael'],
            district:'',
            form: {
                name: '',
                id: '',
                number:'',
                email:'',
                state:'active',
                position:'member'
            },
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

    selectDistrict = (e) =>{
        this.setState( {district: e.target.value})
    }

    submitBtn = (event) =>{
        event.preventDefault();   
        try{
            axios.post('https://backend-proyi.herokuapp.com/member/create', {name: this.state.form.name , id:this.state.form.id, number:this.state.form.number,
            email:this.state.form.email, state:this.state.form.state, position:this.state.form.position, district: this.state.district,} )
             .then(response => {
                 this.handleSubmit(response)
         }
         ).catch(error => {
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
        const { districts} = this.state

        return(
            <div className="container p-8 py-5 my-3 bg-dark text-white mt-5">
            <Form>  
                <h1>Add details of members:</h1>
                <hr color='white'></hr>

                <Form.Group onChange= {this.handleChange}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter Name" name = 'name' />
                </Form.Group>

                <Form.Group onChange= {this.handleChange}>
                    <Form.Label>Id</Form.Label>
                    <Form.Control type="id" placeholder="Enter Id" name = 'id' />
                </Form.Group>

                <Form.Group onChange= {this.handleChange}>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="phone" placeholder="Enter Phone" name = 'number' />
                </Form.Group>

                <Form.Group onChange= {this.handleChange}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" name = 'email' />
                </Form.Group>


                <hr color='white'></hr>
                <Form.Group controlId="formMovement">
                <Form.Label>Choose the district</Form.Label>
                    <select defaultValue="" className="custom-select" onChange={this.selectDistrict}>
                    <option disabled={true} value="">Select district</option>
                    {
                        districts.length ?
                        districts.map(district =>                
                            <option key={district}> {district} </option>
                        ):
                        null
                    }
                    </select>
                </Form.Group>
   

            
                <Button variant="primary" type="submit" onClick = {this.submitBtn}>
                    Submit
                </Button>
            </Form>
            </div>
        );
    }
}

export default New_Person;