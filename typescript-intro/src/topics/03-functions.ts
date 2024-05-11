function addNumbers(a: number, b:number){
    return a + b
}

const addNumbersArrow = (a:number, b:number):string =>{
    return `${a + b}`;
}

function multiply(firstNumber:number, secondNumber?:number, base:number = 2){
    return firstNumber * base;
}


interface Character{
    name:string;
    hp:number;
    showHp: () => void; 
}

const healCharacter = (character:Character, amount:number) =>{
    character.hp += amount;
}

const strider = {
    name: 'Strider',
    hp: 50,
    showHp(){
        console.log(`Puntos de vida ${ this.hp}`)
    }
}

const healCharacterResult = healCharacter(strider, 10);
const multiplyResult:number = multiply(5)
export {};