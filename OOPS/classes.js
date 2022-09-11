class Player{
 constructor(name,type){
    this.name = name;
    this.type = type
 }
 introduce(){
    console.log(`Hi iam ${this.name}, I am ${this.type}`)
 }
}

class Wizard extends Player{
    constructor(name,type){
        super(name,type)
    }
    play(){
        console.log(`Weeee i'm a ${this.type}`)
    }
}


const wizard1 = new Wizard('Cassidy','Healer');
const wizard2 = new Wizard('Akhilesh', 'Dark Magic')

console.log(wizard1);
console.log(wizard2.introduce())