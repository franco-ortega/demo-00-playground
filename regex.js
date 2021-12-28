// Regular Expressions begin and end with a forward slash /regex/
// Or they can be created with the new RegExp('regex') class

let re = /ab+c/; // a and c with at least one b between them
let re2 = new RegExp('ab*c'); // a and c with zero or more b's between them

const stringOne = 'This is a string with an abc and an exclamation point!';
const stringOneB = 'This is a string with an abbbbbbc and an question mark?';
const stringOneC = 'This is a string with an ac and an question mark?';
const stringTwo = 'This is a string with a colon, commas, and numbers: 1, 2, 3, 4';

// console.log(stringOne);
// console.log(stringOne.replace(re, 'pizza'));

// console.log(stringOneB);
// console.log(stringOneB.replace(re, 'burrito'));

// console.log(stringOneC);
// console.log(stringOneC.replace(re2, 'falafel'));

// console.log(stringTwo);
// console.log(stringTwo.replace(re));


// Escaping
// If you need to use any of the special characters literally (actually searching for a "*", for instance), you must escape it by putting a backslash in front of it. For instance, to search for "a" followed by "*" followed by "b", you'd use /a\*b/ — the backslash "escapes" the "*", making it literal instead of special. 

const asterisk = 'This has an asterisk in between an \'a\' and \'b\' at the end a*b';
const regAsterisk = /a\*b/;

// console.log(asterisk);
// console.log(asterisk.replace(regAsterisk, 'Star'));


// Global
// The "g" after the regular expression is an option or flag that performs a global search, looking in the whole string and returning all matches. It is explained in detail below in Advanced Searching With Flags. 

const asteriskA = 'This has three copies of an asterisk in between an \'a\' and \'b\' at the end a*b a*b a*b';
const regAsteriskGlobal = /a\*b/g;

// console.log(asteriskA.replace(regAsterisk, 'Black Hole'));
// console.log(asteriskA.replace(regAsteriskGlobal, 'Super Nova'));


// GraphQL regex
// .replace(/\s\s+/g, "") // this replaces two or more spaces || replaces a space that is followed by at least one more space, and it will replace all of these spaces with no space, so essentially, it removes any spaces that are at least two-spaces long
// .replace(/ /g, "_") // this replaces one empty space with an underscore, and it may replace every empty space with an underscore

console.log('////////////GRAPHQL regex////////////////////')
const test = 'This is ss ssh      ssss sshss'.replace(/\s\s+/g, "")
console.log(test);

const test2 = 'This is a sentence with a standard single space in between each word.'
console.log(test2.replace(/ /g, "_"))

const test3 = 'This  is  a  sentence  with  multiple      spaces  in  between  each  word.'
console.log(test3.replace(/ /g, "_"))

const test4 = 'String with two dollar signs $ $ and one percentage %';

console.log(test4.replace(/[^a-zA-Z0-9 _-]/, "222")) // replaces first instance of special character
console.log(test4.replace(/[^a-zA-Z0-9 _-]/g, "888")) // replaces all instances of special characters

const test5 = 'http://www.pizza.com';
const test6 = 'http://pizza.com';
const regExPizza = /http:\/\/(?<start>www.)?(?<domain>[a-zA-Z]+)(?<end>\.[a-zA-Z]+)/;

console.log(test5.replace(regExPizza, 'la'));
console.log(test6.replace(regExPizza, 'lu'));

const testMatch5 = test5.match(regExPizza);
const testMatch6 = test6.match(regExPizza);
console.log(testMatch5.groups.domain + testMatch5.groups.end)
console.log(testMatch6.groups.domain + testMatch6.groups.end)


//////////////////////////

const paragraph = `This is a test text.
We     will provide different lines.
For example   this sentence contains spaces and tabs.
Thislinedonotcontainsanyspaceortab.`

const paragraph2 = `Thislinedonotcontainsanyspaceortab.




This is a test text.
We     will   provide different lines.
For example   this sentence contains spaces and tabs.`

console.log(paragraph)
console.log('-----replace first space or new line with <+>-----');
console.log(paragraph.replace(/\s/, '<+>')); // replace first space or new line with <+>

console.log('-----P2: replace first space or new line with <+>-----');
console.log(paragraph2.replace(/\s/, '<+>')); // replace first space or new line with <+>

console.log('-----P2: replace first two-spaces or two-new-lines with <+>-----');
console.log(paragraph2.replace(/\s\s/, '<+>'));

console.log('-----P2: replace every two-spaces and two-new-lines with <+>-----');
console.log(paragraph2.replace(/\s\s/g, '<+>'));

console.log('-----P2: replace all spaces that are two spaces or longer and new lines that are two new lines or longer <+>-----');
console.log(paragraph2.replace(/\s\s+/g, '<+>')); // replace first space or new line with <+>

console.log('-----replace every space and new line with <+>-----');
console.log(paragraph.replace(/\s/g, '<+>')); // replace every space and new line with <+>

console.log('-----replace first space with <+>-----');
console.log(paragraph.replace(/ /, '<+>')); // replace first space with <+>

console.log('-----replace every space with <+>-----');
console.log(paragraph.replace(/ /g, '<+>')); // replace every space with <+>

// console.log(paragraph.replace(/\t/g, 'TAB'));