'use strict';

var dynamo = require('dynamodb'),
    Joi    = require('joi'),
    AWS    = dynamo.AWS
 /*   config = require('../config.json')

AWS.config.update(config.aws)*/


var User = dynamo.define('users', {
  hashKey : 'userID',
  tableName: 'users',
  timestamps: true,
  schema : {
    userID: dynamo.types.uuid(),
    email: Joi.string().email(),
    password: Joi.string(),
    firstName: Joi.string().optional(),
    lastName: Joi.string().optional(),
    phone: Joi.string().optional()
  }
});


module.exports = User
