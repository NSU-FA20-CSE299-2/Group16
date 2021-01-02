import React,{Component} from  'react'
import { UncontrolledCarousel } from 'reactstrap';
import Slides from './Slides'

class Home extends Component {
    render(){
        document.title = "Treatex-Home"
        return(
            <UncontrolledCarousel items={Slides} />
       
           
        )
    }   
}

export default Home;