class Player {
    constructor(name, age){
        this.name = name;
        this.age = age;
        // console.log('calling the constructor method', name);
    }
    goal(){
        console.log('score a goal');
    }
    getTeamName(){
        return 'barca';
        // console.log('Barca');
    }
}

// const player1 = new Player(name);
const player2 = new Player('O body', 20);
// player1.goal()
// player1.club()
// console.log(player1);