import React, {Component} from 'react';
import 'rc-slider/assets/index.css';
import { Range } from 'rc-slider';


class Prices extends Component{
    constructor(props){
        super(props)

        this.state = {
            min: 0,
            max: 200
        }
    }
    onRangeChange = (priceRange) =>{
      this.setState({
          min: priceRange[0],
          max:priceRange[1]
      })
    };
    render(){
        return (
            <div className="container">
                <div>
                    <Range min={0} max={200} step={10} defaultValue={[0, 200]}  onChange={this.onRangeChange}/>
                </div>
                <div>
                    <span>Min. price : </span> <span>{this.state.min} $</span>
                </div>
                <div>
                    <span>Max. price : </span> <span>{this.state.max} $</span>
                </div>
            </div>
        )
    }
}

export default Prices;