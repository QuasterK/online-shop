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
                <div className="row">
                    <p className=" col p-2 mb-4 bg-secondary text-light">
                        Price
                    </p>
                </div>
                <div className=" mb-0 text-light">
                    <Range min={0} max={200} step={10} defaultValue={[0, 200]}  onChange={e=> this.onRangeChange(e)}/>
                </div>
                <div className=" row mt-4">
                    <span className="col-6 p-2 mb-4 bg-dark text-light d-block">Min. price : {price[0]}$</span>

                    <span className="col-6 p-2 mb-4 bg-dark text-light d-block">Max. price : {price[1]}$</span>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        price: state.filters.price
    }
};

export default connect(mapStateToProps, {changePrice})(Prices);