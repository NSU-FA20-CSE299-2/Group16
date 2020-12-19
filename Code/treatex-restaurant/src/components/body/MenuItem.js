import React from 'react';
import {Card,CardImg,CardImgOverlay,CardBody,CardItem,CardTitle} from 'reactstrap'


const MenuItem = props =>{
    console.log(props)
    return(
        
        <div>
            <Card style={{margin:"10px"}}>
                <CardImg width='100%' alt={props.dish.name} src={props.dish.image}></CardImg>      
                <CardBody>
                    <CardTitle>
                        {props.dish.name}
                    </CardTitle>
                </CardBody>
            </Card>
        </div>
        );
}
export default MenuItem;