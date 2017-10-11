const RomanNumber = require('./romanNumber');

const isItNull = (num) => num === new RomanNumber(null).toString();
const isItEmptyStr = (num) => num === new RomanNumber('').toString();
const isItZero = (num) => num === new RomanNumber(0).toString();
const isItI = (num) => new RomanNumber(num).toString() === 'I';
const isItIII = (num) => new RomanNumber(num).toString() === 'III';
const isItIV = (num) => new RomanNumber(num).toString() === 'IV';
const isItV = (num) => new RomanNumber(num).toString() === 'V';
const isItOne = (num) => new RomanNumber(num).toInt() === 1;
const isItThree = (num) => new RomanNumber(num).toInt() === 3;
const isItInValidFour = (num) => new RomanNumber(num).toInt() === 4;
const isItFour = (num) => new RomanNumber(num).toInt() === 4;
const isItFive = (num) => new RomanNumber(num).toInt() === 5;
const isItMCMLXVIII = (num) => new RomanNumber(num).toString() === 'MCMLXVIII';
const isItCLXXIII = (num) => new RomanNumber(num).toString() === 'CLXXIII';
const isItMMCMXCIX = (num) => new RomanNumber(num).toString() === 'MMCMXCIX';
const isItMMM = (num) => new RomanNumber(num).toString() === 'MMM';
const isIt10000Roman = (num) => new RomanNumber(num).toString();
const isIt129 = (num) => new RomanNumber(num).toInt() === 129;
const isItValid = (num) => new RomanNumber('C1X').toString();
const isItInValidStrError = (num) => new RomanNumber('error').toString();
const isIt1582 = (num) => new RomanNumber(num).toInt() === 1582;
const isIt2080 = (num) => new RomanNumber(num).toInt() === 2080;
const isItValidRomanNumber = (num) => new RomanNumber('MMMMCMXCIX').toString();
const isItValidRomanNumber2 = (num) => new RomanNumber('MMMMDMXCIX').toString();

const funcArr = [
    [null, isItNull], ['', isItEmptyStr], [0, isItZero], [1, isItI], [3, isItIII], [4, isItIV], [5, isItV],
    ['I', isItOne], ['III', isItThree], ['IIII', isItInValidFour], ['IV', isItFour], ['V', isItFive],
    [1968, isItMCMLXVIII], ['173', isItCLXXIII], [2999, isItMMCMXCIX], [3000, isItMMM], [10000, isIt10000Roman], ['CXXIX', isIt129],
    ['C1X', isItValid], ['error', isItInValidStrError], ['MDLXXXII', isIt1582], ['MMLXXX', isIt2080],
    ['MMMMCMXCIX', isItValidRomanNumber], ['MMMMDMXCIX', isItValidRomanNumber2]
];

testRoman = () => {
    console.log('testing...');
    funcArr.forEach(element => {
        let testChar = element[0];
        let funcTest = element[1];
        try {
            console.log(`Is %s %s?`, testChar, funcTest.name, (funcTest(testChar)) ? 'YES' : 'NO');
        }
        catch (e) {
            console.log(`Is %s %s?`, testChar, funcTest.name, e.message);
        }
    });
}
testRoman();