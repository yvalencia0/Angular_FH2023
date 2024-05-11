let skils: string[] = ['Bash', 'Counter', 'Healing'];

interface Character{
    name: string;
    hp: number;
    skills: string[];
    hometown: string;
    age?: number;
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
    hometown: 'Pradera'
}
export {};