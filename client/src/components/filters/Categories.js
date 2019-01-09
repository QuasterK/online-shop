import React, {Component} from 'react';

class Categories extends Component{
    render(){
        return <div className='categories'>
            <div className='container border-bottom'>
                <div className="row">
                    <div className="col h2">
                        Categories
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        All products
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        Usual
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        Military
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        Minimalist
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        Best sellers
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Categories;