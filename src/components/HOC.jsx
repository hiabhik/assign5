import React, { Component } from 'react';
import MovieTitle from './Movie';

class HOC extends Component {
    render() {
        return (
            <>
            <p className='HOC'>Example of Higher Order Component</p>
            <h3>The best anime movie of all time is {this.props.name}</h3>
            <p>Here the name of the movie is given as a prop and is being called out from different component.</p>
            </>
        );
    }
}

export default MovieTitle(HOC);