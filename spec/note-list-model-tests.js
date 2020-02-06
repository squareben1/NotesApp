(function testNoteList() {
  var noteList = new NoteList()
  assert.isTrue(noteList.notes.length === 0);
  console.log('testNoteList passing')
})();

(function testAddNoteList() {
  var notelist = new NoteList()
  notelist.add('hello')
  notelist.add('test')
  assert.isTrue(notelist.notes.length === 2)
  // assert.isTrue(notelist.notestext.length === 2)
  assert.isTrue(notelist.notes[0].text === 'hello')
  console.log('addNoteList test passing')
})();

(function listNotes() {
  var notelist = new NoteList()
  
  notelist.add('hello')
  notelist.add('test')
  assert.isTrue(notelist.showNotes()[0] == 'hello')
  assert.isTrue(notelist.showNotes()[1] == 'test')
  // assert.isTrue(notelist.showNotes()[0].text == 'hello')
  // assert.isTrue(notelist.showNotes()[1].text == 'test')
  console.log("listNotes showNotes test passing")
})();