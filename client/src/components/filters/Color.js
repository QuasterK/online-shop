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

        return  <div className="container">
            <div className='h2'>Colors</div>
            <div className={classnames('color', 'yellow', {'chosen' : colors.includes('yellow')})} onClick={(e) => this.chooseColor(e)} id='yellow'/>
            <div className={classnames('color', 'black', {'chosen' : colors.includes('black')})} onClick={(e) => this.chooseColor(e)} id='black'/>
            <div className={classnames('color', 'green', {'chosen' : colors.includes('green')})} onClick={(e) => this.chooseColor(e)} id='green'/>
            <div className={classnames('color', 'red', {'chosen' : colors.includes('red')})} onClick={(e) => this.chooseColor(e)} id='red'/>
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