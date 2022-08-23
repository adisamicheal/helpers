/**
 * @param {string}
 */

interface value {
    val: string
} 

const srtingReversal = ({val}: value) => {
    if (typeof val !== 'string') {
        return;
    }
    return val.split('').reverse().join('')
};

export default srtingReversal;
