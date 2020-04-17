import React from 'react';

class SearchBar extends React.Component { // component that takes the user input and sends it to the App component 
    state = { term : ''};
    
    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term); // we call a method from the App component using props and send searched term as an argument
    }

    render(){
        return (
            <div className="ui segment search-bar">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text"
                            value={this.state.term} 
                            onChange={(e) => this.setState({ term : e.target.value})} /> 
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;