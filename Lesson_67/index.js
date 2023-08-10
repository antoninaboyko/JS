import express from 'express';
import http from 'http'
import { Server } from 'socket.io';

import fs from 'fs/promises';


const app = express();
const server = http.createServer(app);
const io = new Server(server)
const PORT = 3000;


app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))

app.set('view engine', 'pug');

app.get('/', (req, res) => {
      res.render('index');
});

server.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});

io.on('connection', (socket) => {

  console.log('a user connected');

  socket.on("disconnect", (reason) => {
     console.log(`User disconnect, reason: ${reason}`);
  });

});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on("disconnect", (reason) => {
    console.log(`User disconnect, reason: ${reason}`);
  });
  
  socket.on('send_msg', data =>{
     console.log(data);
  })
});
io.on('connection', (socket) => {
  console.log('a user connected');
  io.emit('new_msg', { name: 'System user', msg: `${socket.id} is connected` });
  socket.on("disconnect", (reason) => {
    console.log(`User disconnect, reason: ${reason}`);
    io.emit('new_msg', { name: 'System user', msg: `${socket.id} is disconnected` });
  });

  socket.on('send_msg', data =>{

    io.emit('new_msg', {name: data.name, msg: data.msg});
  }) });

  app.post('/save-chat', async (req, res) => {
    const messages = req.body.messages;
    if (!messages || !Array.isArray(messages)) {
        return res.json({ success: false, error: 'Invalid data format' });
    }

    const messageText = messages.join('\n');

    try {
        await fs.writeFile('message.txt', messageText);
        console.log('Messages successfully saved');
        return res.json({ success: true });
    } catch (err) {
        console.log('Error saving messages:', err);
        return res.json({ success: false, error: 'Error saving messages' });
    }
});





