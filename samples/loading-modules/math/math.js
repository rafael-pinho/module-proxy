module.exports = {
    sum: (...params) => {
        let sum = 0;

        for(let i = 0; i < params.length; i++)
            sum += params[i];
        
        return sum;
    }
}