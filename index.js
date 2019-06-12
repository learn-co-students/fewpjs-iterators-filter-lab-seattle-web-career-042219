function findMatching (arr, name) {
    return arr.filter(n => {
        return n.toLowerCase() === name.toLowerCase();
    })
}

function fuzzyMatch(list, name) {
    let partial = name.length;
    return list.filter(driver => {
        return driver.slice(0, partial) === name;
    });
}

function matchName(arr, name) {
    return arr.filter(n => {
        return n.name.toLowerCase() === name.toLowerCase()
    })
}
