'use strict';

let map2 = {
  '978-1-60309-452-8': 'A Letter to Jo',
  '978-1-60309-459-7': 'Lupus',
  '978-1-60309-444-3': 'Red Panda and Moon Bear',
  '978-1-60309-461-0': 'The Lab',
};

console.log(map2['978-1-60309-444-3']);
delete map2['978-1-60309-444-3'];

for (let key in map2) {
  console.log(`${map2[key]} (${key})`);
}

Object.keys(map2).forEach((key) => {
  if (map2[key] == 'The Lab') {
    delete map2[key];
  }
});

for (let key in map2) {
  console.log(`${map2[key]} (${key})`);
}

map2['978-1-60309-450-4'] = 'They Called Us Enemy';
map2['978-1-60309-453-5'] = 'Why Did We Trust Him?';

for (let key in map2) {
  console.log(`${map2[key]} (${key})`);
}
let seekKey: string = '478-0-61159-424-8';

if (map2.hasOwnProperty(seekKey)) {
  console.log(
    `There is an associated value with key ${seekKey} its value is ${map2[seekKey]}`
  );
} else console.log(`There is not associated value with key ${seekKey}`);

console.log(map2['978-1-60309-453-5']);
