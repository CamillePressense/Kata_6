const string = "()";
const string2 = "()[]{}";
const string3 = "(]";
const string4 = "([])";
const string5 = ")([])";
const string6 = "([{]";

function stringToArray(string){
    let array = [];
    for (let char of string){
        array.push(char)
    }
    return array
}


const OPEN_PARENTHESIS = "(";
const CLOSED_PARENTHESIS = ")";

const OPEN_BRACE = "{";
const CLOSED_BRACE = "}";

const OPEN_SQUARE_BRACKET = "[";
const CLOSED_SQUARE_BRACKET = "]";

function checkClosingParenthesis(array){
     return array.includes(CLOSED_PARENTHESIS)     
}
function checkClosingBraces(array){
     return array.includes(CLOSED_BRACE)     
}
function checkClosingSquareBracket(array){
     return array.includes(CLOSED_SQUARE_BRACKET)     
}


export function isValid(string){
    const array = stringToArray(string);
    const close = (char) => char === CLOSED_PARENTHESIS;
    const open = (char) => char === OPEN_PARENTHESIS;
    let result = [];

    if (array.includes(OPEN_PARENTHESIS)){
        if (checkClosingParenthesis(array)){
            let openIndex = (array.findIndex(open))
            let closeIndex = (array.findIndex(close))
            if (((closeIndex - openIndex) % 2) === 0){
                result.push(true);
            }
        } else {
            result.push(false);
        }
    }

    if (array.includes(OPEN_BRACE)){
        if (checkClosingBraces(array)){
            result.push(true);
        } else {
            result.push(false);
        }
    }

    if (array.includes(OPEN_SQUARE_BRACKET)){
        if (checkClosingSquareBracket(array)){
            result.push(true);
        } else {
            result.push(false);
        }
    }

    if (result.includes(false)){
        return false
    } else {
        return true
    }

}

const str11 = "[]";

//console.log(isValid(str11))
console.log(isValid(string2))