function findMatching(array, string) {
    return array.filter(driver => {
        return driver.toLowerCase() === string.toLowerCase()
    })
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(driver => {
        return driver.toLowerCase().slice(0, string.length + 1).includes(string.toLowerCase())
    })
}

function matchName(drivers, string) {
    return drivers.filter(driver => {
        return driver.name.toLowerCase() === string.toLowerCase()
    })
}

