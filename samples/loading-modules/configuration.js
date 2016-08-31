const moduleProxy = require('module-proxy');

//give alias to full paths and let module-proxy resolve for you
moduleProxy.resolve
    .when('math').load('../math/math.js')
    .when('order').load('../order/order.js')
    .when('product').load('../product/product.js')
    .done();