'use strict';

/**
 * article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::nawigacja.nawigacja', ({strapi}) => ({
    async findOne(ctx) {
        const {slug} = ctx.params;

        const entity = await strapi.db.query('api::nawigacja.nawigacja').findOne({
            where: {slug}
        });
        
        const sanitizedEntity = await this.sanitizeOutput(entity);

        return this.transformResponse(sanitizedEntity);
    }
}));

