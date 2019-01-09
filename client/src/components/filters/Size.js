import React, {Component} from 'react';

class Sizes extends Component{
    render(){
        return <div className='size'>
            <div className='container'>
                <div className="row">
                    <div className="col h2">
                        Size
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        Small
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        Medium
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        Large
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Sizes;