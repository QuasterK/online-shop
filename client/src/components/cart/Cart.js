import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";


class Cart extends Component{
    render(){
        return <div/>
    }
}

Cart.propTypes = {
    auth: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired

};

const mapStateToProps = state =>{
    return {
        auth: state.auth,
        item: state.item
    }
};

export default connect(mapStateToProps, {})(Cart);