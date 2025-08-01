function twoSum(numbers, target){
    let result = [];

    for (let i=0; i<numbers.length; i++){
        for (let j=0; j<numbers.length; j++){
            if ((numbers[i] + numbers[j+1]) === target){
                if (result.length < 2){
                    result.push(i)
                    result.push(j+1)
                }
            }
        }
    }
    return result
}

const numbers1 = [2, 7, 11, 15];
const target1 = 9;

console.log(twoSum(numbers1, target1));

const numbers2 = [3, 2, 4];
const target2 = 6;
console.log(twoSum(numbers2, target2));

const numbers3 = [3, 3];
const target3 = 6;
console.log(twoSum(numbers3, target3));

const numbers4 = [3, 1, 3];
const target4 = 6;
console.log(twoSum(numbers4, target4));

const numbers5 = [3, 1, 3, 5];
const target5 = 6;
console.log(twoSum(numbers5, target5));