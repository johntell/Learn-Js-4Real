import React, { Component } from 'react';
import 'babel-polyfill';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            word: "John da man",
            date: new Date().toLocaleTimeString()
        },
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.callApi()
        .then(res => this.setState({
            date: res.express
        }))
        .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/api/hello');
        const body = await response.json();
        return body;
    };

    render () {
        return (
            <div onClick={this.handleClick}>Hello world!! {this.props.extraValue}
                <p>Hello there {this.state.date}</p>
            </div>
        )        
    }
}