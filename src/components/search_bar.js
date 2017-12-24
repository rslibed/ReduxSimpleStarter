import React, { Component } from 'react';

class SearchBar extends Component {
    constructor (props) {
        super(props);
        this.state = {
            term: ''
        }
        this.handleInputeChange = this.handleInputeChange.bind(this);
    }
    handleInputeChange(e) {
        this.setState({
            term: e.target.value
        });
    }
    render () {
        console.log(this.state);
        return (
            <div>
                <input 
                value={this.state.term}
                onChange={ this.handleInputeChange }/>
            </div>
        );
    }
};

export default SearchBar;