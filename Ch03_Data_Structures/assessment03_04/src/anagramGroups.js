/**
 * Return a grouping of words by whether they are anagrams of each other or not
 * @param {array} words to be grouped
 */
function anagramGroups(words) {
    // sort each word
    const wordsMap = new Map();
    for (let word of words) {
        let sortedWord = word.split("").sort().join("");
        let temp = [];
        if (wordsMap.has(sortedWord)) {
            temp = wordsMap.get(sortedWord);
            temp.push(word);
        }
        else
            temp = [word];
        wordsMap.set(sortedWord, temp);
    }

    // set sorted word as a key and put oroginal word in its array
    let solution = [];
    for (let k of wordsMap.keys()) {
        solution.push(wordsMap.get(k));
    }

    // return values of each key as an array
    return solution;
}


console.log(anagramGroups(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']));

module.exports = anagramGroups;
