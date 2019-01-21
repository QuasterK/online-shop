import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getFilter, deleteFilter, getToFilter, getNextToFilter, deleteFromFilter} from "../../actions/filtersAction";

import './Brands.scss';
import classnames from "classnames";
import PropTypes from "prop-types";

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
        const {brands} = this.props;

        return <div className='brands'>
            <div className='container mb-2 '>
                <div className="row">
                    <p className=" col p-2 mb-0 bg-secondary text-light">
                        Brand
                    </p>
                </div>
                <div className="row">
                    <button type="button" className={classnames("btn btn-outline-secondary btn-block", {"bg-dark text-white" : brands.includes('Omega')})} onClick={(e) => this.selectBrand(e)} id='Omega'>Omega</button>

                </div>
                <div className="row">
                    <button type="button" className={classnames("btn btn-outline-secondary btn-block", {"bg-dark text-white" : brands.includes('Apache')})} onClick={(e) => this.selectBrand(e)} id='Apache'>Apache</button>
                </div>
                <div className="row">
                    <button type="button" className={classnames("btn btn-outline-secondary btn-block", {"bg-dark text-white" : brands.includes('Ping Pong')})} onClick={(e) => this.selectBrand(e)} id='Ping Pong'>Ping Pong</button>

                </div>
                <div className="row">
                    <button type="button" className={classnames("btn btn-outline-secondary btn-block", {"bg-dark text-white" : brands.includes('Jings')})} onClick={(e) => this.selectBrand(e)} id='Jings'>Jings</button>


                </div>
                <div className="row">
                    <button type="button" className={classnames("btn btn-outline-secondary btn-block", {"bg-dark text-white" : brands.includes('Hellow')})} onClick={(e) => this.selectBrand(e)} id='Hellow'>Hellow</button>

                </div>
            </div>
        </div>
    }
}

Brands.propTypes = {
    brands: PropTypes.array.isRequired,
    filters: PropTypes.object.isRequired,
    getFilter: PropTypes.func.isRequired,
    deleteFromFilter: PropTypes.func.isRequired,
    getNextToFilter: PropTypes.func.isRequired,
    deleteFilter: PropTypes.func.isRequired,
    getToFilter: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        brands: state.filters.brands,
        filters: state.filters
    }
};

export default connect(mapStateToProps, {getToFilter, deleteFilter, getNextToFilter, deleteFromFilter, getFilter}) (Brands);