import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';
import classes from './SearchBar.css';
import data from './names.json';

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            query: ''
        }
    }

    
    _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            let playerName = (this.state.query).toLowerCase();
            if (data.hasOwnProperty(playerName)) {
                this.props.update(data[playerName]);
            } else {
                alert("Invalid Player Name");
            }
        }
    }
    handleInputChange = () => {
        this.setState({
                query: this.search.value
            }
        )
    }

    onSubmit = async event => {
        event.preventDefault();
    }
    render() {
        return(
            <form onSubmit={() => this.onSubmit} className={classes.SearchBar}>
                <input
                className={classes.sb_input}
                ref={input => this.search = input}
                type='text'
                onChange={this.handleInputChange}
                onKeyPress={this._handleKeyPress}
                />
            </form>
        )
    }
}

export default SearchBar