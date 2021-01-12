import React,{Component} from  'react'
import {Button,FormGroup,Label,Col} from 'reactstrap'
import {LocalForm, Control, Errors} from 'react-redux-form'

class Contact extends Component {
    handleSubmit = values => {
        console.log(values);
    }
    render(){
        document.title = "Treatex-Contact"

        return(
                <div className="row row-content" style={{paddingLeft:'20%', textAlign:'left'}}>
                    <div className="col-12">
                        <h3>Send Us Your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-7">
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}> First Name</Label>
                                <Col md={10}>
                                    <Control.text
                                    model=".firstname" 
                                    name='firstname'
                                    placeholder='First Name'
                                    className="form-control"
                                    validators={{
                                        required
                                    }}
                                    /> 
                                    <Errors
                                    className="text-danger"
                                    model=".firstname"
                                    show="touched"
                                    messages={
                                        {
                                            required: "First name is required"
                                        }
                                    }/>      
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}> Last Name</Label>
                                <Col md={10}>
                                    <Control.text
                                    model=".lastname"
                                    name='lastname'
                                    placeholder='Last Name'
                                    className="form-control" 
                                    validators={
                                        {required}
                                    }/>  
                                     <Errors
                                    className="text-danger"
                                    model=".lastname"
                                    show="touched"
                                    messages={
                                        {
                                            required: "Last name is required"
                                        }
                                    }/>     
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}> Phone Num</Label>
                                <Col md={10}>
                                    <Control.text
                                    model=".telnum" 
                                    name='telnum' 
                                    placeholder='Phone Number'
                                    className="form-control"
                                    validators={
                                        {
                                        required,
                                        isNumber}
                                    } />   
                                     <Errors
                                    className="text-danger"
                                    model=".telnum"
                                    show="touched"
                                    messages={
                                        {
                                            required: "Telephone num is required",
                                            isNumber : "Invalid Number"
                                        }
                                    }/>    
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}> Email</Label>
                                <Col md={10}>
                                    <Control.text
                                    model=".email" 
                                    name='email' 
                                    placeholder='Email'
                                    className="form-control"
                                    validators={
                                        {required,
                                        validEmail}
                                    } /> 
                                     <Errors
                                    className="text-danger"
                                    model=".email"
                                    show="touched"
                                    messages={
                                        {
                                            required: "Email is required, ",
                                            validEmail: "Invalid Email"
                                        }
                                    }/>      
                                </Col>
                            </FormGroup>

                            <FormGroup row>    
                                <Col md={{size : 6,offset:2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Control.checkbox
                                            model=".agree" 
                                            name="agree" 
                                            className="from-check-input"/>
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>   
                                </Col >
                                <Col md={{size : 3,offset:1}}>
                                    <Control.select
                                    model="contactType"
                                    name="contactType"
                                    className="form-control">
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="message" md={2}> Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea
                                    model=".message"
                                    name='message'  
                                    rows="6" 
                                    className="form-control"
                                    validators={
                                        {required}
                                    }
                                    />
                                     <Errors
                                    className="text-danger"
                                    model=".message"
                                    show="touched"
                                    messages={
                                        {
                                            required: "You must write feedback or queries here"
                                        }
                                    }/>       
                                </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Col md={{size : 10,offset:2}}>
                                        <Button type="submit" color="primary">
                                            Send us Feedback
                                        </Button>
                                    </Col>
                                </FormGroup>    
                        </LocalForm>
                    </div>
                </div>
        )
    }   
}

export default Contact;