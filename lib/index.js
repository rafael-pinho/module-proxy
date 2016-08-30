const container = require('./dependencyContainer.js'),
      configuration = require('./configuration.js')();

module.exports = {
    resolve: configuration.set,
    done: () => {
        container.resolve(configuration.get());
    },
    load: container.load
}
