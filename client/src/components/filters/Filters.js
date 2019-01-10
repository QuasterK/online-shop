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
                console.log(filter[key])
                newFilter[key] = filter[key]
            }
        }

        const itemsToDisplay = items.filter(item =>{
            for (let key in newFilter) {
                if (newFilter[key].indexOf(item[key]) === -1)
                    return false;
            }
            return true;
        });

        getItemsToShow(itemsToDisplay)
    };

    render() {
        return <div className='container'>
            <Categories/>
            <p>Filter by:</p>
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