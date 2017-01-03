import React, { Component } from 'react';
import MessageData from './MessageData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    $.ajax({
      url: '/api/messages',
      data: {
        message: this.state.input
      },
      success: function(data) {
        this.setState({ messages: data.messages })
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
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name='input'
          value={ this.state.input }
          placeholder="Chat here"
          onChange={ this.handleInput }
          required
        />
        <input type="submit"/>
        </form>
        { showMessages }
      </div>

    )
  };
};

export default App;
