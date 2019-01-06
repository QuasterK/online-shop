import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className='navbar-expand-sm bg-dark text-white mt-5 p-4'>
                <div className="collapse" id="mobile-footer-filter">
                    <span>here will be filter conainer</span>
                </div>

                <button
                    className="navbar-toggler text-white text-right"
                    type="button"
                    data-toggle="collapse"
                    data-target="#mobile-footer-filter"
                >
                    Filter
                </button>
                <div className='text-center'>Copyright &copy; {new Date().getFullYear()} Piotrek</div>

            </footer>
        )
    }
}

export default Footer;