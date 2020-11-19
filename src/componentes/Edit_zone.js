import React from 'react';

import {Button, Form } from "react-bootstrap";

class Edit_zone extends React.Component{
    render(){
        return(
            <div class="container p-8 py-5 my-3 bg-dark text-white mt-5">
            <Form>

                <Form.Group controlId="formZone">
                    <h1>Select zone:</h1>
                    <hr color='white'></hr>
                    <select name="SelectZone" class="custom-select">
                        <option selected>Select zone</option>
                    </select>
                </Form.Group>


                <h1>Edit details of zone:</h1>
                <hr color='white'></hr>
                <Form.Group controlName="forNameZone">
                    <Form.Label>Zone</Form.Label>
                    <Form.Control type="Zone" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group >
                    <Form.Label>ID Zone</Form.Label>
                    <Form.Control type="Zone" placeholder="Enter Id Zone" />
                </Form.Group>

                <Form.Group controlId="formType">
                <Form.Label>Type</Form.Label>
                    <select name="Type" class="custom-select">
                        <option selected>Cargar de la base de datos</option>
                        <option value="volvo">Type</option>
                    </select>
                </Form.Group>


                <Form.Group controlId="formMovement">
                <Form.Label>Choose the movement that belongs</Form.Label>
                    <select name="Movement" class="custom-select">
                        <option selected>Cargar de la base de datos</option>
                        <option value="volvo">Movement</option>
                    </select>
                </Form.Group>



                <div class="container">
                    <h2>Choose leader</h2>
                    <p>Members available in the system:</p>            
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
export default Edit_zone;
