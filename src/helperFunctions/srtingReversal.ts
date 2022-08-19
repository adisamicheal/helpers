/**
 * @param {string}
 * @return {string}
 */

const srtingReversal = (val: string) => {
    if (typeof val !== 'string') {
        return;
    }
    return val.split('').reverse().join('')
};

export default srtingReversal;
