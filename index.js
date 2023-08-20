// input type should be string
// input should not be empty
// input may have line breaks and punctuation
// output should be an array containing from 0 to 3 elements and elements should be lowercase
function top_3_words(text) {
    if(typeof text !== 'string') throw new Error('Input type should be string');

    const sanitizedText = text.replace(/[^\w\s']/g, '').replace(/\s\s+/g, ' ').trim(); // add .toLowerCase() to fix text case2

    if(!sanitizedText.length) return [];

    const frequency = {};
    sanitizedText.split(' ').map((word) => {
        frequency[word] = (frequency[word] || 0) + 1;
    });

    const wordsIncludingCount = Object.keys(frequency).map((word) => {
        return [word, frequency[word]];
    });
    wordsIncludingCount.sort((a, b) => b[1] - a[1]);
    return wordsIncludingCount.slice(0,3).map(value => value[0].toLowerCase());
}
let str = '';

// test case1:
// str = `In a village of La Mancha, the name of which I have
// no desire to call to
// mind, there lived not long since one of those gentlemen that keep a lance
// in the lance-rack, an old buckler, a lean hack, and a greyhound for
// coursing. An olla of rather more beef than mutton, a salad on most
// nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
// on Sundays, made away with three-quarters of his income.`

// test case2: (failed because input is case sensitive but output should be lowercase)
// str = `e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e`

// test case3:
// str = ` //wont won't won't`

console.log(top_3_words(str))