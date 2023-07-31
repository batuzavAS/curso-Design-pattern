class Digimon {
     showStats(): void {
        throw new Error ('Method not implement')
    }
}

class Beelzemon extends Digimon {
   public showStats(): void {
        console.log("998+ atk");
    }
}

class Galladmon extends Digimon {
   public showStats(): void {
        console.log("999+ atk");
    }
}

class DigimonFactory {
    makeDigimon(): Digimon {
        throw new Error ('Method not implement')
    }
}

class BeelzemonFactory extends Digimon {
    makeDigimon(): Beelzemon {
        return new Beelzemon()
    }
}

class GalladmonFactory extends Digimon {
    makeDigimon(): Galladmon {
        return new Galladmon()
    }
}

function appFactory(digimon: DigimonFactory): void {
    const digi = digimon.makeDigimon()
    digi.showStats()
}

// appFactory(new BeelzemonFactory());


function createFactory(type: 'beelzemon' | 'galladmon') {
    const factories = {
        beelzemon: BeelzemonFactory,
        galladmon: GalladmonFactory
    };

    const factory = factories[type];
    return new factory()
}


appFactory(createFactory('beelzemon'))
appFactory(createFactory('galladmon'))