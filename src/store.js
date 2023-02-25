
class Store {
    constructor(){}

    add(item) {
        this.item = item;

        localStorage.setItem('data', JSON.stringify(this.item))
    }
}

export default Store