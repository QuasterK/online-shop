import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addToCart} from "../../actions/itemsAction";
import {withRouter, Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class Item extends Component{
    constructor(props){
        super(props);
        const {name, price, category, brand, id, color} = this.props;
        this.state={
            name,
            img: name,
            price,
            category,
            brand,
            id,
            color
        }
    }
    addToCart = e =>{
        const {item, addToCart} = this.props;

        // eslint-disable-next-line
        const searchingItem = item.items.find( item =>{
           if(item._id === e.target.id){
               return item
           }
        });
        addToCart(searchingItem)
    };

    render(){

        const {name, price, brand, img, id, color, category} = this.state;
        const image = require('../../images/' + img + '/1.jpg');
        const {isAuth} = this.props.auth;

        const guest = (
            <div className="col mt-2 d-block text-center" tabIndex="0" data-toggle="tooltip" title="You have to be loged in to items add to cart">
                 <button className="btn btn-block bg-dark text-white" type="button" >Add to cart</button>
            </div>
        );

        const logedin = (
            <button type="button" className='btn btn-block bg-dark text-white rounded mx-auto d-block' onClick={e => this.addToCart(e)} id={id}>Add to cart</button>
        );

        return (

            <div className="col mb-4 d-flex flex-column justify-content-center" style={{"boxSizing": "border-box", "maxWidth" : "200px", "maxHeight": "420px", "minWidth": "200px", "minHeight": "320px"}}>
                <div className="row">
                    <Link to={`/get/${id}`}>
                        <img width="200px" height="200px" src={image} alt={name} className="img-responsive rounded mx-auto d-block"/>
                    </Link>
                </div>
                <div className="row ">
                    <p className='col m-0 p-0 text-center d-block font-weight-bold'>{name}</p>
                </div>
                <div className="row">
                    <p className='col m-0 p-0 text-center d-block font-weight-bold'> Category: {category}</p>
                </div>
                <div className="row">
                    <p className='col m-0 p-0 text-center d-block font-weight-bold'> Color: {color}</p>
                </div>

                <div className="row">
                    <p className='col m-0 p-0 text-center d-block font-weight-bolder'>Brand: {brand}</p>
                </div>
                <div className="row">
                    <p className='col m-0 p-0 text-center d-block text-danger font-weight-bold'>Price: {price} $</p>
                </div>
                <div className="row">
                    {isAuth? logedin : guest}
                </div>
            </div>

        )
    }
}

const mapStateToProps = state =>{
    return {
        auth: state.auth,
        item: state.item
    }
};

Item.propTypes = {
  addToCart: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired

};

export default connect(mapStateToProps, {addToCart})(withRouter(Item));
