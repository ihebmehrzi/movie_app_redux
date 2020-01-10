import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import uuid from "uuid";
import { addMovie , editMovie } from './Actions/MovieActions';
import { connect } from 'react-redux';



class AddMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            image: "",
            title: "",
            rating: 1

        };
    }
    handleShow = () => {
        this.setState({ show: !this.state.show });
    };
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    add = () => {
        this.props.addNewMovie(this.state);
        this.setState({ show: false });
    };
    update =() => {
        this.props.editmovie(this.state);
        this.setState({ show: false }); 
    }
componentDidMount(){
    if(this.props.edit){
        this.setState(this.props.infos)
    }
}

    render() {
        return (
            <div>
                <Button variant="primary" onClick={this.handleShow}>
                  {this.props.edit ? 'edit':'+' } 
        </Button>

                <Modal show={this.state.show} onHide={this.handleShow}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div>
                                <label>Title:</label>
                                <input type="text" value={this.state.title} onChange={this.handleChange} name="title" />
                            </div>
                            <div>
                                <label>Image:</label>
                                <input type="text" value={this.state.image} onChange={this.handleChange} name="image" />
                            </div>
                            <div>
                                <label>Rating:</label>
                                <input type="text" value={this.state.rating} onChange={this.handleChange} name="rating" />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleShow}>
                            Close
            </Button>
                        <Button onClick= {this.props.edit ? this.update:this.add} variant="primary" >
                        {this.props.edit ? 'edit':'add movie' } 
            </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addNewMovie: newMovie => dispatch(addMovie(newMovie)),
        editmovie : editedMovie => dispatch(editMovie(editedMovie)) 
    }
}

export default connect(null, mapDispatchToProps)(AddMovie);