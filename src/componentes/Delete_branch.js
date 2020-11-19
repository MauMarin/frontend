import React from 'react';

import {Button, Form } from "react-bootstrap";

class Delete_branch extends React.Component{
    render(){
        return(
            <div class="container p-8 py-5 my-3 bg-dark text-white mt-5">
            <Form>

                <Form.Group controlId="formBranch">
                    <h1>Select branch:</h1>
                    <hr color='white'></hr>
                    <select name="SelectBranch" class="custom-select">
                        <option selected>Select branch</option>
                    </select>
                </Form.Group>

                <h1>Details of branch:</h1>
                <hr color='white'></hr>
                <Form.Group controlName="forNameBranch" disabled>
                    <Form.Label>Name branch</Form.Label>
                    <Form.Control type="Branch" placeholder="Enter Name" disabled />
                </Form.Group>

                <Form.Group >
                    <Form.Label>ID Branch</Form.Label>
                    <Form.Control type="Branch" placeholder="Enter Id Branch" disabled />
                </Form.Group>

                <Form.Group controlId="formType">
                <Form.Label>Type</Form.Label>
                    <select name="Type" class="custom-select" disabled>
                        <option selected>Cargar de la base de datos</option>
                        <option value="volvo">Type</option>
                    </select>
                </Form.Group>

                <Form.Group controlId="formMovement">
                <Form.Label>Choose the movement that belongs</Form.Label>
                    <select name="Movement" class="custom-select" disabled>
                        <option selected>Cargar de la base de datos</option>
                        <option value="volvo">Movement</option>
                    </select>
                </Form.Group>

                <Form.Group controlId="formZone">
                <Form.Label>Choose the zone that belongs</Form.Label>
                    <select name="Zone" class="custom-select" disabled>
                        <option selected>Cargar de la base de datos </option>
                        <option value="volvo">Zone</option>
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
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" disabled/>
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


                <Button variant="primary" type="Delete">
                    Delete
                 </Button>
                </Form>

            </div>
        );
    }
}
export default Delete_branch;
