import http from 'http';
import { Server, Socket } from 'socket.io';
import { config } from './config';
import { ExtendedLoginEventPayload, LetuscStatusEventPayload, LoginEventPayload, LoginProgressEventPayload } from './models';

const server = http.createServer();

const io = new Server(server, {
    cors: {
        origin: [
            // "http://localhost:3000",
            "http://letusc-api.otkrickey.com",
            "https://letusc-api.otkrickey.com",
        ],
        methods: ["GET", "POST"]
    }
});

const LocalLetuscServer = io.of('/local-letusc-server');

LocalLetuscServer.on('connection', (socket: Socket) => {
    console.log(`a user connected to local-letusc-server: ${socket.id}`);
    socket.on('disconnect', () => {
        console.log('user disconnected from local-letusc-server');
    });

    // status event
    socket.on('status', (data: LetuscStatusEventPayload) => {
        console.log('lls:status: ' + JSON.stringify(data));
        io.emit('status', data);
    });

    // send progress of login
    socket.on('progress', (data: LoginProgressEventPayload) => {
        console.log(`private-${data.client}:progress: ${JSON.stringify(data)}`);
        io.to(`private-${data.client}`).emit('progress', data);
    });
});

io.on('connection', (socket: Socket) => {
    console.log(`a user connected: ${socket.id}`);
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    // message event(global)
    socket.on('message', (msg: any) => {
        if (typeof msg === 'string') {
            msg = JSON.parse(msg);
        } else {
            msg = JSON.stringify(msg);
        }
        console.log('message: ' + msg);

        io.emit('message', msg);
    });

    // login event
    socket.on('login', (data: LoginEventPayload) => {
        // create room
        socket.join(`private-${socket.id}`);
        // send request to local-letusc-server
        const next_payload: ExtendedLoginEventPayload = {
            ...data,
            client: socket.id,
        };
        LocalLetuscServer.emit('login', next_payload);

        console.log(`private-${socket.id}:login: ${JSON.stringify(data)}`);
    });

});

server.listen(config.server.port, () => {
    console.log(`listening on *:${config.server.port}`);
});
