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
        console.log(filters.filter);

        const filter = filters.filter;
        const itemsToDisplay = items.filter(item =>{
            for (let key in filter) {
                if (filter[key].indexOf(item[key]) === -1)
                    return false;
            }
            return true;
        });

        console.log(itemsToDisplay)
        getItemsToShow(itemsToDisplay)

        //////////
        // var filter = {
        //     address: ['ENGLAND', 'Poland'],
        //     name: ['Mark', 'TOM'],
        // };
        // var users = [{
        //     name: 'John',
        //     email: 'johnson@mail.com',
        //     age: 25,
        //     address: 'USA'
        //     },
        //     {
        //         name: 'Tom',
        //         email: 'tom@mail.com',
        //         age: 35,
        //         address: 'England'
        //     },
        //     {
        //         name: 'Mark',
        //         email: 'mark@mail.com',
        //         age: 28,
        //         address: 'England'
        //     }
        // ];
        //
        //
        // users= users.filter(function(item) {
        //     for (let key in filter) {
        //         if (filter[key].indexOf(item[key].toUpperCase()) === -1)
        //             return false;
        //     }
        //     return true;
        // });
        //
        // console.log(users)
        /////////////////////////////
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