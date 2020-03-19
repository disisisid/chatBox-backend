const io = require('socket.io')(3000)

io.on('connection', socket => {
//  socket.emit('chat-message', 'hello');
  console.log('new user');
  socket.on('send-chat-message', message => {
    console.log(message);
    socket.broadcast.emit('chat-message', message);
  })
})
