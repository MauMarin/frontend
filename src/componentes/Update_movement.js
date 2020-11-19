import React from 'react';
import {Button, Form } from "react-bootstrap";
import axios from "axios";



class Update_movement extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            persons:[], 
            countrySelect: '',
            personSelect:[],
            checked: { },
            form: {
                name: '',
                country: 'Costa Rica',
                leader: '',
                description: '',
                state: 'Active',
            },
            movements:[], 
            movement: ''
            
        }
    }

    selectMovement = (event) =>{
        this.setState({ movement: event.target.value  })
        console.log('')
        try{
            axios.get('https://backend-proyi.herokuapp.com/movement/get', {name:this.state.movement} )
                .then(response => {
                    this.handleSubmit(response)
                    console.log(response)
                })
                .catch(error => {
                    this.handleSubmit(error)
                    console.log(error)
                })
           }catch(e){
                console.log(e);
           }
    }

    onSelectedChange = index => {
        this.setState(previousState => ({
          checked: {
            ...previousState.checked,
            [index]: !previousState.checked[index]
          }
        }));
      };

    fileSelectedHandler = event => {
        console.log(event);
    }

    componentDidMount(){
        axios.get('https://backend-proyi.herokuapp.com/member/getAll')
            .then(response=> {
                this.setState({persons: response.data.result})
            })
            .catch(error => {
                this.handleSubmit(error)
            })

        axios.get('https://backend-proyi.herokuapp.com/movement/getAll')
            .then(response=> {
                this.setState({movements: response.data.result})
            })
            .catch(error => {
                this.handleSubmit(error)
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
        
       try{

        console.log('state' ,JSON.stringify(this.state.form));
        axios.post('https://backend-proyi.herokuapp.com/movement/create', this.state.form)
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
    

    removeElement(e) {
        var array = [...this.state.personSelect]; 
        var index = array.indexOf(e._id)
        if (index !== -1) {
          array.splice(index, 1);
          this.setState({personSelect: array});
        }
      }

    addElement(e){
        //this.setState({ personSelect: this.state.personSelect.concat(e._id)})
        this.setState({
            form:{
                ...this.state.form,
                leader : e._id
            }
        })

    }

    markPeople = (e) =>  {
        if (!this.state.personSelect.find ( (element) => { return element === e._id; })) {
            this.addElement(e)
        }else{
            this.removeElement(e)   
        }
    }
    
    selectCountry = (event) =>{
        this.setState({ countrySelect: event.target.value  })
    }

    handleSubmit(response){
        alert(response.data.result.message);
    }

   
    selectMovement = (event) =>{
        this.setState({ form: event.target.value  })
        const p = [this.movements]
        console.log(p)
        p.map(move => {
                return move.name === event.target.value  ? 
                    this.setState({
                        form:{
                            ...this.state.form,
                            name:move.name
                        }
                    })  
                    :
                    null
            }
        )
    }
    

    setForm = (e) =>{
        this.setState({
            form:{
                ...this.state.form,
                name: e.name
            }
        })
    }

    render(){
        const { movements ,persons,checked , movement,form} = this.state
        const checkedCount = Object.keys(checked).filter(key => checked[key]).length;
        const disabled = checkedCount > 0;
        console.log(form)
        console.log(movements)
        return(
            <div className="container p-8 py-5 my-3 bg-dark text-white mt-5">
            <Form>  
            {console.log(form)}

            <Form.Group controlId="formMovement">
                <Form.Label>Choose the movement that belongs</Form.Label>
                    <select defaultValue="" className="custom-select" onChange={this.selectMovement}>
                    <option disabled={true} value="">Select movement</option>
                    {
                        movements.length ?
                        movements.map(movement =>                
                            (
                            <option key={movement.name}> {movement.name} </option>
                            //form.name = movement.name
                            )
                        ):
                        null
                    }
                        
                    </select>
                </Form.Group>


                <h1>Add details of movement:</h1>
                <hr color='white'></hr>

                <Form.Group onChange= {this.handleChange}>
                <Form.Label>Name of movement: {form.name}</Form.Label>
                    <Form.Control type="name" placeholder="Enter Name" name = 'name' />
                </Form.Group>
                

                <Form.Group onChange= {this.handleChange}>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="description" placeholder="Enter description" name = 'description'/>
                </Form.Group>          

                <Form.Group>
                <Form.Label>Country</Form.Label>
                    <select  className="custom-select" onChange={this.selectCountry}>
                        <option value = "Costa Rica"> Costa Rica </option>
                    </select>
                </Form.Group>

                <div className="container">
                    <h2>Select a counselor for your movement</h2>
                    <p>Members available in the system:</p>      
                    <hr color='white'></hr>      
                    <table className="table table-bordered">
                        <thead>
                            <tr className="table-light">
                            <th>Check</th>
                            <th>Name</th>
                            <th>ID</th>
                            <th>Email</th>
                            <th>Number</th>
                            <th>District</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            persons.length ?
                            persons.map(person =>                
                                    <tr key={person.id} className="table-light">
                                        <td>
                                            <div className="form-check"style={{ textAlign:"center" }}>
                                                <input className="form-check-input" type="checkbox" 
                                                name= {person._id} 
                                                onChange={ e => { 
                                                    this.onSelectedChange(person.id) ; 
                                                    this.markPeople(person) 
                                                }} 
                                                checked={checked[person.id] || false}
                                                disabled={!checked[person.id] && disabled}/>
                                            </div>
                                        </td>
                                        <td>{person.name}</td>
                                        <td>{person.id}</td>
                                        <td>{person.email}</td>
                                        <td>{person.number}</td>
                                        <td>{person.district}</td>
                                    </tr>
                            ):
                            null
                        }
                                    </tbody>
                    </table>
                </div>

                <Button variant="primary" type="submit" onClick = {this.submitBtn}>
                    Submit
                 </Button>
                </Form>
            </div>
        );
    }
}

export default Update_movement;
