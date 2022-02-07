// methode iterative pour calculer la valeur factorielle d'un nombre

const computeFactorialIt = (n) => {
  let result = 1
  for (let i = 0; 0 < n; i++) {
    result = result * n
    console.log(`the result is ${result}`)
    console.log(`the index is ${i}`)
    console.log(`the number is ${n}`)
    console.log("//////")
    n -= 1
  }
  console.log(result)
}

console.log(computeFactorialIt(5))
console.log("--//--//--//--//--//--//--")

// methode recursive pour calculer la valeur factorielle d'un nombre

const computeFactorialRec = (n) => { 
  if (n == 1) {
    return 1
  }

  return computeFactorialRec(n - 1) * n

}
console.log(computeFactorialRec(5))
console.log("--//--//--//--//--//--//--")

// methode iterative pour calculer la puissance d'un nombre

const computePowerIt = (n, p) => {
  if (n === 0) 
    return 0;
  let result = 1
  for (let i = 0; i < p; i++) {
    p -= 1
    console.log(p)
    result *= (n * n)
  
  }
  console.log(result) 
}
console.log(computePowerIt(5, 2))
console.log("--//--//--//--//--//--//--")

// methode recursive pour calculer la puissance d'un nombre

const computePowerRec = (n, p) => {
  if (p === 1)
    return n

  return computePowerRec(n*n, p - 1) 
}
console.log(computePowerRec(5, 2))
console.log("--//--//--//--//--//--//--")

// methode iterative pour trouver un nombre premier

const isPrimeNumber = (n) => {

  for (let i = 2; i < n; i++) {
    let numberSampleTest = n / i
    if (numberSampleTest % 1 === 0) {
      return console.log(`${n} is not a prime number`)
    }
  }
  return console.log(`${n} is a prime number, congratz !`)

}

console.log(isPrimeNumber(4))
console.log(isPrimeNumber(5))
console.log(isPrimeNumber(13))
console.log(isPrimeNumber(55))
console.log("--//--//--//--//--//--//--")

// methode recursive pour trouver un nombre premier

const isPrimeNumberRec = (n) => {
  let i = 2
  console.log(n)
  while (n-1 > i) {

    if (((n - 1) / i) % 1 === 0) {
      return console.log(`is a prime number, congratz !`)
    }
    return isPrimeNumberRec(n - 1)

  }
  return console.log(`is not a prime number`)
    

}

console.log(isPrimeNumberRec(4))
console.log("--//--//--//--//--//--//--")
console.log(isPrimeNumberRec(5))
console.log("--//--//--//--//--//--//--")
console.log(isPrimeNumberRec(13))
console.log("--//--//--//--//--//--//--")
console.log(isPrimeNumberRec(55))
console.log("--//--//--//--//--//--//--")

