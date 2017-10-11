const RomanNumber = require('./romanNumber');

const YES = "\x1b[32m" + "Yes";
const NO = "\x1b[31m" + "No";
const RESET_COLOR = "\x1b[0m";

const isIt_Null = (num) => num === new RomanNumber(null).toString();
const isIt_EmptyStr = (num) => num === new RomanNumber('').toString();
const isIt_Zero = (num) => num === new RomanNumber(0).toString();
const isIt_I = (num) => new RomanNumber(num).toString() === 'I';
const isIt_III = (num) => new RomanNumber(num).toString() === 'III';
const isIt_IV = (num) => new RomanNumber(num).toString() === 'IV';
const isIt_V = (num) => new RomanNumber(num).toString() === 'V';
const isIt_One = (num) => new RomanNumber(num).toInt() === 1;
const isIt_Three = (num) => new RomanNumber(num).toInt() === 3;
const isIt_InValidFour = (num) => new RomanNumber(num).toInt() === 4;
const isIt_Four = (num) => new RomanNumber(num).toInt() === 4;
const isIt_Five = (num) => new RomanNumber(num).toInt() === 5;
const isIt_MCMLXVIII = (num) => new RomanNumber(num).toString() === 'MCMLXVIII';
const isIt_CLXXIII = (num) => new RomanNumber(num).toString() === 'CLXXIII';
const isIt_MMCMXCIX = (num) => new RomanNumber(num).toString() === 'MMCMXCIX';
const isIt_MMM = (num) => new RomanNumber(num).toString() === 'MMM';
const isIt_10000Roman = (num) => new RomanNumber(num).toString();
const isIt_129 = (num) => new RomanNumber(num).toInt() === 129;
const isIt_Valid = (num) => new RomanNumber('C1X').toString();
const isIt_ValidStrError = (num) => new RomanNumber('error').toString();
const isIt_1582 = (num) => new RomanNumber(num).toInt() === 1582;
const isIt_2080 = (num) => new RomanNumber(num).toInt() === 2080;
const isIt_ValidRomanNumber = (num) => new RomanNumber('MMMMCMXCIX').toString();
const isIt_ValidRomanNumber2 = (num) => new RomanNumber('MMMMDMXCIX').toString();

const funcArr = [
    [null, isIt_Null], ['', isIt_EmptyStr], [0, isIt_Zero], [1, isIt_I], [3, isIt_III], [4, isIt_IV], [5, isIt_V],
    ['I', isIt_One], ['III', isIt_Three], ['IIII', isIt_InValidFour], ['IV', isIt_Four], ['V', isIt_Five],
    [1968, isIt_MCMLXVIII], ['173', isIt_CLXXIII], [2999, isIt_MMCMXCIX], [3000, isIt_MMM], [10000, isIt_10000Roman], ['CXXIX', isIt_129],
    ['C1X', isIt_Valid], ['error', isIt_ValidStrError], ['MDLXXXII', isIt_1582], ['MMLXXX', isIt_2080],
    ['MMMMCMXCIX', isIt_ValidRomanNumber], ['MMMMDMXCIX', isIt_ValidRomanNumber2]
];

testRoman = () => {
    console.log('\033c', 'Testing values for RomanNumber\n');
    funcArr.forEach(element => {
        let testChar = element[0];
        let funcTest = element[1];
        let funcName = funcTest.name.toString().split('_')[1];
        try {
            console.log(`${RESET_COLOR}Is %s %s ?`, testChar, funcName, (funcTest(testChar)) ? YES : NO, `${RESET_COLOR}`);
        }
        catch (e) {
            console.log(`${RESET_COLOR}Is %s %s?`, testChar, funcName, `${RESET_COLOR}`, "\x1b[31mError:", e.message, `${RESET_COLOR}`);
        }
    });
}
testRoman();