import React from 'react'
import {Card,CardImg,CardBody,CardTitle,CardText} from 'reactstrap'
import LoadComments from './LoadComments'
import CommentForm from './CommentForm'


const DishDetail= props=>{
    return(
        <div>
            <Card style={{margin:"10px"}} body outline color="warning">
                <CardImg alt={props.dish.name} src={props.dish.image}/>
                    <CardBody style={{textAlign :"left"}}>
                        <CardTitle style={{textAlign :"center"}}>{props.dish.name}</CardTitle> <hr outline color="warning" width="50%"/>
                        <CardText>                            
                            <p>{props.dish.description}</p>
                            <p>MRP : {props.dish.price} TK.</p>    
                        </CardText>
                        <hr outline color="warning" />
                        <LoadComments comments={props.comments}/>
                        <hr/>
                        <CommentForm dishId={props.dish.id}/>
                    </CardBody>
            </Card>
        </div>
    )
}
export default DishDetail