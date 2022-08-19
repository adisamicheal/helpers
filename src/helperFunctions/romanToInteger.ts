/**
 * @param {string}
 * @return {number}
 */

const romanToInteger = (roman: string): void => {
    const values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let result = 0;
    for (let i = 0; i < roman.length; i++) {
        //if the next roman numeral is larger, then we know we have to subtract this number
        if (values[roman[i]] < values[roman[i+1]]) {
            result-=values[roman[i]]
        } else {
            result+=values[roman[i]]
        }
    }
}

export default romanToInteger;