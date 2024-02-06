/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    for (let i = 0; i < str1.length; i++) {
        let found = false; 
        
        for (let j = 0; j < str2.length; j++) {
            if (str1[i] === str2[j]) {
                found = true;
                break;
            }
        }
        
        if (!found) {
            return false; 
        }
    }
    
    return true; 
}

module.exports = isAnagram;
