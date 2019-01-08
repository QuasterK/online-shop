import React, {Component} from 'react';
import Categories from './Categories';
import Brands from "./Brands";
import Colors from "./Color";
import Prices from "./Price";
import Sizes from "./Size";

class Filter extends Component{
    render() {
        return <div className='container'>
            <Categories/>
            <p>Filter by:</p>
            <Prices/>
            <Colors/>
            <Brands/>
            <Sizes/>
            <button>Filter</button>
        </div>
    }
}

export default Filter;