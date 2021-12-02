const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(param) {
    let sumNumbers = 0
    let sumStrings = 0
    for(var i = 0; i < param.length; i++) {
        if (typeof(param[i]) === 'number') {
            sumNumbers = sumNumbers + param[i]
        } 
        if (typeof(param[i]) === 'string') {
            sumStrings = sumStrings + param[i].length
        }
    }
    console.log(sumNumbers + sumStrings)
}

averageWord(mixedElements)