let containerConfiguration,
    dependencies = {};

module.exports = {
    resolve,
    load
}

function resolve(configuration){
    containerConfiguration = configuration;
    
    for(var alias in configuration){
        let dependency = configuration[alias];
        
        dependencies[alias] = {
            singleton: dependency.singleton,
            modules: dependency.singleton
                ? dependency.modules.map(m => require(m))
                : dependency.modules.map(m => ()=> { return require(m) })
        };
    }
}

function load(alias){
    if(dependencies[alias].singleton)
        return dependencies[alias].modules.length == 1 
            ? dependencies[alias].modules[0] 
            : dependencies[alias].modules;
    
    return dependencies[alias].modules.length == 1 
            ? dependencies[alias].modules[0]() 
            : dependencies[alias].modules.map(m => m());  
}