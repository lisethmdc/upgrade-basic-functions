const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

  function findLongestWord(param) {
    let longestWord = param.sort ((a,b) => b.length - a.length)
    console.log (longestWord[0])
    }

    findLongestWord(avengers)