 //1. Given the following sentence: Change all of the lowercase letters i, in reference to yourself, to the uppercase I
 // careful not to uppercase the i in the word pair
var sentence = 'When i went to the mall i bought a pair of shoes.';

var sentence = sentence.replace("i", "I");
var sentence = sentence.replace("i", "I");
console.log(sentence); //This is a very static way of doing things but it's the best I could find

//2. The history of JavaScript is interesting but how many times does the letter a appear? Find a way to count both upper and lower case A's

var jsHistory = 'JavaScript, not to be confused with Java, was created in 10 days in May 1995 by Brendan Eich, then working at Netscape and now of Mozilla. JavaScript was not always known as JavaScript: the original name was Mocha, a name chosen by Marc Andreessen, founder of Netscape. In September of 1995 the name was changed to LiveScript, then in December of the same year, upon receiving a trademark license from Sun, the name JavaScript was adopted. This was somewhat of a marketing move at the time, with Java being very popular around then.';

var numA = jsHistory.match(/a/gi).length; //regular expressions look like gibberish at first. There are many and they're hard to learn. Useful though. Maybe something we could go over in class?
console.log("Counting both upper and lowercase letters, there are " +numA+" 'A's in the jsHistory string."); 

//3. Given the following sentence: Uppercase the word scream each time it appears in the sentence

var text = 'I scream, you scream, we all scream for icecream';

var capScream = text.replace(/scream/g, "SCREAM"); //Figured out how to do this! Woot.
console.log(capScream);