/*
 * There are 4 possible paths through each section: A, B, AC, and BC.
 * However, the longest of either AC or BC can be discarded, since they both 
 * get you to the same point.  That makes 3 possible paths through each section.
 * Also, since the last section includes C=0, there are only 2 through it.
 * So the total possible paths = 2 * 3^(roadSystem.length - 1), 2 * 3^(4-1) = 54.
 * So a (probably) naive implementation will create all of them with their sum
 * total times, and return the one with the smallest time.
 */

const A="A", B="B", C="C" 

const totalTime = (path) => path.map( e => e[1] ).reduce( (sum, cur) => sum + cur )

const startState = (path) => path[0][0] === A ? A : B

const endState = (path) => {
  if (path[path.length-1][0] === C)
    return path[path.length-2][0] === A ? A : B
  return path[path.length-1][0] === A ? A : B
}

const threePathsInSection = (section) => {
  const paths = [[],[],[]]
  
  // first path is A
  paths[0].push([A,section[0]])
  
  // second path is B
  paths[1].push([B,section[1]])
  
  // third path is min(AC, BC)
  const AC = section[0] + section[2]
  const BC = section[1] + section[2]
  if (AC < BC) {
    paths[2].push([A,section[0]])
  } else {
    paths[2].push([B,section[1]])
  }
  paths[2].push([C,section[2]])
  return paths
}

const optimalPath = (roadSystem) => {
  const paths = threePathsInSection(roadSystem.splice(0,1))
  while (roadSystem.length > 0) {
    for (let path of paths) {
      let three = threePathsInSection(roadSystem.splice(0,1))
      // map new paths onto old by state
      for (let each of three) {
        
      }
      
    }
    paths = threePathsInSection(roadSystem.splice(0,1))
  }
}