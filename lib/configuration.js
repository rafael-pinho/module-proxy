module.exports = () => {

    let lastAlias,
        dependencies = {};

    function when(alias){
        if(dependencies[alias])
            throw `alias ${alias} is already in use by ${dependencies[alias].modules.toString()}`;

        dependencies[alias] = { singleton: true };
        lastAlias = alias;
        return this;
    }

    function load(...modules){
        if(!modules || !modules.length)
            throw `alias ${alias} has no modules especified`;

        dependencies[lastAlias].modules = modules;
        return this;
    }

    function singleton(isSingleton){
        dependencies[lastAlias].singleton = isSingleton;
        return this;
    }

    return {
        set: {
            when,
            load,
            singleton
        },
        get: () => {
            return dependencies;
        }
    };
}
