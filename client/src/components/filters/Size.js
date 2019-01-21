import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getFilter, deleteFilter, getToFilter, getNextToFilter, deleteFromFilter} from "../../actions/filtersAction";
import classnames from "classnames";
import PropTypes from "prop-types";

class Sizes extends Component{
    selectSize = e => {
        const {getToFilter, deleteFilter, filters, getNextToFilter, deleteFromFilter, getFilter} = this.props;

        if (filters.filter.size === undefined) {
            getToFilter('size', e.target.id);
            getFilter('size', e.target.id)

        }
        if (filters.filter.size !== undefined && !filters.filter.size.includes(e.target.id)) {
            getNextToFilter('size', e.target.id);
            getFilter('size', e.target.id)
        }

        if (filters.filter.size !== undefined && filters.filter.size.includes(e.target.id)) {
            const array = filters.filter.size;
            const newArray = array.filter((value) => {
                return value !== e.target.id
            });
            deleteFromFilter('size', newArray);
            deleteFilter('size', newArray);
        }
    };

    render(){
        const {size} = this.props;

        return <div className='size'>
            <div className='container bg-light'>
                <div className="row">
                    <p className=" col p-2 mb-0 bg-secondary text-light">
                        Size
                    </p>
                </div>
                <div className="row">
                    <button type="button" className={classnames("btn btn-outline-secondary btn-block", {"bg-dark text-white" : size.includes('small')})} onClick={(e) => this.selectSize(e)} id='small'>Small</button>
                </div>
                <div className="row">
                    <button type="button" className={classnames("btn btn-outline-secondary btn-block", {"bg-dark text-white" : size.includes('medium')})} onClick={(e) => this.selectSize(e)} id='medium'>Medium</button>

                </div>
                <div className="row">
                    <button type="button" className={classnames("btn btn-outline-secondary btn-block", {"bg-dark text-white" : size.includes('large')})} onClick={(e) => this.selectSize(e)} id='large'>Large</button>

                </div>
            </div>
        </div>
    }
}

Sizes.propTypes = {
    sizes: PropTypes.array.isRequired,
    filters: PropTypes.object.isRequired,
    getFilter: PropTypes.func.isRequired,
    deleteFromFilter: PropTypes.func.isRequired,
    getNextToFilter: PropTypes.func.isRequired,
    deleteFilter: PropTypes.func.isRequired,
    getToFilter: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        size: state.filters.size,
        filters: state.filters
    }
};

export default connect(mapStateToProps, {getFilter, deleteFilter, getToFilter, getNextToFilter, deleteFromFilter}) (Sizes);