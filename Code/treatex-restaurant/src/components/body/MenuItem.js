import React from 'react';
import {Card,CardImg,CardBody,CardTitle} from 'reactstrap'


const MenuItem = props =>{
    return(
        
        <div>
            <Card style={{margin:"10px"}}>
                <CardImg width='100%' alt={props.dish.name} src={props.dish.image}></CardImg>      
                <CardBody>
                    <CardTitle onClick={props.DishSelect} style={{cursor : 'pointer'}}>
                        {props.dish.name}
                    </CardTitle>
                </CardBody>
            </Card>
        </div>
        );
}
export default MenuItem;