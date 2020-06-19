import React from 'react';
import './Messages.css';
import Message from "./Message/Message";
import axios from "axios";

class Messages extends React.Component {
    constructor() {
        super();

        this.state= {
            messages: [],
        };
    }

    componentDidMount() {
        console.log('componentDidmount');
        axios.get('http://localhost:8080/result')
            .then(response => {
                // Assign the result to the state
                this.setState({
                    messages: response.data
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const { messages } = this.state;

        // loading
        if (!messages) return <div className="loading">loading...</div>;

        return (
            <div className="messages">
                {
                    Object.keys(messages).map( key => ( <Message key={key} number={key} text={messages[key]} /> ))
                }
            </div>
        );
    }
}

export default Messages;
