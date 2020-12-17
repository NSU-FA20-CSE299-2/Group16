import React,{Component} from 'react';
import DISHES from '../../data/dishes'

class menu extends Component {
    state = {
        dishes : DISHES
    }
    render(){
        return(
            <div className = 'container'>
                <div className="row">
                    <div className="col-6">

                    </div>
                </div>
            </div>

        )
    }
}
export default Menu