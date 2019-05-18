const fs = require('fs');

const counts = {
    thing: 0, animal: 0, none: 0, total: 0
}
let thing = [];
let animal = [];
let none = [];

const min = 8;
const max = 134;

fs.readdirSync('.').forEach(function(f){
    if (!(/png/.test(f))) return;

    const firstBytes = fs.readFileSync(f, 'hex').slice(min, max).toString();
    
    switch(f) {
        case '1.png':
        case '11.png':
        case '3.png':
        case '6.png':
        case '7.png':
        case '8.png':
        case '15.png':
        case '17.png':
        case '22.png':
        case '25.png':
        case '26.png':
        case '28.png':
        case '29.png':
        case '30.png':
        case '40.png':
        case '41.png':
        case '42.png':
        case '44.png':
        case '50.png':
        case '52.png':
        case '55.png':
        case '57.png':
        case '60.png':
        case '61.png':
        case '67.png':
        case '71.png':
        case '73.png':
        case '162.png':
        case '163.png':
        case '196.png':
        case '233.png':
        case '236.png':
        case '237.png':
        case '239.png':
        case '249.png':

        case '252.png':
        case '253.png':
            thing.push(firstBytes);
            break;
        case '4.png':
        case '5.png':
        case '2.png':
        case '9.png':
        case '18.png':
        case '19.png':
        case '20.png':
        case '21.png':
        case '23.png':
        case '24.png':
        case '31.png':
        case '32.png':
        case '33.png':
        case '34.png':
        case '35.png':
        case '37.png':
        case '38.png':
        case '39.png':
        case '43.png':
        case '45.png':
        case '46.png':
        case '47.png':
        case '51.png':
        case '56.png':
        case '68.png':
        case '76.png':
        case '78.png':
        
        case '80.png':
        case '119.png':
        case '120.png':
        case '121.png':
        case '170.png':
        case '172.png':
        case '182.png':
        case '183.png':
        case '184.png':
        case '185.png':
        case '186.png':
        case '187.png':
        case '188.png':
        case '189.png':
        case '190.png':
        case '191.png':
            animal.push(firstBytes);
            break;
    }
}); 


fs.readdirSync('.').forEach(function(f){
    if (!(/png/.test(f))) return;

    const firstBytes = fs.readFileSync(f, 'hex').slice(min, max).toString();
        

    let some = false;
    if (thing.indexOf(firstBytes) > -1) {
        thing.push(f);

        counts.thing++;
        counts.total++;
        some = true;
    }

    if (animal.indexOf(firstBytes) > -1) {
        counts.animal++;
        animal.push(f);
        counts.total++;
        some = true;
    }

    if(!some) {
        none.push(f);
        counts.none++
        counts.total++;
    }
});

console.log(none);
//console.log(thing.filter(f => /png/.test(f)));
//console.log(animal.filter(f => /png/.test(f)));


console.log(counts);