class Singleton {

    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = new Logger();
        }
    }
  
    getInstance() {
        return Singleton.instance;
    }
  
  }
  
  module.exports = Singleton;