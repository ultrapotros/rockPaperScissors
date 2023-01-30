const pi = Math.PI;
const radius = 4;

const circumference = function() {
    const result = radius*2*pi;
    return result;
}

const area = ()=> radius**2*pi;

console.log(area())
console.log(circumference())