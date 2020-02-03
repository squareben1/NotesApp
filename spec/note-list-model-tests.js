(function testNoteList() {
  var noteList = new NoteList()
  assert.isTrue(noteList.notes.length === 0);
  console.log('test passes')
})();

(function testAddNoteList() {
  var notelist = new NoteList()
  var noteOne = new Note('hello')
  var noteTwo = new Note('test')
  notelist.add(noteOne)
  notelist.add(noteTwo)
  assert.isTrue(notelist.notes.length === 2)
  assert.isTrue(notelist.notes[0].showNote() === 'hello')
  console.log('test two')
})();
