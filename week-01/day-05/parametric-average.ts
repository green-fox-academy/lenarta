
let input: number = 5;
let sum: number = 0;

for (let i: number = 0; i <= input; i++) {
    sum = sum + i;
    console.log(sum);
}
console.log('Sum: ' + sum + ', ' + 'Average: ' + sum / input);
