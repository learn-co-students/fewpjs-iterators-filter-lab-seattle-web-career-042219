// Code your solution here


function findMatching(array, string) {
    return array.filter(name => {
        return name.toUpperCase() === string.toUpperCase()
    })
}

function fuzzyMatch(drivers, letter) {
    return drivers.filter(name => {
        return name.startsWith(letter)
    })
}

function matchName(drivers, name) {
    return drivers.filter(item => {
        return item.name === name;
    })
}

