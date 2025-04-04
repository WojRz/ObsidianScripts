
async function create_new_tag(tp, tag_name) {
    if (tag_name === null) {
        return
    }

    const tag_exists = await tp.file.exists(`tags/${tag_name}.md`)
    if (tag_exists) {
        return
    }

    const template = tp.file.find_tfile("New Tag")
    await tp.file.create_new(template, tag_name, false, "tags")
    return tag_exists
}

module.exports = create_new_tag
