import React from 'react';

const MyMessage = ({ message }) => {
  // the (message)prop object that contains the message text and any attachments.
  if (message?.attachments?.length > 0) {
    return (
      <img
        src={message.attachments[0].file} // src attribute set to the first file of the attachments array
        alt='message-attachment'
        className='message-image'
        style={{ float: 'right' }}
      />
    );
  }

  // If the message does not have attachments or the attachments length is zero,
  // it returns a div element with the message text.
  return (
    <div
      className='message'
      style={{
        float: 'right',
        maarginRight: '18px',
        color: 'white',
        backgroundColor: ' #3B2A50',
      }}
    >
      {message.text}
    </div>
  );
};

export default MyMessage;
