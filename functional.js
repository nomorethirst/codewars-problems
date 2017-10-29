const id = x => x

const curry = f => (...args) => args.reduce(param => x => f(x, param), id)

const flip = f => (a,b) => f(b,a)

const comp2 = (f,g) => x => f(g(x))

const cflip = comp2(curry, flip)

const modulo = (a,b) => a % b

const mod = curry(modulo)

console.log( mod(2)(4) )
// b => 2 % b

// b => a => a % b
// a => a % 2

// a => b => a % b
// b => 2 % b