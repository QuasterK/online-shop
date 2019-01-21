import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addToCart} from "../../actions/itemsAction";
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {getItem} from "../../actions/itemsAction";

class ItemPage extends Component{
    componentDidMount() {
        this.props.getItem(this.props.match.params.id);

    }
    render(){
        const {item} = this.props.item;
        return <div className='bg-primary  mt-5 pt-2'>{item.name}</div>
    }
}

ItemPage.propTypes = {
    getItem: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired

};

const mapStateToProps = state =>{
    return {
        auth: state.auth,
        item: state.item
    }
};

export default connect(mapStateToProps, {getItem, addToCart})(withRouter(ItemPage));