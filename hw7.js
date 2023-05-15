const characters = 'abcdefghijklomnoqrstuvwyz1234567890';

function generateKey(passLength, characters) {
    const splitted = characters.split('');
    let result = [];
    for (let i = 0; i < passLength; i++) {
        result.push(splitted[Math.floor(Math.random() * splitted.length + 1)])
    } return console.log(result.join(''));
}