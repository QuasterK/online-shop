import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getFilter, deleteFilter, getToFilter, getNextToFilter, deleteFromFilter} from "../../actions/filtersAction";

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
        return <div className='size'>
            <div className='container'>
                <div className="row">
                    <div className="col h2">
                        Size
                    </div>
                </div>
                <div className="row">
                    <div className="col" onClick={e=> this.selectSize(e)} id='small'>
                        Small
                    </div>
                </div>
                <div className="row">
                    <div className="col" onClick={e=> this.selectSize(e)} id='medium'>
                        Medium
                    </div>
                </div>
                <div className="row">
                    <div className="col" onClick={e=> this.selectSize(e)} id='large'>
                        Large
                    </div>
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        size: state.filters.size,
        filters: state.filters

    }
};

export default connect(mapStateToProps, {getFilter, deleteFilter, getToFilter, getNextToFilter, deleteFromFilter}) (Sizes);