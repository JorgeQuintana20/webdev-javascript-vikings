// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack() {
        return this.strength
    }
    recieveDamage(damage) {
    
        this.health = this.health - damage
    }
}
// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        this.name = name
        this.health = health
        this.strength = strength
    }
    recieveDamage(damage) {
        this.health = this.health - damage
        if(this.health > 0) {
            return `${name} has recieved ${damage} points of damage`
        }
        else {
            return `${name} has died in act of combat`
        }
    }
    battleCry() {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon {}

// War
class War {}
