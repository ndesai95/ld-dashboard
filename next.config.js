const { createPatinaNextPlugin } = require('@upstart/patina-design-system/plugins/nextjs')
const withPatina = createPatinaNextPlugin({
  /** Patina config */
})

module.exports = withPatina({
  /** Next config */
})