import http from 'http';
import { Server, Socket } from 'socket.io';
import { config } from './config';

const server = http.createServer();

const io = new Server(server, {
    cors: {
        origin: [
            "http://localhost:3000",
            "http://letusc-api.otkrickey.com",
            "https://letusc-api.otkrickey.com",
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

server.listen(config.server.port, () => {
    console.log(`listening on *:${config.server.port}`);
});
