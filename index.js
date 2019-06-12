// Code your solution here

function findMatching(drivers, name) {
  return drivers.filter(driver => {
    return driver.toUpperCase() == name.toUpperCase();
  })
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => {
    return driver.substr(0, letters.length) == letters;
  })
}

function matchName(drivers, name) {
  return drivers.filter(driver => {
    return driver.name == name;
  })
}
