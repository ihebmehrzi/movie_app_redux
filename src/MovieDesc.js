import React, { Component } from "react";
import { connect } from 'react-redux';

class MovieDesc extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount = () => {
        this.setState(this.props.allState.movies.filter(
            movie => String(movie.id) === this.props.match.params.id
          )[0]);
      };

    render() {
        return (<div>
            <div>
                <h3>{this.state.title}</h3>
                <img src={this.state.image} width="300px" height="400px" />

            </div>

        </div>)
    }
}



const mapStateToProps = state => {
    return {
        allState: state.MovieReducer
    };
};
export default connect(mapStateToProps)(MovieDesc);