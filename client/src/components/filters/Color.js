import React, {Component} from 'react';
import classnames from 'classnames';
import './Colors.scss';
import {connect} from 'react-redux';
import {getColor, deleteColor} from "../../actions/filtersAction";

class Colors extends Component{

    chooseColor = (e) => {
        const {colors, getColor, deleteColor} = this.props;

        if(colors.includes(e.target.id)){
            const array = colors;
            const newArray = array.filter((value) => {
                return value !== e.target.id
            });
            deleteColor(newArray);
        }
        if(!colors.includes(e.target.id)) {
            getColor(e.target.id);
        }

    };

    render(){
        const {colors} = this.props;

        return  <div className="container">
            <div className='h2'>Colors</div>
            <div className={classnames('color', 'yellow', {'chosen' : colors.includes('yellow')})} onClick={(e) => this.chooseColor(e)} id='yellow'/>
            <div className={classnames('color', 'black', {'chosen' : colors.includes('black')})} onClick={(e) => this.chooseColor(e)} id='black'/>
            <div className={classnames('color', 'green', {'chosen' : colors.includes('green')})} onClick={(e) => this.chooseColor(e)} id='green'/>
            <div className={classnames('color', 'red', {'chosen' : colors.includes('red')})} onClick={(e) => this.chooseColor(e)} id='red'/>
        </div>
    }
}

const mapStateToProps = state =>{
    return {
        colors: state.filters.colors

    }
}

export default connect(mapStateToProps, {getColor, deleteColor})(Colors);