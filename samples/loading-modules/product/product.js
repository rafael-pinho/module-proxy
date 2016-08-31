let products = [
    {id: 1, name: 'Computer', value:900},
    {id: 2, name: 'Smartphone', value:400},
    {id: 3, name: 'Headphone', value:50},
]

module.exports = {
    get: (id) => {
        return products.filter(x => x.id == id);
    }
}
