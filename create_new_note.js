
module.exports = async function create_new_note(tp, abs_folder_path, note_name) {
    if (note_name === null) {
        return
    }

    const new_file_name = `${abs_folder_path}/${note_name}.md` 
    const tag_exists = await tp.file.exists(`tags/${note_name}.md`)
    if (tag_exists) {
        return 
    }

    const template = tp.file.find_tfile("New Tag")
    await tp.file.create_new(template, note_name, false, abs_folder_path)
    return tag_exists
}
