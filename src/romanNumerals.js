let RomanNumber = (() => {
    const NUMBERS = [
        { 'roman': 'M', 'arabic': 1000 },
        { 'roman': 'CM', 'arabic': 900 },
        { 'roman': 'D', 'arabic': 500 },
        { 'roman': 'CD', 'arabic': 400 },
        { 'roman': 'C', 'arabic': 100 },
        { 'roman': 'XC', 'arabic': 90 },
        { 'roman': 'L', 'arabic': 50 },
        { 'roman': 'XL', 'arabic': 40 },
        { 'roman': 'X', 'arabic': 10 },
        { 'roman': 'IX', 'arabic': 9 },
        { 'roman': 'V', 'arabic': 5 },
        { 'roman': 'IV', 'arabic': 4 },
        { 'roman': 'I', 'arabic': 1 }
    ];
    //
    return function (numToConvert) {
        this.numToConvert = numToConvert;
        this.result = 0;

        this.toInt = () => {
            NUMBERS.some(numObj => {
                if (n.indexOf(numObj.roman) === 0) {
                    this.result += numObj.arabic;
                    n = n.replace(numObj.roman, '');
                    return true;
                }
            });
        };

        this.toString = () => {

        };
    }
})();