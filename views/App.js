import React, { Component } from 'react';
import BGchange from 'background-color-changer';
import BP from 'babel-polyfill';



export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "John da man"
        },
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        BGchange(document.body, 20, 100)
    }
    render () {
        return (
            <div onClick={this.handleClick}>Hello world!! {this.props.extraValue}
                <p>Hello there {this.state.name}</p>
            </div>
        )        
    }
}