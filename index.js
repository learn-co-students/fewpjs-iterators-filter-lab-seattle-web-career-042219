// Code your solution here


function findMatching(drivers, string) {
    return drivers.filter( driver => {
        return driver.toLowerCase() === string.toLowerCase()
    })
}



function fuzzyMatch(drivers, string) {
    return drivers.filter( driver => {
        return driver.toLowerCase().startsWith(string.toLowerCase())
    })
}

function matchName(drivers, string) {
    return drivers.filter(driver => {
        return driver.name.toLowerCase() === string.toLowerCase()
    })
}