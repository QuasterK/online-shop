import React, {Component} from 'react';
import Items from '../itemList/Items';
import Filters from '../filters/Filters'

class Landing extends Component{

    render(){
        return <div className='container'>
            <div className='row'>
                <div className='col col-md-3 d-none d-md-block'>
                    <Filters/>
                </div>
                <div className='col-md-9'>
                    <Items/>
                </div>
            </div>
        </div>
    }
}

export default Landing;