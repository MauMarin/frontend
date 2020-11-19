import React from 'react';
import {Button, Form } from "react-bootstrap";
import axios from "axios";



class Assign_movement extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            movements:[], 
            zones:[], 
            name: '',//movimiento
            zone: ''//zona
            
        }
    }
    

    componentDidMount(){
        axios.get('https://backend-proyi.herokuapp.com/movement/getAll')
            .then(response=> {
                console.log(response)
                this.setState({movements: response.data.result})
            })
            .catch(error => {
                console.log(error)
            })

        axios.get('https://backend-proyi.herokuapp.com/zone/getAll')
            .then(response=> {
                console.log(response)
                this.setState({zones: response.data.result})
            })
            .catch(error => {
                console.log(error)
            })
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
        console.log('zone' , this.state.zone);
        console.log('name' , this.state.name);
     
        try{
        const zone = this.state.zone
        const name =  this.state.name
        axios.post('https://backend-proyi.herokuapp.com/movement/addZone', {zone,name} )
            .then(response => {
                this.handleSubmit(response)
                console.log(response)
            })
            .catch(error => {
                this.handleSubmit(error)
                console.log(error)
                console.log('asdasd')
            })
       }catch(e){
            console.log(e);
       }
    };
    

    
    selectMovement = (event) =>{
        this.setState({ name: event.target.value  })
    }

    selectZone = (event) =>{
        this.setState({ zone: event.target.value  })
    }

    handleSubmit(response){
        alert(response.data.result.message);
    }

    render(){
     
        const { movements, zones } = this.state
        return(
            <div className="container p-8 py-5 my-3 bg-dark text-white mt-5">
            <Form>  
                <h1>Assign movement to a zone:</h1>
                <hr color='white'></hr>

                <Form.Group controlId="formMovement">
                <Form.Label>Choose the movement that belongs</Form.Label>
                    <select defaultValue="" className="custom-select" onChange={this.selectMovement}>
                    <option disabled={true} value="">Select movement</option>
                    {
                        movements.length ?
                        movements.map(movement =>                
                            <option key={movement.name}> {movement.name} </option>
                        ):
                        null
                    }
                        
                    </select>
                </Form.Group>
                
                <hr color='white'></hr>
                <Form.Group controlId="formMovement">
                <Form.Label>Choose the zone</Form.Label>
                    <select defaultValue="" className="custom-select" onChange={this.selectZone}>
                    <option disabled={true} value="">Select zone</option>
                    {
                        zones.length ?
                        zones.map(zone =>                
                            <option key={zone.name}> {zone.name} </option>
                        ):
                        null
                    }
                    </select>
                </Form.Group>
                <hr color='white'></hr>
                <Button variant="primary" type="submit" onClick = {this.submitBtn}>
                    Submit
                 </Button>
                </Form>
            </div>
        );
    }
}

export default Assign_movement;
