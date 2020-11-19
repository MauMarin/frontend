import React from 'react';

import {Button, Form } from "react-bootstrap";

class edit_movements extends React.Component{
    fileSelectedHandler = event => {
        console.log(event);
    }
    
    render(){
        return(
            <div class="container p-8 py-5 my-3 bg-dark text-white mt-5">
            <Form>

                <Form.Group controlId="formMovements">
                    <h1>Select movements:</h1>
                    <hr color='white'></hr>
                    <select name="SelectZone" class="custom-select">
                        <option selected>Select movements</option>
                    </select>
                </Form.Group>


                <h1>Edit details of movement:</h1>
                <hr color='white'></hr>

                <Form.Group controlName="forNameMovement">
                    <Form.Label>Corporation identification</Form.Label>
                    <Form.Control type="Name" placeholder="Datos cargados" />
                </Form.Group>


                <Form.Group controlName="forNameMovement">
                    <Form.Label>Name of movement</Form.Label>
                    <Form.Control type="Name" placeholder="Datos cargados" />
                </Form.Group>

                <Form.Group controlName="forIDMovement">
                    <Form.Label>ID movement</Form.Label>
                    <Form.Control type="Movement" placeholder="Datos cargados" />
                </Form.Group>
                

                <Form.Group controlId="formWebsite">
                    <Form.Label>Website</Form.Label>
                    <Form.Control type="Website" placeholder="Datos cargados" />
                </Form.Group>
            
                <Form.Group controlId="formCountry">
                <Form.Label>Country</Form.Label>
                    <select name="Country" class="custom-select">
                        <option selected>Datos cargados</option>
                        <option value="volvo">Cargar de la base de datos</option>
                    </select>
                </Form.Group>

                <Form.Group controlId="formLocation">
                <Form.Label>Location</Form.Label>
                    <select name="Location" class="custom-select">
                        <option selected>Datos cargados</option>
                        <option value="volvo">Cargar de la base de datos</option>
                    </select>
                </Form.Group>


                <div class="container">
                <hr color='white'></hr>
                <h2>Select a photo for your movement:</h2>
                
                <input type = "file" onChange={this.fileSelectedHandler} />

                <hr color='white'></hr>
                </div>

                <div class="container">
                    <h2>Select a counselor for your movement</h2>
                    <p>Members available in the system:</p>      
                    <hr color='white'></hr>      
                    <table class="table table-bordered">
                        <thead>
                            <tr class="table-light">
                            <th>Check</th>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Number</th>
                            <th>Email</th>
                            <th>Province</th>
                            <th>Canton</th>
                            <th>District</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr  class="table-light">
                            <td>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                <label class="form-check-label" for="defaultCheck1">
                                    Add
                                </label>
                            </div>

                            </td>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                            <td>John</td>
                     
                        </tr>
                        
                        </tbody>
                    </table>
                </div>

                <Button variant="primary" type="submit">
                    Submit
                 </Button>
                </Form>
                
            </div>



        );
    }
}
export default edit_movements;
