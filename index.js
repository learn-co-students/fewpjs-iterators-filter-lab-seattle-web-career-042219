// Code your solution here


const drivers = [
        {
          name: 'Bobby',
          hometown: 'Pittsburgh' },
        {
          name: 'Sammy',
          hometown: 'New York' } ,
        {
          name: 'Sally',
          hometown: 'Cleveland' },
        {
          name: 'Annette',
          hometown: 'Los Angeles' },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay' }
      ];


function findMatching(drivers, string) {
  let matching = drivers.filter(d => {
    return d.toUpperCase() === string.toUpperCase()
  })
  return matching
}

function fuzzyMatch(drivers, string) {
  let numChars = string.length;

  let matchingWords = drivers.filter(d => {
    return d.substring(0,numChars) === string;
  })
  return matchingWords;
}

function matchName(drivers, string){
  let matched = drivers.filter(d => {
    return d["name"] === string;
  })
  return matched; 
}
