import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getFilter, deleteFilter, getToFilter, getNextToFilter, deleteFromFilter} from "../../actions/filtersAction";

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
        return <div className='categories'>
            <div className='container border-bottom'>
                <div className="row">
                    <div className="col h2">
                        Categories
                    </div>
                </div>
                <div className="row">
                    <div className="col" onClick={e =>this.selectCategory(e)} id='usual'>
                        Usual
                    </div>
                </div>
                <div className="row">
                    <div className="col" onClick={e =>this.selectCategory(e)} id='military'>
                        Military
                    </div>
                </div>
                <div className="row">
                    <div className="col" onClick={e =>this.selectCategory(e)} id='minimalist'>
                        Minimalist
                    </div>
                </div>
                <div className="row">
                    <div className="col" onClick={e =>this.selectCategory(e)} id='watches'>
                        Best sellers
                    </div>
                </div>
            </div>
        </div>
    }
}
const mapStateToProps = state => {
    return {
        category: state.filters.category,
        filters: state.filters

    }
};

export default connect(mapStateToProps, {getFilter, deleteFilter, getToFilter, getNextToFilter, deleteFromFilter}) (Categories);