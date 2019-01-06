import React from 'react';

class Navbar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isAuthenticated: false,
        }
    }
    render(){
        const {isAuthenticated} = this.state;

        const guestLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" to="/register">
                        Sign Up
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" to="/login">
                        Login
                    </a>
                </li>
            </ul>
        );

        const LogInLinks = (
            <div>
                it will be created soon
            </div>
        );

        return(
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
                <div className="container">
                    <a className="navbar-brand text-white" to="/">
                        Online-shop
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#mobile-nav"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="mobile-nav">
                        {isAuthenticated ? LogInLinks : guestLinks}
                    </div>
                </div>
            </nav>
        )

    };
}

export default Navbar;