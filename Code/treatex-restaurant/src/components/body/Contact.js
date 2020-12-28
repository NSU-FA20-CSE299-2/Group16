import React,{Component} from  'react'
import {Button,Form,FormGroup,Label,Input,Col} from 'reactstrap'

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstname : "",
            lastname : "",
            telnum : "",
            email : "",
            agree : false,
            contactType: 'Tel',
            message :""
        }
    }
    render(){

        return(

            <div className="contaiver">
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send Us Your Feedback</h3>
                    </div>
                    <div className="col-12">
                        <Form>
                            <FormGroup row>
                                <Label htmlfor="firstname" md={2}> First Name</Label>
                                <Col md={10}>
                                    <Input type="text" name='firstname' placeholder='First Name' value={this.state.firstname}/>       
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlfor="lastname" md={2}> Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" name='lastname' placeholder='Last Name' value={this.state.lastname}/>       
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlfor="telnum" md={2}> Phone Number</Label>
                                <Col md={10}>
                                    <Input type="tel" name='telnum' placeholder='Phone Number' value={this.state.telnum}/>       
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlfor="email" md={2}> Email</Label>
                                <Col md={10}>
                                    <Input type="email" name='email' placeholder='Email' value={this.state.email}/>       
                                </Col>
                            </FormGroup>
                            <FormGroup>
                               
                                <Col md={{size : 6,offset:3}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type ="checkbox" name="agree" checkrd={this.state.agree}/><strong>
                                                May we contact you?
                                            </strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }   
}

export default Contact;