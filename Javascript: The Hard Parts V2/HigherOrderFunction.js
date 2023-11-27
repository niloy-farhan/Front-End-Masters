function copyArayMainupulation(array, instruction) {
    let output = [];
    for( let i = 0; i < array.length; i++){
        output.push(instruction(array[i]));
    }
    return output;
}

function multiplyBy2(input){return input * 2};
let myArray = [1, 2, 3, 4, 5];
const result = copyArayMainupulation(myArray, multiplyBy2);
console.log(result);