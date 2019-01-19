import React, {Component} from 'react';
import Items from '../itemList/Items';
import Filters from '../filters/Filters';
import MainCarousel from './Carousel';

class Landing extends Component{

    render(){
        return <div className='mt-5 pt-2'>
            <div className="row">
                <div className='container mb-2 d-none d-md-block'>
                    <MainCarousel/>
                </div>
            </div>
            <div className="container">
            <div className='row'>
                <div className='col-md-4 col-lg-3 d-none d-md-block'>
                    <Filters/>
                </div>
                <div className='col-12 col-md-8 col-lg-9'>
                    <Items/>
                </div>
            </div>
            </div>
        </div>
    }
}

export default Landing;