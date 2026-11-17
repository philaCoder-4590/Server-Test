


class Singleton {

    constructor() {
        if (Singleton.instance) {
            throw new Error('Use Singleton.getInstance() to get the singleton instance.');
        }

        // holds all food items in a pair of information ("food name" , price)
        this.foods = [{ food: "burgers", price: 0} , { food: "pasta", price: 1} , 
            { food: "chickenWings", price: 2} , { food: "pancakes", price: 3} , 
            { food: "fusili", price: 4}];
            
        Singleton.instance = this;
    }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    // returns the "foods" array
    async getAll(){

        return new Promise((resolve, reject) => {
            try {
                resolve(this.foods);
            } catch (error) {
                reject(error);
            }
        });
    }
}


// to export the singleton
const instance = new Singleton();
Object.freeze(instance);
module.exports = instance;