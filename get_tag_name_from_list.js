const kebab_case = (str) => str.toLowerCase().replace(" ", "-")
const kebab_case_concat = (a, b) => a + "-" + b


module.exports = (strs) => {
    return strs.map(kebab_case).reduce(kebab_case_concat)
}
