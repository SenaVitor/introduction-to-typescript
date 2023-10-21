//Classes

/*
    data modifiers
    public
    private
    protected
*/

class Character {
    protected name?: string;
    readonly strength: number;
    skill: number;

    constructor(name: string, strength: number, skill: number) {
        this.name = name;
        this.skill = skill;
        this.strength = strength;
    }

    attack(): void {
        console.log(`Attack with ${this.strength} points`);
    }
}

//Character: superclass
//Magician: subclass

class Magician extends Character {
    magicPoints: number;
    constructor(
        name: string,
        strength: number,
        skill: number,
        magicPoints: number
    ) {
        super(name, strength, skill);
        this.magicPoints = magicPoints;
    }
}

const p1 = new Character("Ryu", 10, 98);
const p2 = new Magician("Mago", 9, 30, 100);
p1.skill = 12;
p1.attack();
p2.attack();