import express from 'express';
import route from './routes/index-route';


const server = express();

server.use(route);

export default server;
