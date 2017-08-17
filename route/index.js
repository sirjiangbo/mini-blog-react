'use strict';

module.exports = {
    method: 'GET',
    path: '/',
    handler: (req, reply) => {
        reply.view('index', {});
    }
};