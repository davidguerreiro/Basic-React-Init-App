import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDcjC4giR5v65fjStJkPuL3eW_6yoDk7cw';

// Create a new component. This component should produce HTML.
const App  = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    );
}

// Take this component's generated HTML and put it on the page ( in the DOM )
ReactDOM.render(<App />, document.querySelector('.container'));
