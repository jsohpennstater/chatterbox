import React, { Component } from 'react';
import MessageData from './MessageData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.getMessages = this.getMessages.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getMessages() {
    $.ajax({
      url: "api/messages",
      method: "GET"
    })
    .done(data => {
      this.setState({ messages: data.messages });
    });
  }

  handleSubmit() {
    $.ajax({
      url: '/api/messages',
      method: 'POST',
      data: {
        message: this.state.input
      },
      success: function(data) {
        this.setState({ messages: data.messages, input: "" })
      }.bind(this),
      error: function(data) {
      }.bind(this),
      complete: function(data) {
      }.bind(this)
  })

  }

  handleInput(event) {
    let shift = {}
    shift[event.target.name] = event.target.value
    this.setState( shift )
  }

  componentDidMount() {
    setInterval(this.getMessages, 1000)
  }


  render() {
    let showMessages = this.state.messages.map(messageData => {
        return (
          <MessageData
          key={messageData.id}
          id={messageData.id}
          body={messageData.body}
          />
        );
      });
    return(
      <div>
        <input
          type="text"
          name='input'
          value={this.state.input}
          placeholder="Chat here"
          onChange={this.handleInput}
          required
        />
        <button onClick={this.handleSubmit}>Submit</button>
        {showMessages}
      </div>
    )
  };
};

export default App;
