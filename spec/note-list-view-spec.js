(function testNoteListViewmulti() {
  var notelist = new NoteList()
  notelist.add('hello')
  notelist.add('test')
  var notelistview = new NoteListView(notelist)
  assert.isTrue(notelistview.htmlList() == '<ul>Your Notes: <li><div>hello</div></li><li><div>test</div></li></ul>')
  console.log("NoteListView multi notes atest passed")
})();

(function testNoteListViewOneNote() {
  var notelist = new NoteList()
  notelist.add('hello')
  var notelistview = new NoteListView(notelist)
  assert.isTrue(notelistview.htmlList() == '<ul>Your Notes: <li><div>hello</div></li></ul>')
  console.log("NoteListView Single note test passed")
})();

(function testNoteListViewNoNote() {
  var notelist = new NoteList()
  var notelistview = new NoteListView(notelist)
  assert.isTrue(notelistview.htmlList() == 'No notes available')
  console.log("NoteListView No Note test passed")
})();
