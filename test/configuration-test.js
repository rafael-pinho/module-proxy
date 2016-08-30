const assert = require('assert');

describe('container configuration', function() {
    it('should have an empty object', function(done) {
        const configuration = require('../lib/configuration.js')();
        
        assert(configuration.get());
        assert.deepEqual(configuration.get(), {});
        done();
    });

    it('should have dependencies and alias configured', function(done) {

        function setConfiguration(dependencies){
            const configuration = require('../lib/configuration.js')();

            for(let alias in dependencies){
                let dependency = dependencies[alias];
                    config = configuration.set
                        .when(alias)
                        .load(...dependency.modules)
                        .singleton(dependency.singleton);
            }

            assert.deepEqual(configuration.get(), dependencies);
        }
        
        setConfiguration({ dep1: { singleton: true, modules: [ 'assert' ] } });
        setConfiguration(
            { dep1: { singleton: true, modules: [ 'assert' ] } },
            { dep2: { singleton: true, modules: [ 'assert', 'assert' ] } }
        );
        setConfiguration({ dep1: { singleton: false, modules: [ 'assert' ] } });
        done();
    });
});
