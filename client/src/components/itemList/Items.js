import React, {Component} from 'react';
import {connect} from 'react-redux';
import Item from '../items/Item';
import { getItems} from '../../actions/itemsAction';

class Landing extends Component{

    componentDidMount(){
        const {getItems} = this.props;
        getItems();
    }

    render(){
        const {itemsToShow} = this.props.item;

        const showItems = (
            <div>
                {itemsToShow.map(item => {
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
    item: state.item,
    filters: state.filters
});
export default connect(mapStateToProps, {getItems} )(Landing);