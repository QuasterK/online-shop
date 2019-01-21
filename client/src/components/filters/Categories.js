import React, {Component} from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {getFilter, deleteFilter, getToFilter, getNextToFilter, deleteFromFilter} from "../../actions/filtersAction";
import PropTypes from "prop-types";

class Categories extends Component{
    selectCategory = e => {
        const {getToFilter, deleteFilter, filters, getNextToFilter, deleteFromFilter, getFilter} = this.props;

        if (filters.filter.category === undefined) {
            getToFilter('category', e.target.id);
            getFilter('category', e.target.id)

        }
        if (filters.filter.category !== undefined && !filters.filter.category.includes(e.target.id)) {
            getNextToFilter('category', e.target.id);
            getFilter('category', e.target.id)
        }

        if (filters.filter.category !== undefined && filters.filter.category.includes(e.target.id)) {
            const array = filters.filter.category;
            const newArray = array.filter((value) => {
                return value !== e.target.id
            });
            deleteFromFilter('category', newArray);
            deleteFilter('category', newArray);
        }
    };

    render(){
        const {category} = this.props;

        return <div className='categories'>
            <div className='container mb-2 border-bottom'>
                <div className="row">
                    <p className=" col p-2 mb-0 bg-secondary text-light">
                        Category
                    </p>
                </div>
                <div className="row">
                    <button type="button" className={classnames("btn btn-outline-secondary btn-block", {"bg-dark text-white" : category.includes('usual')})} onClick={(e) => this.selectCategory(e)} id='usual'>Usual</button>

                </div>
                <div className="row">
                    <button type="button" className={classnames("btn btn-outline-secondary btn-block", {"bg-dark text-white" : category.includes('military')})} onClick={(e) => this.selectCategory(e)} id='military'>Military</button>
                </div>
                <div className="row">
                    <button type="button" className={classnames("btn btn-outline-secondary btn-block", {"bg-dark text-white" : category.includes('minimalist')})} onClick={(e) => this.selectCategory(e)} id='minimalist'>Minimalist</button>
                </div>
                <div className="row">
                    <button type="button" className={classnames("btn btn-outline-secondary btn-block", {"bg-dark text-white" : category.includes('best seller')})} onClick={(e) => this.selectCategory(e)} id='best seller'>Best sellers</button>
                </div>
            </div>
        </div>
    }
}

Categories.propTypes = {
    category: PropTypes.array.isRequired,
    filters: PropTypes.object.isRequired,
    getFilter: PropTypes.func.isRequired,
    deleteFromFilter: PropTypes.func.isRequired,
    getNextToFilter: PropTypes.func.isRequired,
    deleteFilter: PropTypes.func.isRequired,
    getToFilter: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        category: state.filters.category,
        filters: state.filters
    }
};

export default connect(mapStateToProps, {getFilter, deleteFilter, getToFilter, getNextToFilter, deleteFromFilter}) (Categories);