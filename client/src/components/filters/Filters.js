import React, {Component} from 'react';
import Categories from './Categories';
import Brands from "./Brands";
import Colors from "./Color";
import Prices from "./Price";
import Sizes from "./Size";
import {getItemsToShow} from '../../actions/itemsAction';

import {connect} from 'react-redux'

class Filter extends Component{

    sendFilters = e =>{
        e.preventDefault();
        const {items} = this.props.items;
        const {getItemsToShow, filters} = this.props;

        const filter = filters.filter;
        const newFilter = {};

        for(let key in filter){
            if(filter[key].length > 0){
                newFilter[key] = filter[key]
            }
        }
        // eslint-disable-next-line
        const itemsToDisplay = items.filter(item =>{
            if(item.price >= filters.price[0] && item.price <= filters.price[1]) {
                for (let key in newFilter) {
                    if (newFilter[key].indexOf(item[key]) === -1)
                        return false;
                }
                return true;
            }
        });

        getItemsToShow(itemsToDisplay)
    };

    render() {
        return <div className='container'>
            <p>Filter by:</p>
            <Categories/>
            <Prices/>
            <Colors/>
            <Brands/>
            <Sizes/>
            <button onClick={(e) => this.sendFilters(e)}>Filter</button>
        </div>
    }
}

const mapStateToProps = state =>({
    filters: state.filters,
    items: state.item

});

export default connect(mapStateToProps, {getItemsToShow}) (Filter);