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
Code: pigLatin("*&$92%");
Expected Output: 0

Test: "It will add 'ay' to the end of words that begin with a consonant."
Code: pigLatin("w");
Expected Output: "way"


Test: " It recognizes first and/or second letter is a consonant.
Code: pigLatin();
Expected Output: "