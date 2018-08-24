import React, {Component} from 'react';
import Admin from './Admin'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                {this.props.children}
            </div>
        );
    }
}

export default App;
