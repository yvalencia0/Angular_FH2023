export class Person{
/*
    public name: string;
    private address: string;
*/
    constructor(
        public name: string,
        public address: string = 'No Sddress'
        ){
        /*
        this.name = 'Yosimar';
        this.address = 'Cali'
        */
    }
}
const tony = new Person('Yosimar', 'Cali');
console.log(tony);


/*
export class Hero extends Person{
    constructor(
        public alterEgo:string,
        public age:number,
        public realName: string
    ){
         super(realName, 'New York')
    }
}
const ironman2 = new Hero('Yosimar', 25, 'Tony');
console.log(ironman2);
*/



export class Hero {
    //public person: Person;
    constructor(
        public alterEgo:string,
        public age:number,
        public realName: string,
        public person: Person
    ){
        //this.person = new Person(realName);
    }
}

const ironman2 = new Hero('Yosimar', 25, 'Tony', tony);

