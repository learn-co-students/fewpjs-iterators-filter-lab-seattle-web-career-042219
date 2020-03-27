// Code your solution here
function findMatching(arr, str) {
  return arr.filter(s => {
    return s.toLowerCase() === str.toLowerCase()
  })
}

function fuzzyMatch(arr, str) {
  let letters = str.length
  return arr.filter(s => {
    return s.toLowerCase().slice(0, letters).includes(str.toLowerCase())
  })
}

function matchName(arr, str) {
  return arr.filter(s => {
    return s['name'] === str
  })
}
