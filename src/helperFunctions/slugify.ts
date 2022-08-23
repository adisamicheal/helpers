// creates slug from string in Javascript

/**
 * @param {string}
 */

 interface value {
    val: string
} 

const slugify = ({val}: value) => {
    val
        .toString()
        .normalize('NFD')
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/-+$/, '')
}

export default slugify;