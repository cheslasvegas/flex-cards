import React, {Component} from 'react';
import CardContainer from "./CardContainer";
import './App.css';


class App extends Component {
    render() {
        return (
            <CardContainer data='../card-data.js'/>
        );
    }
}

export default App;
