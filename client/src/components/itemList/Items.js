import React, {Component} from 'react';
import {connect} from 'react-redux';
import Item from './Item';
import { getItems} from '../../actions/itemsAction';

class Landing extends Component{

    componentDidMount(){
        const {getItems} = this.props;
        getItems();
    }

    render(){
        const {itemsToShow} = this.props.item;
        const showItems = (
            <div className="d-flex flex-column align-items-center flex-sm-row justify-content-sm-between flex-sm-wrap">
                {itemsToShow.map(item => {
                    return <Item key={item._id}
                                 name={item.name}
                                 price={item.price}
                                 category={ item.category}
                                 brand={item.brand}
                                 id={item._id}/>
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