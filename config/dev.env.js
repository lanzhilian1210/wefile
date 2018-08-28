'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
console.log(process.env,1);
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
