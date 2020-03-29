const io = require('socket.io')(process.env.port)
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.port

app.use(cors())

app.get('/get-port', (req, res) => {
  console.log('port requested');
  res.json({port: process.env.port || '3000'})
})

io.on('connection', socket => {
//  socket.emit('chat-message', 'hello');
  console.log('new user connected');
  socket.on('send-chat-message', message => {
    console.log(message);
    socket.broadcast.emit('chat-message', message);
  })
  socket.on('disconnect', function(){
    console.log('user disconnected');
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
