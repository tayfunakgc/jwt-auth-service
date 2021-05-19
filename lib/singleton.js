
const Jwt = require('./Jwt');

class Singleton {

    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = new Jwt();
        }
    }
  
    getInstance() {
        return Singleton.instance;
    }

}

module.exports = Singleton;