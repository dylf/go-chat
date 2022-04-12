var socket = new WebSocket('ws://localhost:8080/ws');

let connect = (onMessage) => {
  console.log('Attempting Connection...');

  socket.onopen = () => {
    console.log('Connection Established');
  };

  socket.onmessage = (msg) => {
    console.log(msg);
    onMessage(msg);
  };

  socket.onclose = (event) => {
    console.log('Connection Closed ', event);
  };

  socket.onerror = (error) => {
    console.log('Error ', error);
  };
};

let sendMsg = (msg) => {
  console.log('sending msg: ', msg);
  socket.send(msg);
};

export { connect, sendMsg };
