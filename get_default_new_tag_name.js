const kebab_case = (str) => str.toLowerCase().replace(" ", "-")
const kebab_case_concat = (a, b) => a + "-" + b


module.exports = (tp) => {
    const dir_name = kebab_case(tp.file.folder())
    const file_name = kebab_case(tp.file.title)

    return [dir_name, file_name].map(kebab_case).reduce(kebab_case_concat)
}
