import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getFilter, deleteFilter, getToFilter, getNextToFilter, deleteFromFilter} from "../../actions/filtersAction";

import './Brands.scss';

class Brands extends Component{

    selectBrand = e => {
        const {getToFilter, deleteFilter, filters, getNextToFilter, deleteFromFilter, getFilter} = this.props;

        if (filters.filter.brand === undefined) {
            getToFilter('brand', e.target.id);
            getFilter('brands', e.target.id)

        }
        if (filters.filter.brand !== undefined && !filters.filter.brand.includes(e.target.id)) {
            getNextToFilter('brand', e.target.id);
            getFilter('brands', e.target.id)
        }

        if (filters.filter.brand !== undefined && filters.filter.brand.includes(e.target.id)) {
            const array = filters.filter.brand;
            const newArray = array.filter((value) => {
                return value !== e.target.id
            });
            deleteFromFilter('brand', newArray);
            deleteFilter('brands', newArray);
        }
    };

    render(){
        return <div className='brands'>
            <div className='container border-bottom'>
                <div className="row">
                    <div className="col h2 ">
                        Brands
                    </div>
                </div>
                <div className="row">
                    <div className="col brand" onClick={e =>this.selectBrand(e)} id='Omega'>
                        Omega
                    </div>
                </div>
                <div className="row">
                    <div className="col brand" onClick={e =>this.selectBrand(e)} id='Apache'>
                        Apache
                    </div>
                </div>
                <div className="row">
                    <div className="col brand" onClick={e =>this.selectBrand(e)} id='Ping Pong'>
                        Ping Pong
                    </div>
                </div>
                <div className="row">
                    <div className="col brand" onClick={e =>this.selectBrand(e)} id='Jings'>
                        Jings
                    </div>
                </div>
                <div className="row">
                    <div className="col brand" onClick={e =>this.selectBrand(e)} id='Hellow'>
                        Hellow
                    </div>
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        brands: state.filters.brands,
        filters: state.filters

    }
}

export default connect(mapStateToProps, {getToFilter, deleteFilter, getNextToFilter, deleteFromFilter, getFilter}) (Brands);