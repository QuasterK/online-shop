import React, {Component} from 'react';
import classnames from 'classnames';
import './Colors.scss';
import {connect} from 'react-redux';
import {getFilter, deleteFilter, getToFilter, getNextToFilter, deleteFromFilter} from "../../actions/filtersAction";

class Colors extends Component{

    chooseColor = (e) => {
        const {getToFilter, deleteFilter, filters, getNextToFilter, deleteFromFilter, getFilter} = this.props;

        if (filters.filter.color === undefined) {
            getToFilter('color', e.target.id);
            getFilter('colors', e.target.id)

        }
        if (filters.filter.color !== undefined && !filters.filter.color.includes(e.target.id)) {
            getNextToFilter('color', e.target.id);
            getFilter('colors', e.target.id)
        }

        if (filters.filter.color !== undefined && filters.filter.color.includes(e.target.id)) {
            const array = filters.filter.color;
            const newArray = array.filter((value) => {
                return value !== e.target.id
            });
            deleteFromFilter('color', newArray);
            deleteFilter('colors', newArray);
        }
    };

    render(){
        const {colors} = this.props;

        return  <div className="container mb-2">
            <div className='row'>
                <p className=" col p-2 mb-0 bg-secondary text-light">
                    Color
                </p>
            </div>
            <div className="row">
                <button type="button" className={classnames("btn btn-block text-white", "yellow",{"bg-dark text-white": colors.includes('yellow')})} onClick={(e) => this.chooseColor(e)} id='yellow'>Yellow </button>
            </div>
            <div className="row">
                <button type="button" className={classnames("btn btn-block text-white", "black",{"bg-dark text-white": colors.includes('black')})} onClick={(e) => this.chooseColor(e)} id='black'>Black</button>
            </div>
            <div className="row">
                <button type="button" className={classnames("btn btn-block text-white", "green",{"bg-dark text-white": colors.includes('green')})} onClick={(e) => this.chooseColor(e)} id='green'>Green </button>
            </div>
            <div className="row">
                <button type="button" className={classnames("btn btn-block text-white", "red",{"bg-dark text-white": colors.includes('red')})} onClick={(e) => this.chooseColor(e)} id='red'>Red </button>
            </div>
        </div>
    }
}

const mapStateToProps = state =>{
    return {
        filters: state.filters,
        colors: state.filters.colors

    }
}

export default connect(mapStateToProps, {getFilter, deleteFilter, getToFilter, getNextToFilter, deleteFromFilter})(Colors);