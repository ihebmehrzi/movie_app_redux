import React, { Component } from 'react';
import Stars from './Stars';
import AddMovie from './AddMovie';

import { removeMovie } from './Actions/MovieActions';
import { connect } from "react-redux";
import { Link } from "react-router-dom";


class MovieCards extends Component {

  delete = title => {
    this.props.deleteMovie(title);
  };
  render() {
    return (
      <div className="cards">
        <ul >
          {
            this.props.data.movies.filter(el => el.title.toLowerCase().includes(this.props.data.keyword)&&(el.rating >= this.props.data.rating)).map(el => (
              <li className="blocks">
                <img src={el.image} width="300px" height="400px" />
                <h3 >{el.title}</h3>
                <Stars rating={el.rating} rate={false} />
                <button onClick={() => this.delete(el.title)}>Remove</button>
                <AddMovie edit={true} infos={el}/>
                <Link  to={`/movie/${el.id}`}><button>Description</button></Link>

              </li>
            )
            )
          }
        </ul>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    data: state.MovieReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteMovie: title => dispatch(removeMovie(title)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieCards);