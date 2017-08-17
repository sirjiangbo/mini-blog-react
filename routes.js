'use strict';

const index = require('./route/index');
const admin = require('./route/admin');

module.exports = {
    routes: [
        index,
        admin
    ]
};
