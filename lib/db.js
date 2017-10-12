'use strict';

const dynamo = require('../index'),
    Joi    = require('joi'),
    AWS    = dynamo.AWS;

AWS.config.loadFromPath(process.env.HOME + '/.ec2/credentials.json');

module.exports = db
