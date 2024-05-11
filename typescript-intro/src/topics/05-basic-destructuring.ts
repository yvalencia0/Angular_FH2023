interface AudioPlayer{
    audioVolume:number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer ={
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

//Forma normal, sin destructuración es bastante tedioso acceder 
console.log('Song', audioPlayer.song);
console.log('Duration', audioPlayer.songDuration);


//Destructuring

const {song} = audioPlayer;
console.log({song});

//Si existe una variable con el nombre de la propiedad que deseo destructurar
//se puede cambiar el nombre a la propiedad agregando : como si le fueramos a asignar un tipo de dato

const author = 'Victor Manuele';
const { details} = audioPlayer;
const { author:authorAudioPlayer} = details;
console.log({authorAudioPlayer});

//Tambien podría hacerse en una sola linea de codigo de la siguiente manera
const { audioVolume: volume, details: {author:author2} } = audioPlayer;
console.log({author2});


const dbz:string[] = ['Goku', 'Vegeta', 'Trunks'];

console.log(dbz[3] || 'Not Found');

const [, , trunks]:string[] = ['Goku', 'Vegeta', 'Trunks'];

console.log({trunks});

export{};