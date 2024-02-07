import http from 'http';
import { Server, Socket } from 'socket.io';

const server = http.createServer();

const io = new Server(server, {
    cors: {
        origin: [
            "http://localhost:3000",
            "https://letusc.otkrickey.com",
        ],
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket: Socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('chat message', (msg: string) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
    socket.on('message', (msg: string) => {
        console.log('message: ' + msg);
        io.emit('message', msg);
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});
