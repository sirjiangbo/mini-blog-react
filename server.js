'use strict';

const path = require('path');
const hapi = require('hapi');
const vision = require('vision');
const ejs = require('ejs');
const inert = require('inert');
const config = require('./config');
const routes = require('./routes').routes;
const server = new hapi.Server();

require('./database');

server.connection({
    host: config.host,
    port: config.port
});

server.register(vision, err => {
    if(err) {
        console.error(err);
        return false;
    }
    server.views({
        engines: {ejs: ejs},
        relativeTo: __dirname,
        path: 'public/views'
    });
    routes.forEach(route => {
        server.route(route);
    });
});

server.register(inert, err => {
    if(err) {
        console.error(err);
        return false;
    }
    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: path.join(__dirname, 'public'),
                listing: true
            }
        }
    });
});

server.start(err => {
    if(err) {
        console.err(err);
    }
    server.log('info', 'Server running at: ' + server.info.uri);
});