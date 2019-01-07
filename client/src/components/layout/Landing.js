import React, {Component} from 'react';
import {connect} from 'react-redux';
import Item from '../items/Items';
import { getItems } from '../../actions/itemsAction';

class Landing extends Component{

    componentDidMount(){
        this.props.getItems();
    }
    render(){
        const {items} = this.props.item;

        const showItems = (
            <div>
                {items.map(item => {
                    return <Item key={item._id} name={item.name}/>
                })}
            </div>
        );

        return <div className='container'>
            {showItems}
        </div>
    }
}

const mapStateToProps = state => ({
    item: state.item
});
export default connect(mapStateToProps, {getItems} )(Landing);