export default class Champion {
    constructor() {
        this.name = "";
        this.title = "";
        this.types = [];

        this.maxLife = 0;
        this.life = 0;
        this.maxMana = 0;
        this.mana = 0;
    }

    static revive(object) {
        if (object === null || typeof object !== 'object') {
            return null;
        }

        let champ = new Champion();

        for (let property in object) {
            if (champ.hasOwnProperty(property)) {
                champ[property] = object[property];
            }
        }

        return champ;
    }
}
