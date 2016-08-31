//instead of write the entire path to file put only the alias you give to that path
require('./configuration.js');
const moduleProxy = require('module-proxy'),
      order = moduleProxy.load('order'),
      product = moduleProxy.load('product');
      
console.log(order.calculateOrderValue(product.get(1), product.get(2)));