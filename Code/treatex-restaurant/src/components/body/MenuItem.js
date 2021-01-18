import React from 'react';
import {Card,CardImg,CardBody,CardTitle} from 'reactstrap'
import {baseUrl} from '../../redux/baseUrl'


const MenuItem = props =>{
    return(
        
        <div>
            <Card style={{margin:"10px"}}>
                <CardBody>
                <div onClick={props.DishSelect} style={{cursor : 'pointer'}}>
                <CardImg width='100%' alt={props.dish.name} src={baseUrl + props.dish.image}></CardImg>      
                    <CardTitle  >
                        {props.dish.name}
                    </CardTitle>
                </div>
                </CardBody>
            </Card>
        </div>
        );
}
export default MenuItem;