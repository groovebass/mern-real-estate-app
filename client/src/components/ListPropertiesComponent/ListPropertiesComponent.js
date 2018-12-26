import React, {Component} from 'react';
import {Input, InputGroup, InputGroupAddon, InputGroupText, Label} from "reactstrap";
import PropertyComponent from '../PropertyComponent/PropertyComponent';

class ListPropertiesComponent extends Component{

    render() {
        return(
            <div >
                <div className="text-white">
                    <div className="bg-green text-center p-4" >
                        <h3>Filter Your Results</h3>
                    </div>
                    <div className="container mt-5">
                        <InputGroup className="form-group">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <span className="fa fa-search"/>
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input type="text" placeholder="Search for Houses, Lands..."/>
                        </InputGroup>
                        <div className="form-group">
                            <Label>Property Type:</Label>
                            <select className="form-control" >
                                <option>All</option>
                                <option>Buy</option>
                                <option>Rent</option>
                            </select>
                        </div>
                        <div className="form-inline">
                            <Label>City:</Label>
                            <div className="m-2">
                                <select className="form-control" >
                                    <option>All</option>
                                    <option>Rawalpindi</option>
                                    <option>Islamabad</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-4 mt-5">
                    <PropertyComponent/>
                </div>


            </div>
        )
    }
}

export default ListPropertiesComponent;