
const parts = ['wheels', 'wipers', 'horn', 'driver']
const sounds = ['round and round', 'swish-swish-swish', 'beep-beep-beep', 'Move on back']


function songCompile() {
    let randomNum = Math.floor(Math.random()*4);
    let part=parts[randomNum];
    let sound = sounds[randomNum];
    console.log(`The ${part} on the bus go ${sound}, ${sound}, ${sound}, the ${part} on the bus go ${sound} all through the town`)
}

songCompile()

function songCompileMix() {
    let randomNum = Math.floor(Math.random()*4);
    let randomNum1 = Math.floor(Math.random()*4);
    let part=parts[randomNum];
    let sound = sounds[randomNum1];
    console.log(`The ${part} on the bus go ${sound}, ${sound}, ${sound}, the ${part} on the bus go ${sound} all through the town.`)
}

songCompileMix()

