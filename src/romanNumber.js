let RomanNumber = (() => {
    const VALID_MAX_CHARS = 3; //max consecutive copies of the same letter    
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

        if (!(this instanceof RomanNumber)) {
            return new RomanNumber(numToConvert);
        }

        let convertToRoman = (n) => {
            NUMBERS.filter((numObj) => n >= numObj.arabic)
                .some(numObj => {
                    if (n >= numObj.arabic) {
                        n -= numObj.arabic;
                        this.result += numObj.roman;
                        if (n > 0) {
                            convertToRoman(n);
                            return true;
                        }
                    }
                });
        }

        let convertToArabic = (n) => {
            NUMBERS.some((numObj) => {
                if (n.indexOf(numObj.roman) === 0) {
                    this.result += numObj.arabic;
                    n = n.replace(numObj.roman, '');
                    convertToArabic(n);
                    return true;
                }
            });
        }
        //validators
        let isNumeric = (n) => {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }
        let isNotEmpty = (n) => {
            if (!n && n !== 0) throw new Error('Value required');
            return true;
        }
        let isInRange = (n) => {
            if (isNumeric(n) && n <= 0 || n > 3999) throw new Error('Invalid range');
            return true;
        }
        let isValidCharCount = (n) => {
            let charsCountObj = n.toString().split('')
                .reduce((curr, next) => {
                    if (!curr[next]) {
                        curr[next] = 1;
                    } else {
                        curr[next] += 1;
                    }
                    return curr;
                }, {});

            return Object.keys(charsCountObj)
                .every(char => charsCountObj[char] <= VALID_MAX_CHARS)
        }

        let isValid = (n) => {
            if (!isValidCharCount(n)) throw new Error('Invalid value');
        }

        //public methods
        this.numToConvert = numToConvert;
        this.toInt = () => {
            isNotEmpty(this.numToConvert);
            isInRange(this.numToConvert);
            isValid(this.numToConvert);
            if (isNumeric(this.numToConvert)) {
                //need more robust validation
                return this.numToConvert;
            }

            this.result = 0;
            convertToArabic(this.numToConvert.toString().toUpperCase());
            return this.result;
        };

        this.toString = () => {
            isNotEmpty(this.numToConvert);
            isInRange(this.numToConvert);
            if (!isNumeric(this.numToConvert)) {
                return this.numToConvert.toUpperCase();
            }

            this.result = '';
            convertToRoman(this.numToConvert);
            return this.result;
        };
    }
})();
