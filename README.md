# nodejs-notes-app
Simple app for creating and manipulating notes by specifying note's title and body. Notes data is written to notes.json.
## Available commands
### To create a note ('title' and 'body' argumemts are required)
node app.js add --title='Some title' --body='Some content'
### To read note's content ('title' argument is required)
node app.js read --title='Some content'
### To list out all notes
node app.js list
### To remove a note ('title' argument is required)
node app.js remove --title='Some title'
