import React from 'react';
import MessageForm from './MessageForm';
import TheirMessage from './TheirMessage';
import MyMessage from './MyMessage';

const ChatFeed = (props) => {
  // chats: an object that contains all the chats in the application
  // activeChat: the ID of the chat that is currently active
  // userName: the username of the user who is currently logged in
  // messages: an object that contains all the messages in the active chat

  const { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat];

  const renderReadReceipts = (message, isMyMessage) =>
    chat.people.map(
      (person, index) =>
        person.last_read === message.id && (
          <div
            key={`read${index}`}
            className='read-receipt'
            style={{
              float: isMyMessage ? 'right' : 'left',
              backgroundImage:
                person.person.avatar && `url(${person.person.avatar})`,
            }}
          />
        )
    );
  //  renderMessages that maps over the keys of the messages object.For each message,

  const renderMessages = () => {
    const keys = Object.keys(messages);
    // The keys.map() function is used to create a new array of JSX elements, one for each message.
    return keys.map((key, index) => {
      //two arguments: the key of the current message and its index in the array.
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: '100%' }}>
          <div className='message-block'>
            {isMyMessage ? (
              <MyMessage message={message} />
            ) : (
              <TheirMessage
                message={message}
                lastMessage={messages[lastMessageKey]}
              />
            )}
          </div>
          <div
            className='read-receipts'
            style={{
              marginRight: isMyMessage ? '18px' : '0px',
              marginLeft: isMyMessage ? '0px' : '68px',
            }}
          >
            {renderReadReceipts(message, isMyMessage)}
          </div>
        </div>
      );
    });
  };
  // ternary operator to check if the chat is available or not. If it is not available it returns 'Loading...'

  if (!chat) return 'Loading...'; //truthy or falsy, if it is falsy (i.e. null, undefined, etc.)

  return (
    <div className='chat-feed'>
      <div className='chat-title-container'>
        <div className='chat-title'>{chat.title}</div>
        <div className='chat-subtitle'>
          {chat.people.map((person) => {
            return `${person.person.username}`;
          })}
        </div>
      </div>
      {renderMessages()}
      <div style={{ height: '100px' }} />
      <div className='message form container'>
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;
