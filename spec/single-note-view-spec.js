(function() {
  note = new Note('Favourite drink: seltzer')
  noteView = new NoteView(note)
  assert.isTrue(noteView.note === note)
  console.log('The single note view constructor takes a note model as a parameter.')
})();

(function() {
  note = new Note('Favourite drink: seltzer')
  noteView = new NoteView(note)
  assert.isTrue(noteView.htmlNote() === '<div>Favourite drink: seltzer</div>')
  console.log('The single note view has a method that, when called, returns a string of HTML that represents the note model.')
})();