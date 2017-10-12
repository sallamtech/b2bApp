'use strict';

var dynamo = require('dynamodb'),
    Joi    = require('joi'),
    AWS    = dynamo.AWS;

AWS.config.loadFromPath(process.env.HOME + '/.aws/credentials.json');
dynamo.AWS.config.update({region: "us-east-1"});

var User = dynamo.define('b2b-users', {
  hashKey : 'customerID',
  tableName: 'b2b-users',
  timestamps : true,
  schema : {
      customerID: dynamo.types.uuid(),
      firstName: Joi.string().optional(),
      lastName: Joi.string().optional(),
      phone: Joi.string().optional(),
      email: Joi.string().email().optional(),
      type: Joi.string().optional(),
      companyName: Joi.string().optional(),
      addresses: [
          {
              type: Joi.string().optional(),
              address: Joi.string().optional(),
              city: Joi.string().optional(),
              zip: Joi.string().optional(),
              state: Joi.string().optional(),
              phone: Joi.string().optional(),
          }
      ]
  }
});

module.exports = User
