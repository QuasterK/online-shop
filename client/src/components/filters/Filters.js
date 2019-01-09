import React, {Component} from 'react';
import Categories from './Categories';
import Brands from "./Brands";
import Colors from "./Color";
import Prices from "./Price";
import Sizes from "./Size";
import {getItemsToShow } from '../../actions/itemsAction';
import {connect} from 'react-redux'

class Filter extends Component{

    sendFilters = e =>{
        e.preventDefault();
        const {items} = this.props.items;
        const {getItemsToShow, filters} = this.props;
        let colors = [];
        filters.colors.length >= 1 ? colors = filters.colors : colors = [];
        let category = [];
        filters.category.length >= 1 ? category = filters.colors : category = [];
        let price = [];
        filters.price.length >= 1 ? price = filters.colors : price = [];
        let size = [];
        filters.size.length >= 1 ? size = filters.colors : size = [];
        let brands = [];
        filters.brands.length >= 1 ? brands = filters.colors : brands = [];

        let newArrayOfItems = items;

        let filtered = newArrayOfItems.filter((item) => {
            return (colors.indexOf(item.color) >= 0
                || category.indexOf(item.category) >= 0
                || size.indexOf(item.size) >= 0
                || brands.indexOf(item.brand) >= 0) ;
        });
        // console.log(itemsToShow)
        // console.log(filtered)
        getItemsToShow(filtered);
    }
    render() {
        return <div className='container'>
            <Categories/>
            <p>Filter by:</p>
            <Prices/>
            <Colors/>
            <Brands/>
            <Sizes/>
            <button onClick={this.sendFilters}>Filter</button>
        </div>
    }
}

const mapStateToProps = state =>({
    filters: state.filters,
    items: state.item

});

export default connect(mapStateToProps, {getItemsToShow}) (Filter);