import React, {Component} from 'react';
import axios from 'axios';
import Item from '../items/Items'

class Landing extends Component{
    constructor(props){
        super(props);

        this.state ={
            items: []
        }
    }
    componentDidMount(){
     axios({
         method:'get',
         url:'api/item/get'
     })
         .then(res => this.setState({
             items: res.data
         }))
         .then(() => console.log(this.state.items))
         .catch(err => console.log(err))
    }
    render(){

        const showItems = (
            <div>
                {this.state.items.map(item => {
                    return <Item key={item._id} name={item.name}/>
                })}
            </div>
        );

        return <div className='container'>
            {showItems}
        </div>
    }
}

export default Landing;