import React, {Component} from 'react';
import 'rc-slider/assets/index.css';
import { Range } from 'rc-slider';
import {connect} from 'react-redux';
import {changePrice} from "../../actions/filtersAction";


class Prices extends Component{

    onRangeChange = (priceRange) =>{
        const {changePrice} = this.props;
        changePrice(priceRange)
    };
    render(){
        const {price} = this.props;

        return (
            <div className="container">
                <div>
                    <Range min={0} max={200} step={10} defaultValue={[0, 200]}  onChange={e=> this.onRangeChange(e)}/>
                </div>
                <div>
                    <span>Min. price : </span> <span>{price[0]}$</span>
                </div>
                <div>
                    <span>Max. price : </span> <span>{price[1]}$</span>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        price: state.filters.price
    }
}
export default connect(mapStateToProps, {changePrice})(Prices);