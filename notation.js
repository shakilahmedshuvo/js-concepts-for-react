const person = {
    name: 'Lal Nil Holud mia',
    proffesion: 'Traffic Surgeon',
    age: 39,
    25: 'Summer',
    'son-name': 'Sunny',
    adderss: 'Shahabag',
};

// dot notation
const prof1 = person.proffesion;

// bracket notation
const prof2 = person['proffesion'];
console.log(prof2);
// 
const pName = 'proffesion';
const prof3 = person[pName];
console.log(prof3);
// 
const season = person[25];
console.log(season);

const son = person['son-name']