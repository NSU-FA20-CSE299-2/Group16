import React,{Component} from 'react';
import MenuItem from './MenuItem';
import DishDetail from './DishDetail'
import { CardColumns,Modal,ModalBody,ModalFooter,Button } from 'reactstrap';
import {connect} from 'react-redux'
import {addComment, fetchDishes, fetchComments} from '../../redux/actionCreators'
import Loading from './Loading'

const mapStateToProps = state =>{
    return{
        dishes : state.dishes,
        comments : state.comments,
    }
}
const mapDispatchToProps= dispatch=>{
    return{
        addComment : (dishId,author,rating,comment) =>dispatch(addComment(dishId,author,rating,comment)),
        fetchDishes:()=>dispatch(fetchDishes()),
        fetchComments:()=> dispatch(fetchComments())
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

    componentDidMount(){
        this.props.fetchDishes();
        this.props.fetchComments();
    }
    render(){
        document.title = "Treatex-Menu"
        if(this.props.dishes.isLoading){
            return(
                <Loading />
            );
        } else{
            const menu = this.props.dishes.dishes.map(item =>{
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
                const comments = this.props.comments.comments.filter(comment => comment.dishId === this.state.selectedDish.id)
                dishDetail= <DishDetail dish = {this.state.selectedDish} comments = {comments}
                addComment={this.props.addComment}
                commentsIsLoading={this.props.comments.isLoading}/>
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
}
export default connect (mapStateToProps,mapDispatchToProps)(Menu);