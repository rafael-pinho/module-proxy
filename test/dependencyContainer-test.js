const assert = require('assert');

describe('dependency container', function() {
    it('should have dependencies resolved', function(done) {
        const configuration = require('../lib/configuration.js')(),
              container = require('../lib/dependencyContainer.js');
        
        configuration.set
            .when('testing').load('../lib/configuration.js');
        container.resolve(configuration.get());

        let dep = container.load('testing');
        assert(dep);
        assert(Object.keys(dep()), [ 'get', 'set' ]);
        done();
    });
});
