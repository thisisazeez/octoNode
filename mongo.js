const mongoose = require('mongoose')

// if ( process.argv.length<3 ) {
//   console.log('give password as argument')
//   process.exit(1)
// }

// const password = process.argv[2]

const url =
  'mongodb://localhost:27017/fsopen'

mongoose.connect(url, { useNewUrlParser: true })

const noteSchema = mongoose.model('Note', {
  content: String,
  date: Date,
  important: Boolean,
})
const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'Promise is an asyncronous blah',
  date: new Date(),
  important: false,
})

// eslint-disable-next-line no-constant-condition
if ( false ) {
  note.save().then(() => {
    console.log('note saved!')
    mongoose.connection.close()
  })
}



Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})
