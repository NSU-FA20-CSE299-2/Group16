import React,{Component} from 'react';
import MenuItem from './MenuItem';
import DishDetail from './DishDetail'
import { CardColumns,Modal,ModalBody,ModalFooter,Button } from 'reactstrap';
import {connect} from 'react-redux'

const mapStateToProps = state =>{
    return{
        dishes : state.dishes,
        comments : state.comments,
    }
}
const mapDispatchToProps= dispatch=>{
    return{
        addComment : (dishId,author,rating,comment) =>dispatch({
            type : 'ADD_COMMENT',
            payload: {
                dishId : dishId,
                author : author,
                rating : rating,
                comment : comment
                }
            }
        )
    }
}

class Menu extends Component {
    state = {
        selectedDish:null,
        modalisOpen : false,
    }
    onDishSelect = dish =>{
        this.setState({
            selectedDish : dish,
            modalisOpen : !this.state.modalisOpen
        })
    }

    toggleModal = () =>{
        this.setState({
            modalisOpen: !this.state.modalisOpen
        })
    }
    render(){
        document.title = "Treatex-Menu"
        const menu = this.props.dishes.map(item =>{
            return(
                    <MenuItem 
                    dish = {item} 
                    key = {item.id}
                    DishSelect={()=> this.onDishSelect(item)}
                    />

            );
        })

        let dishDetail = null;
        if(this.state.selectedDish !=null){
            const comments = this.props.comments.filter(comment => comment.dishId === this.state.selectedDish.id)
            dishDetail= <DishDetail dish = {this.state.selectedDish} comments = {comments}
            addComment={this.props.addComment}/>
        }
       
        return(
            <div className = 'container'>
                <div className="row">
                    <CardColumns>
                        {menu}
                    </CardColumns>
                    <Modal isOpen={this.state.modalisOpen}>
                        <ModalBody>
                            {dishDetail}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" onClick={this.toggleModal}>
                                Close
                            </Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        )
    }
}
export default connect (mapStateToProps,mapDispatchToProps)(Menu);