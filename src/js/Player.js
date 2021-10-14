export class Player {
    name = 'Name'
    game = 'Game'

    constructor(name, game) {
        this.name = name
        this.game = game
    }

    log() {
        console.log(this.name)
        console.log(this.game)
    }
}
