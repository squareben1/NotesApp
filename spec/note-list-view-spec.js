(function testNoteListViewmulti() {
  var notelist = new NoteList()
  notelist.add('hello')
  notelist.add('test')
  var notelistview = new NoteListView(notelist)
  console.log('notelist view', notelistview.htmlList())
  assert.isTrue(notelistview.htmlList() === '<ul>Your Notes: <li><a href="#notes/0">hello</a></li><li><a href="#notes/1">test</a></li></ul>')
  console.log("NoteListView multi notes atest passed")
})();

(function testNoteListViewOneNote() {
  var notelist = new NoteList()
  notelist.add('hello')
  var notelistview = new NoteListView(notelist)
  assert.isTrue(notelistview.htmlList() === '<ul>Your Notes: <li><a href="#notes/0">hello</a></li></ul>')
  console.log("NoteListView Single note test passed")
})();

(function testNoteListViewNoNote() {
  var notelist = new NoteList()
  var notelistview = new NoteListView(notelist)
  assert.isTrue(notelistview.htmlList() == 'No notes available')
  console.log("NoteListView No Note test passed")
})();

(function() {
  var notelist = new NoteList()
  notelist.add('first 20 characters! From here is more than 20 characters')
  var notelistview = new NoteListView(notelist)
  console.log('htmllist: ', notelistview.htmlList())
  assert.isTrue(notelistview.htmlList() === '<ul>Your Notes: <li><a href="#notes/0">first 20 characters!</a></li></ul>')
  console.log("Code updated and shows just first 20 characters of note")
})()
