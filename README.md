Describe: pigLatin()

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"

Test: "It recognizes the first letter of a word is a vowel."
Code: pigLatin("a");
Expected Output: "away"

Test: "It recognizes the first letter of a word is a vowel regardless of case."
Code: pigLatin("A");
Expected Output: "Away"

Test: "It ignores non-alphabetical characters since they can't be vowels."
Code: pigLatin("6way");
Expected Output: 0

Test: "It will add 'ay' to the end of words that begin with a consonant."
Code: pigLatin("w");
Expected Output: "way"

Test: "For words that start with a consonant, it will push the first letter to the end of the word."
Code: pigLatin(way)
Expected Output: "ayway"

Test: " It recognizes all consonants at the beginning of a word until a vowel appears and moves all beginning consonants to the end.
Code: pigLatin(change);
Expected Output: angechay

Test: "It will recognize the 'q' consonate and pull the following 'u' vowel with it."
Code: pigLatin(quick)
Expected Output: "ickquay"