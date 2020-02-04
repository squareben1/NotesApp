(function testNoteListViewmulti() {
  var notelist = new NoteList()
  notelist.add('hello')
  notelist.add('test')
  // notelist.add('test2')
  var notelistview = new NoteListView(notelist.notestext)
  assert.isTrue(notelistview.htmlList() == '<ul>Your Notes: <li><div>hello</div></li><li><div>test</div></li></ul>')
  // console.log(notelist.showNotes())
  console.log("NoteListView test passed")
})();

(function testNoteListViewOneNote() {
  var notelist = new NoteList()
  notelist.add('hello')
  var notelistview = new NoteListView(notelist.notestext)
  assert.isTrue(notelistview.htmlList() == '<ul>Your Notes: <li><div>hello</div></li></ul>')
  console.log("NoteListView Single test passed")
})();

(function testNoteListViewNoNote() {
  var notelist = new NoteList()
  var notelistview = new NoteListView(notelist.notestext)
  console.log('htmllist none:')
  console.log(notelistview.htmlList())
  assert.isTrue(notelistview.htmlList() == '<ul>Your Notes: <li><div></div></li></ul>')
  // problem? shows an empty list obj bullet point
  console.log("NoteListView No Note test passed")
})();