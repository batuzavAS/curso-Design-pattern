// PASO 1
interface Digimon {
    showStats(): void
}

interface Beelzemon extends Digimon {
}

interface Galladmon extends Digimon {
}

// PASO 2
class BeelzemonTypeZ implements Beelzemon {
    public showStats(): void {
        console.log('Versión type 0')
    }
}

class BeelzemonX implements Beelzemon {
    public showStats(): void {
        console.log('versión X')
    }
}

class GalladmonTypeZ implements Galladmon {
    public showStats(): void {
        console.log('versíon de galladmon versión type 0')
    }
}

class GalladmonX implements Galladmon {
    public showStats(): void {
        console.log('versión de galladmon x')
    }
}

// PASO 3
interface DigimonAbstractFactory {
    createBeelzemon(): Beelzemon
    createGalladmon(): Galladmon
}

// PASO 4
class TypeZFactory implements DigimonAbstractFactory {
    public creatBelzemon(): Beelzemon {
        return new BeelzemonTypeZ()
    }

    public createGalladmon(): Galladmon {
        return new GalladmonTypeZ()
    }
}

class XDigimonFactory implements DigimonAbstractFactory {
    public createGalladmon(): Galladmon {
        return new GalladmonX()
    }

    public createBeelzemon(): Beelzemon {
        return new BeelzemonX()
    }
}

function appAbstractFactory(factory: DigimonAbstractFactory): void {
    const beel = factory.createBeelzemon()
    const gallad = factory.createGalladmon()

    beel.showStats()
    gallad.showStats()
}

function createFactory(type: 'x' | 'z'): DigimonAbstractFactory {
    const factories = {
        x: TypeZFactory,
        z: XDigimonFactory,
    }

    const Factory = new factories[type]
    return Factory
}

appAbstractFactory(createFactory('x'))
appAbstractFactory(createFactory('z'))