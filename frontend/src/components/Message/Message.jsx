import './Message.scss';

function Message({ message }) {
  const messageParsed = JSON.parse(message);
  return <div className="Message">{messageParsed.body}</div>;
}

export default Message;
