'use strict';

var dynamo = require('dynamodb'),
    Joi    = require('joi'),
    AWS    = dynamo.AWS
  /* config = require('../config.json');

    AWS.config.update(config.aws);*/

var Business = dynamo.define('businesses', {
  hashKey : 'businessID',
  tableName: 'businesses',
  timestamps: true,
  schema : {
    businessID: dynamo.types.uuid(),
    ownerUserID: dynamo.types.uuid(),
    name: Joi.string(),
    address: Joi.string(),
    phone: Joi.string().optional(),
    email: Joi.string().email().optional(),
    password: Joi.string(),
    country: Joi.string(),
    city: Joi.string(),
    type: Joi.string(),
    category: Joi.string()
  }
});

 // username, email, password, location (country, city), company type (supplier, buyer, both), first name, last name, company name, phone number.

module.exports = Business;
