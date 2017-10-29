const factors = (n) => {
  let low = 1, high = n
  const factors = []
  while (low <= high) {
    if (n % low === 0) {
      high = n / low
      if (low < high)
        factors.splice(factors.length/2, 0, low, high)
      else if (low === high)
        factors.splice(factors.length/2, 0, low)
    }
    low++
  }
  return factors
}

console.log('1: ', ...factors(1))
console.log()
console.log('2: ', ...factors(2))
console.log()
console.log('3: ', ...factors(3))
console.log()
console.log('4: ', ...factors(4))
console.log()
console.log('12: ', ...factors(12))
console.log()
console.log('15: ', ...factors(15))
console.log()
console.log('36: ', ...factors(36))
console.log()
console.log('42: ', ...factors(42))