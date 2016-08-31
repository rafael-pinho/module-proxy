const container = require('./dependencyContainer.js'),
      { get: configuration, set: resolve  } = require('./configuration.js')();

resolve.done = () => {
    container.resolve(configuration());
};

module.exports = {
    resolve,
    load: container.load
}
