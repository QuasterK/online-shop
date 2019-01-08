import React, {Component} from 'react';
class Item extends Component{
    constructor(props){
        super(props);
        this.state={
            name: this.props.name,
            img: this.props.name
        }
    }

    render(){
        const imageOne = require('../../images/' + this.state.img + '/1.jpg')
        return (
            <div ><img width='200px' height='200px' src={imageOne} alt="boohoo" className="img-responsive"/></div>
        )
    }
}

export default Item;