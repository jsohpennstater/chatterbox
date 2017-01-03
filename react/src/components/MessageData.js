import React from 'react';

const MessageData = props => {
  return (
  <div key={ props.key }>
    <p>{ props.body }</p>
  </div>
  );
};

export default MessageData;
