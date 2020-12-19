import React,{Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import DISHES from '../../data/dishes'
import MenuItem from './MenuItem'

class Menu extends Component {
    state = {
        dishes : DISHES
    }
    render(){
        const menu = this.state.dishes.map(item =>{
            return(
                <div>
                    <MenuItem dish = {item} key = {item.id}/>
                </div>

            );
        })
       
        return(
            <div className = 'container'>
                <div className="row xs='2'">
                    <div className="col-6">
                        {menu}
                    </div>
                </div>
            </div>

        )
    }
}
export default Menu;