'use strict';

/**
 * daylily service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::daylily.daylily');
