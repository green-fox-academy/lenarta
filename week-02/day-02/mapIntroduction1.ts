'use strict';

let mymap = {};

if (Object.keys(mymap).length == 0) {
    console.log('The map is empty')
} else console.log('The map is not empty')

mymap[97] = 'a';
mymap[98] = 'b';
mymap[99] = 'c';
mymap[65] = 'A';
mymap[66] = 'B';
mymap[67] = 'C';


for (let key in mymap) {
    console.log(key)
}
Object.keys(mymap).forEach(key => {
    console.log(mymap[key])
})

mymap[68] = 'D';

console.log(Object.keys(mymap).length)

console.log(mymap[99])

delete mymap[97];

console.log(Object.keys(mymap).length)

let seekNumber: number = 100;

if (mymap.hasOwnProperty(seekNumber)) {
    console.log(`There is an associated value with key ${seekNumber} its value is ${mymap[seekNumber]}`)
} else console.log(`There is not associated value with key ${seekNumber}`)
