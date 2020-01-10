import React, { Component } from "react";

import {connect} from 'react-redux';
import {getTitle, getRate} from "./Actions/MovieActions";
import StarRatingComponent from 'react-star-rating-component';
 

import Stars from './Stars';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            rating: 1
        };
    }
    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue}, ()=> this.props.getRating(this.state.rating));
        ;
      }
    handleChange = e => {
        this.setState({
            text: e.target.value
        }, ()=> this.props.getkeyword(this.state.text));
    }


    render() {

        return (
            <header>
                <input type="text" onChange={this.handleChange} />
                <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={this.state.rating}
          onStarClick={this.onStarClick.bind(this)}
        />
            </header>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
      getkeyword: title => dispatch(getTitle(title)),
      getRating : rating =>dispatch(getRate(rating))
    }
  }
export default connect(null,mapDispatchToProps)(Header);