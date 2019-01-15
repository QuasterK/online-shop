import React from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {logoutUser} from "../../actions/authActions";


class Navbar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isAuthenticated: false,
        }
    }
    logout = () =>{
        const {logoutUser} = this.props;

        logoutUser()
    };

    render(){
        const {isAuth, user} = this.props.auth;
        const {itemsInCart} = this.props.item;
        const guestLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/register">
                        Sign Up
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">
                        Login
                    </Link>
                </li>
            </ul>
        );

        const LogInLinks = (
            <ul className="navbar-nav ml-auto">
                <li className='nav-link d-none d-md-block'>
                    Hello, {user.name}
                </li>
                <li className="nav-item">
                    <div className="nav-link" onClick={this.logout}>
                        Log Out
                    </div>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/cart">
                        CART
                        <sup style={{ "fontSize": "14px", "fontWeight": "bolder", "paddingLeft": "3px" }} className="text-danger">{itemsInCart.length}</sup>
                    </Link>
                </li>
            </ul>
        );

        return(
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
                <div className="container">
                    <Link className="navbar-brand text-white" to="/">
                        Online-shop
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#mobile-nav"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="mobile-nav">
                        {isAuth ? LogInLinks : guestLinks}
                    </div>
                </div>
            </nav>
        )

    };
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        item: state.item
    }
};

export default connect(mapStateToProps, {logoutUser})(Navbar);