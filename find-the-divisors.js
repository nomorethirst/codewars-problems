function* range(start, stop) {
  while (start < stop)
    yield start++
}

const divisors = (n) => {
  let result = []
  
  for (let x of range(2,n))
    if (n % x === 0)
      result.push(x)
      
  if (result.length === 0)
    return `${n} is prime`
  else
    return result
}

const divisorsFunctionalStyle = (n) => {
    let divisors = [...range(2,n)]
                    .filter( x => n % x === 0 )
    return divisors.length === 0 ? `${n} is prime` : divisors
}

console.log(divisors(12)) // should return [2,3,4,6]
console.log(divisors(25)) // should return [5]
console.log(divisors(13)) // should return "13 is prime"

console.log(divisorsFunctionalStyle(12)) // should return [2,3,4,6]
console.log(divisorsFunctionalStyle(25)) // should return [5]
console.log(divisorsFunctionalStyle(13)) // should return "13 is prime"