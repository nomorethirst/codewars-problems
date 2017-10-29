const isValidIP =  s => {
  const octets = s.split('.')               
  if (octets.length !== 4)
    return false
  for (let o of octets) {
    if (o.match(/^0.+/) !== null || o.match(/\s/) !== null)
      return false
    let n = parseInt(o, 10)
    if ( isNaN(n) || n < 0 || n > 255)
      return false
  }
  return true
}
          
console.log(isValidIP('...') === false)
console.log(isValidIP('0.0.0.0') === true);
console.log(isValidIP('255.255.255.255') === true)
console.log(isValidIP('192.168.1.1') === true);
console.log(isValidIP('255.255.255.055') === false);
console.log(isValidIP('') === false);
console.log(isValidIP('...') === false);
console.log(isValidIP('1.2.3') === false);
console.log(isValidIP('-1.2.3.4.5') === false);
console.log(isValidIP('2 .3.4.5') === false);