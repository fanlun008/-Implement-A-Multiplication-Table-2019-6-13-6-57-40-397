/*
    given I have two numbers like 2 and 4
    when I create Multiplication Table with numbers above, 2 and 4
    Then I should get the formatted Multiplication Table below :
        2*2=4
        2*3=6 3*3=9
        2*4=8 3*4=12 4*4=16
*/

function isValidNumber(start, end) {
    if (isStartLowThanEnd(start, end)) {
        return isNumberInRanger(start, end);
    } else {
        return false;
    }
}

function isNumberInRanger(start, end) {
    if(start > 100  || start < 1) {
        return false;
    }
    if(end > 100 || end < 1) {
        return false;
    }
    return true;
}

function isStartLowThanEnd(start, end) {
    return start <= end;
}

function generateResult(start, end) {
    let result = '';
    for (let i = start; i<=end; i++) {
        for(let j = start; j <= i; j++) {
            result = result + j + '*' + i + '=' + j*i + '  ';
        }
        result += '\n';
    }
    return result;
}

function createMultipTable(start, end) {
    if(isValidNumber(start, end)) {
        return generateResult(start, end);
    } else {
        return null;
    }
}

console.log(createMultipTable(2, 4))