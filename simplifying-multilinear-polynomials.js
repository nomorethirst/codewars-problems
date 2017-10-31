const simplify = (poly) => {
    const m = new Map()
    const monos = poly.replace(/[-+/]/g, " $&").split(' ')
    // .split().map( c => c === '+' || c === '-' ? ' ' + c : c )
                        // .join().split(' ')    
    return monos
}
console.log(simplify("-a+5ab+3a-c-2a"))

console.log(simplify("dc+dcba") === "cd+abcd")
console.log(simplify("2xy-yx") === "xy")
console.log(simplify("-a+5ab+3a-c-2a") === "-c+5ab")
console.log(simplify("-abc+3a+2ac") === "3a+2ac-abc")
console.log(simplify("a+ca-ab") === "a-ab+ac")
console.log(simplify("-y+x") === "x-y")
console.log(simplify("y-x") === "-x+y")