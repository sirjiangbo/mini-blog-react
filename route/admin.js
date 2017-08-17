'use strict';

module.exports = {
    method: 'GET',
    path: '/admin',
    handler: (req, reply) => {
        reply.view('admin', {});
    }
};