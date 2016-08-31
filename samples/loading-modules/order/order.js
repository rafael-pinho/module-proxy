//module-proxy is easier than this
const math = require('../math/math.js');

module.exports = {
    calculateOrderValue: (...products) => {
        return math.sum(...products.map(x => x.quantity * x.value))
    }
}

