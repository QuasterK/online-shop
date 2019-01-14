import React, {Component} from 'react';
import {connect} from 'react-redux';


class Cart extends Component{
    render(){
        return <div/>
    }
}

const mapStateToProps = state =>{
    return {
        auth: state.auth,
        item: state.item
    }
};

export default connect(mapStateToProps, {})(Cart);