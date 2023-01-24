import React from 'react';

// The lastMessage prop is the last message sent before the current message
// The message prop is the current message being rendered.
const TheirMessage = ({ lastMessage, message }) => {
  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;
  return (
    <div className='message-row'>
      {isFirstMessageByUser && (
        //This div is only rendered if isFirstMessageByUser is true.
        <div
          className='message-avatar'
          style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
        />
      )}
      {message?.attachments?.length > 0 ? (
        <img
          src={message.attachments[0].file} // src attribute set to the first file of the attachments array
          alt='message-attachment'
          className='message-image'
          style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
        />
      ) : (
        <div
          className='message'
          style={{
            float: 'left',
            backgroundColor: ' #CABCDC',
            marginLeft: isFirstMessageByUser ? '4px' : '48px',
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
};

export default TheirMessage;
