const helloWorld = () => {
    const TWO = Math.floor(Math.E)
    const THREE = Math.floor(Math.PI)
    const FOUR = Math.ceil(Math.PI)
    const ZERO = TWO - TWO
    const ONE = THREE - TWO
    const SPACE = Math.pow(TWO,FOUR+ONE)
    const A = SPACE + SPACE + ONE
    const a = A + SPACE
    let buf = new Array(THREE*FOUR).fill(ZERO)
    let i = ZERO
    buf[i++] = A + FOUR + THREE
    buf[i++] = a + FOUR
    buf[i++] = a + FOUR + FOUR + THREE
    buf[i++] = a + FOUR + FOUR + THREE
    buf[i++] = a + FOUR + FOUR + THREE + THREE
    buf[i++] = SPACE
    buf[i++] = a - (FOUR + FOUR + TWO)
    buf[i++] = a + FOUR + FOUR + THREE + THREE
    buf[i++] = a + FOUR + FOUR + THREE + THREE + THREE
    buf[i++] = a + FOUR + FOUR + THREE
    buf[i++] = a + THREE
    buf[i] = SPACE + ONE

    //console.log(buf)
    return String.fromCharCode.apply(null, buf)
  }

console.log(helloWorld() === 'Hello World!')