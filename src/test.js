const RomanNumber = require('./romanNumber');

const isItNull = (num) => num === new RomanNumber(null).toString();
const isItEmptyStr = (num) => num === new RomanNumber('').toString();
const isItZero = (num) => num === new RomanNumber(0).toString();
const isItOneRoman = (num) => num === new RomanNumber(1).toString();
const isItThreeRoman = (num) => num === new RomanNumber(3).toString();
const isItFourRoman = (num) => num === new RomanNumber(4).toString();
const isItFiveRoman = (num) => num === new RomanNumber(5).toString();
const isItOneArabic = (num) => num === new RomanNumber('I').toInt();
const isItThreeArabic = (num) => num === new RomanNumber('III').toInt();
const isItInValidFourArabic = (num) => num === new RomanNumber('IIII').toInt();
const isItFourArabic = (num) => num === new RomanNumber('IV').toInt();
const isItFiveArabic = (num) => num === new RomanNumber('V').toInt();
const isIt1968 = (num) => num === new RomanNumber(1968).toString();
const isIt173 = (num) => num === new RomanNumber('173').toString();
const isIt2999 = (num) => num === new RomanNumber(2999).toString();
const isIt3000 = (num) => num === new RomanNumber(3000).toString();
const isIt10000 = (num) => num === new RomanNumber(10000).toString();
const isIt129Arabic = (num) => num === new RomanNumber('CXXIX').toInt();
const isItInValid = (num) => num === new RomanNumber('C1X').toString();
const isItInValidStrError = (num) => num === new RomanNumber('error').toString();
const isIt1582 = (num) => num === new RomanNumber('MDLXXXII').toInt();
const isIt2080 = (num) => num === new RomanNumber('MMLXXX').toInt();
const isItValidRomanNumber = (num) => num === new RomanNumber('MMMMCMXCIX').toInt();
const isItValidRomanNumber2 = (num) => num === new RomanNumber('MMMMDMXCIX').toInt();

const funcArr = [
    [null, isItNull], ['', isItEmptyStr], [0, isItZero], [1, isItOneRoman], [3, isItThreeRoman], [4, isItFourRoman], [5, isItFiveRoman],
    ['I', isItOneArabic], ['III', isItThreeArabic], ['IIII', isItInValidFourArabic], ['IV', isItFourArabic], ['V', isItFiveArabic],
    [1968, isIt1968], ['173', isIt173], [2999, isIt2999], [3000, isIt3000], [10000, isIt10000], ['CXXIX', isIt129Arabic],
    ['C1X', isItInValid], ['error', isItInValidStrError], ['MDLXXXII', isIt1582], ['MMLXXX', isIt2080],
    ['MMMMCMXCIX', isItValidRomanNumber], ['MMMMDMXCIX', isItValidRomanNumber2]
];

testRoman = () => {
    console.log('testing...');
    testChars.forEach(function (str) {
        try {
            console.log('Is %s null? ', str, (isItNull(str) ? 'Yes' : 'No'));
            console.log('Is %s \'\'? ', str, (isItEmptyStr(str) ? 'Yes' : 'No'));
            console.log('Is %s 0? ', str, (isItZero(str) ? 'Yes' : 'No'));
            console.log('Is %s 0? ', str, (isItOneRoman(str) ? 'Yes' : 'No'));
            console.log('Is %s 0? ', str, (isItThreeRoman(str) ? 'Yes' : 'No'));
            console.log('Is %s 0? ', str, (isItFourRoman(str) ? 'Yes' : 'No'));
            console.log('Is %s 0? ', str, (isItFiveRoman(str) ? 'Yes' : 'No'));
            console.log('Is %s 0? ', str, (isItOneArabic(str) ? 'Yes' : 'No'));
        } catch (e) {
            console.log(e.message);
        }
    });
}
testRoman();