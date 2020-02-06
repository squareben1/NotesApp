(function testNoteList() {
  var noteList = new NoteList()
  assert.isTrue(noteList.notes.length === 0);
  console.log('notelist instantiates with empty notes arr')
})();

(function testAddNoteList() {
  var notelist = new NoteList()
  notelist.add('hello')
  notelist.add('test')
  assert.isTrue(notelist.notes.length === 2)
  assert.isTrue(notelist.notes[0].text === 'hello')
  console.log('addNoteList add func adds 2 notes to arr')
})();

(function listNotes() {
  var notelist = new NoteList()
  
  notelist.add('hello')
  notelist.add('test')
  assert.isTrue(notelist.showNotes()[0] == 'hello')
  assert.isTrue(notelist.showNotes()[1] == 'test')
  console.log("listNotes showNotes returns arr of note strings")
})();