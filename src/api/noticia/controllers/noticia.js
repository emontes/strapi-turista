'use strict'

/**
 *  noticia controller
 */

const { createCoreController } = require('@strapi/strapi').factories

module.exports = createCoreController('api::noticia.noticia', ({ strapi }) => ({
  // Method 1: Creating an entirely custom action
  async exampleAction(ctx) {
    try {
      ctx.body = 'ok'
    } catch (err) {
      ctx.body = err
    }
  },

  async create(ctx) {
    // some logic here
    console.log('Antes del Create')
    const response = await super.create(ctx)
    // some more logic
    console.log('Después del create response')

    return response
  },

  async update(ctx) {
    // some logic here
    console.log('Antes del update')
    const response = await super.update(ctx)
    // some more logic
    console.log('Después del update')

    return response
  },
}))
