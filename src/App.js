import React, { Component } from 'react';
import './App.css';
import Header from "./Header";
import MovieCards from './MoviesCards';
import AddMovie from './AddMovie';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
  }
  }

  add = () => {
    this.props.addNewMovie(this.state);
    this.setState({ show: false });
  };

  searchMovie = movietitle => {
    this.setState({
      keyword : movietitle
    });
  };

  render() {
    return (
      <div className="App">
        <Header/>
        <AddMovie edit={false} />
        <MovieCards/>
        
      </div>
    );
  }

}


export default App;
