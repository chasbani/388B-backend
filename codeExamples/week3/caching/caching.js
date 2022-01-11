const preValues = []

function square(n) {
  let result = 0
  for (let i= 0; i <= n; i++) {
    for (let j=1; j <= n; j++) {
      result += 1
    }
  }
  return result
}
  
  function improvedSquare(n) {
    if (preValues[n] != null) {
      return preValues[n]
    }
    let result = 0
    for (let i= 0; i <= n; i++) {
      for (let j=1; j <= n; j++) {
        result += 1
      }
    }
    preValues[n] = result
    return result
  }

//console.log(square(30000))
//console.log(square(30000))
//console.log(square(30000))
//console.log(square(30000))

//console.log(improvedSquare(30000))
//console.log(improvedSquare(30000))
//console.log(improvedSquare(30000))


function fib(n) {
  if (n <= 2) {
    return 1
  } else {
    return fib(n-1) + fib(n-2)
  }
}

function betterFib(n, prevValues = []) {
  if (prevValues[n] != null) {
    return prevValues[n]
  }
  let result
  if (n <= 2) {
    result = 1
  } else {
    result =  betterFib(n-1, prevValues) + betterFib(n-2, prevValues)
  }
  prevValues[n] = result
  return result
}

console.log(betterFib(50))
console.log(fib(40))