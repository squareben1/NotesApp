(function testNoteList() {
  var noteList = new NoteList()
  assert.isTrue(noteList.notes.length === 0);
  console.log('testNoteList passing')
})();

(function testAddNoteList() {
  var notelist = new NoteList()
  notelist.add('hello')
  notelist.add('test')
  console.log('notelist.notes:')
  console.log(notelist.notes)
  assert.isTrue(notelist.notes.length === 2)
  assert.isTrue(notelist.notestext.length === 2)
  assert.isTrue(notelist.notestext[0] === 'hello')
  console.log('addNoteList test passing')
})();

(function listNotes() {
  var notelist = new NoteList()
  
  notelist.add('hello')
  notelist.add('test')
  console.log('notel ist model show notes:')
  console.log(notelist.showNotes())
  assert.isTrue(notelist.showNotes()[0].text == 'hello')
  assert.isTrue(notelist.showNotes()[1].text == 'test')
  console.log("listNotes showNotes test passing")
})();