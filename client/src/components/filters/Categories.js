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
                        watches
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        books
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        furniture
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        electronics
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Categories;