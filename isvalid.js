
function fizzBuzz(number){
    if((number % 3) === 0){
        return false;
    }
    if ((number % 5) === 0){
        return false;
    } else {
        return true;
    }    
}

// Returns an array with the indexes of the two associated characters
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

// Returns true if the closing order of parentheses is correct
function checkDifference(arrayOfTwoIndex){
    if (arrayOfTwoIndex.length != 0){
        const difference = arrayOfTwoIndex[1] - arrayOfTwoIndex[0]
        return  ( difference === 1) || fizzBuzz(difference)
    } else {
        return false
    }
}



const PARENTHESIS = "()";
const BRACES = "{}";
const SQUARE_BRACKETS = "[]";

export function isValid(string){
    
    if ((string.length % 2) === 0){

        if ((string.length === 2) && (      // condition to eliminate a string of two characters of different types
            (string === PARENTHESIS ) ||
            (string === BRACES ) ||
            (string === SQUARE_BRACKETS )
        )){
            return true
        }    

        const parenthesisIndex = twoSum(string, PARENTHESIS);
        if (checkDifference(parenthesisIndex)){
            return true
        }
        const bracesIndex = twoSum(string, BRACES);
        if (checkDifference(bracesIndex)){
            return true
        }
        const squareBracketsIndex = twoSum(string, SQUARE_BRACKETS);
        if (checkDifference(squareBracketsIndex)){
            return true
        }
        else {
            return false
        }

    } else {
        
        return false
    }
}





