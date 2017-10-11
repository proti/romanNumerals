const RomanNumber = require('./romanNumber');
const testChars = [null, '', 0, 1, 3, 4, 5, 'I', 'III', 'IIII', 'IV', 'V', 1968, '173', 2999, 3000, 10000, 'CXXIX', 'C1X', 'error', 'MDLXXXII', 'MMLXXX', 'MMMMCMXCIX', 'MMMMDMXCIX'];

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
const isIt3000= (num) => num === new RomanNumber(3000).toString();
const isIt10000= (num) => num === new RomanNumber(10000).toString();
const isIt129Arabic= (num) => num === new RomanNumber('CXXIX').toInt();
const isItInValid = (num) => num === new RomanNumber('C1X').toString();
const isItInValidStr= (num) => num === new RomanNumber('error').toString();
const isIt1582 = (num) => num === new RomanNumber('MDLXXXII').toInt();
const isIt2080 = (num) => num === new RomanNumber('MMLXXX').toInt();
const isItValidRomanNumber = (num) => num === new RomanNumber('MMMMCMXCIX').toInt();
const isItValidRomanNumber2 = (num) => num === new RomanNumber('MMMMDMXCIX').toInt();

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