const sum_pairs = (ints, s) => {
  let m = new Map()
  // Hash index of first appearance of each int
  for (let k = 0, len = ints.length; k < len; k++ )
    if (!m.has(ints[k]))
      m.set(ints[k], k)
    else
      if (!m.has(ints[k]+'')) // hash second occurence as string
        m.set(ints[k]+'', k)
        
  for (let i = 0, len = ints.length; i < len; i++) {
    let n = s - ints[i]
    let search = n === ints[i] ? m.get(n+'') : m.get(n)
    if (search !== undefined && search <= i)
      return [ints[search], ints[i]]
  }
  return undefined
}
      
      /*
  // naive implementation - O(n^2) - times out (>12000ms)
  // on ints.length === 10,000,000: possible 100,000,000,000,000 iterations
const sum_pairs = (ints, s) => {
  for (let j = 1; j < ints.length; j++) {
    let n = s - ints[j]
    for (let i = 0; i < j; i++) {
      if (ints[i] === n)
        return [ints[i],ints[j]]
    }
  }
  return undefined
}
    */
const l1= [1, 4, 8, 7, 3, 15];
const l2= [1, -2, 3, 0, -6, 1];
const l3= [20, -13, 40];
const l4= [1, 2, 3, 4, 1, 0];
const l5= [10, 5, 2, 3, 7, 5];
const l6= [4, -2, 3, 3, 4];
const l7= [0, 2, 0];
const l8= [5, 9, 13, -3];


console.log()
console.log(sum_pairs(l1, 8)+"" == [1, 7]+"", "Basic: ["+l1+"] should return [1, 7] for sum = 8");
console.log()
console.log(sum_pairs(l2, -6)+"" == [0, -6]+"", "Negatives: ["+l2+"] should return [0, -6] for sum = -6");
console.log()
console.log(sum_pairs(l3, -7) == undefined, "No Match: ["+l3+"] should return undefined for sum = -7");
console.log()
console.log(sum_pairs(l4, 2)+"" == [1, 1]+"", "First Match From Left: ["+l4+"] should return [1, 1] for sum = 2 ");
console.log()
console.log(sum_pairs(l5, 10)+"" == [3, 7]+"", "First Match From Left REDUX!: ["+l5+"] should return [3, 7] for sum = 10 ");
console.log()
console.log(sum_pairs(l6, 8)+"" == [4, 4]+"", "Duplicates: ["+l6+"] should return [4, 4] for sum = 8");
console.log()
console.log(sum_pairs(l7, 0)+"" == [0, 0]+"", "Zeroes: ["+l7+"] should return [0, 0] for sum = 0");
console.log()
console.log(sum_pairs(l8, 10)+"" == [13, -3]+"", "Subtraction: ["+l8+"] should return [13, -3] for sum = 10");
console.log()