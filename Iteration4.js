const numbers = [12, 21, 38, 5, 45, 37, 6];


function average(param) {
  sum = 0
  for (var i = 0; i < param.length; i++) {
      sum = sum + param[i]
  }
  console.log(sum / param.length)
}

average(numbers)