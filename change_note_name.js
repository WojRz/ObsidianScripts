async function change_note_name(tp, dafault_name = "Untitled") {
    const tag_name = await tp.system.prompt("Input note name?", dafault_name)
    
    if (tag_name !== null) {
        await tp.file.rename(tag_name)
    }
}

module.exports = change_note_name