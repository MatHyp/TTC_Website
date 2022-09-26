'use strict';

/**
 * strefy service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::strefy.strefy');
