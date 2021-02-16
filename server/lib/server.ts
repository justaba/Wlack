import Express, { Application } from 'express';
import * as socket from 'socket.io';
import bodyParser from 'body-parser';
import cors from 'cors';
import api from './route/api';

const app: Application = Express();
const PORT = 3888;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/api', api);

const server = app.listen(PORT, () => {
    console.log(`Server runnning on ${PORT}`)
});

const io = new socket.Server(server, {cors: { origin: '*'}});


io.on('connection', (socket: socket.Socket) => {
    console.log('connect')
    socket.on("send message", (msg: any) => {
        socket.broadcast.emit("get message", msg)
    })
})
