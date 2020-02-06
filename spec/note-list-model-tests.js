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
  console.log('addNoteList add func adds 2 notes to arr, with text attributes')
})();

(function listNotes() {
  var notelist = new NoteList()
  notelist.add('hello')
  notelist.add('test')
  assert.isTrue(notelist.showNotes()[0] == 'hello')
  assert.isTrue(notelist.showNotes()[1] == 'test')
  console.log("listNotes showNotes returns arr of note strings")
})();

(function() {
  var notelist = new NoteList()
  notelist.add('first 20 characters! From here is more than 20 characters')
  assert.isTrue(notelist.showNotes()[0] == 'first 20 characters!')
  console.log('showNotes adds just first chars')
})();

(function() {
  var notelist = new NoteList()
  notelist.add('hello')
  assert.isTrue(notelist.notes[0].id === 0)
  console.log('add function passes id to note obj')
})(); 