

module.exports = (str_tags) => {
    console.log(str_tags.split(' '))
    return str_tags
        .split(' ')
        .filter(str_tag => str_tag !== '')
        .map(str_tag => `#${str_tag}`)
        .reduce((a, b) => a + " " + b)
}
