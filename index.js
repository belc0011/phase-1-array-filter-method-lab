const users = ["Monica", "Bryan", "Bob"]

function findMatching(array, string) {
    
    return array.filter(function(element) {
        return element.toLowerCase() === string.toLowerCase()
    })
}

function fuzzyMatch(array, string) {
    const stringLength = string.length;
        return array.filter(function(element) {
            for (let i = 0; i < stringLength; i++) {
               return (element.charAt(i) === string.charAt(i)) 
            }
        })
    }

function matchName(array, string) {
    return array.filter(function(element) {   
        return element.name === string;
    })
}