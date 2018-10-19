
import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            value: '',
        };
    }

    render() {
        return(
            <div>
                <input onChange={e => {this.setState({value: e.target.value})}} value={this.state.value}/>
                <p>This is the value shit : {this.state.value}</p>
            </div>
        );
    }
}

export default SearchBar;