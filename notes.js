const fs = require('fs');
const chalk = require('chalk');

const loadNotes = () => {
    // const isFileExists = fs.existsSync('notes.json');
    // if (isFileExists) {
    //     const dataBuffer = fs.readFileSync('notes.json');
    //     const dataJSON = dataBuffer.toString();
    //     return JSON.parse(dataJSON);
    // } else {
    //     return [];
    // }
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find(note => note.title === title);
    console.log(duplicateNote);

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log('New note added!');
    } else {
        console.log('Note title taken!');
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter(note => note.title !== title);
    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep);
        console.log(chalk.green(`The note with the title "${title}" has been deleted!`));
    } else {
        console.log(chalk.red(`A note with the title "${title}" not found!`));
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.cyan.bold('Your notes:'));
    notes.forEach(note => {
        console.log(chalk.yellow(`* ${note.title}`));
    });
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title);
    if (note) {
        console.log(chalk.yellow.inverse(`Title: ${note.title}`));
        console.log(`Body: ${note.body}`);
    } else {
        console.log(chalk.red(`A note with the title "${title}" not found!`));
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}