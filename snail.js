snail = function(a) {
    const RIGHT=0, DOWN=1, LEFT=2, UP=3
    let x = 1, y = 1, len = a.length, ret = [], start = 0, stop = len*len-1, state = RIGHT
    // enclose array in border of nulls
    a.unshift(Array(len+1).fill(null))
    a.push(Array(len+1).fill(null))
    for (let i = 1; i < len+1; i++) {
        a[i].unshift(null)
        a[i].push(null)
    }

    do {
        console.log(`a[${y}][${x}] === ${a[y][x]}`)
        if (a[y][x] === null && state === RIGHT) {
            x--
            y++
            state = DOWN
        } else if (a[y][x] === null && state === DOWN) {
            y--
            x--
            state = LEFT
        } else if (a[y][x] === null && state === LEFT) {
            x++
            y--
            state = UP
        } else if (a[y][x] === null && state === UP) {
            y++
            x++
            state = RIGHT
        }
        ret.push(a[y][x])
        a[y][x] = null
        if (state === RIGHT) x++
        else if (state === DOWN) y++
        else if (state === LEFT) x--
        else if (state === UP) y--
    } while (start++ < stop)
    return ret
  }

  let a1 = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
  let a2 = [ [ 1, 2, 3 ], [ 8, 9, 4 ], [ 7, 6, 5 ] ]
  console.log(snail(a1))
  console.log(snail(a2))