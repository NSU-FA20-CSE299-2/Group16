import React from 'react'
import {Card,CardImg,CardBody,CardTitle,CardText} from 'reactstrap'
import LoadComments from './LoadComments'


const DishDetail= props=>{
    return(
        <div>
            <Card style={{margin:"10px"}}>
                <CardImg alt={props.dish.name} src={props.dish.image}/>
                    <CardBody style={{textAlign :"left"}}>
                        <CardTitle>{props.dish.name}</CardTitle>
                        <CardText>                            
                            <p>{props.dish.description}</p>  
                            <p>MRP : {props.dish.price} TK.</p>    
                        </CardText>
                        <hr/>
                        <LoadComments comments={props.comments}/>
                    </CardBody>
            </Card>
        </div>
    )
}
export default DishDetail