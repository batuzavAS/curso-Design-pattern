/**
 * how to implement Singleton?
 * 
 * 1.- Make the constructor private
 * 2.- Crwate a static method who calls the private 
 */

class Singleton {
    static instance: Singleton | undefined;
    version: string;

    constructor(version: string) {
        this.version  = version;
    }

    static getInstance(version: string){
        if(!Singleton.instance) {
            Singleton.instance = new Singleton(version);
        }
        return Singleton.instance;
    }
}

function appSingleton() {
    const singleton1 = Singleton.getInstance('version-1')
    const singleton2 = Singleton.getInstance('version-2')
    const singleton3 = Singleton.getInstance('version-3')

    console.log(singleton1)
    console.log(singleton2)
    console.log(singleton3)

    console.log(singleton1 === singleton2); //true
    console.log(singleton1 === singleton3); //true
}
appSingleton();