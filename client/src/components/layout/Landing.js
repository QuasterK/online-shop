import React, {Component} from 'react';
import Items from '../itemList/Items';
import Filters from '../filters/Filters'

class Landing extends Component{

    render(){
        return <div className='container mt-5 pt-2'>
            <div className='row'>
                <div className='col-md-4 col-lg-3 d-none d-md-block'>
                    <Filters/>
                </div>
                <div className='col-12 col-md-8 col-lg-9'>
                    <Items/>
                </div>
            </div>
        </div>
    }
}

export default Landing;