(function testNoteController() {
  var notelist = new NoteList()
  var notecontroller = new NoteController(notelist)
  assert.isTrue(notecontroller.notelist == notelist)
  console.log("NoteController takes notelist as param")
})();

(function() {
  var notelist = new NoteList()
  var notecontroller = new NoteController(notelist)
  assert.isTrue(notecontroller.notelist.notestext[0] === 'Favourite drink: seltzer')
  console.log("NoteController adds new note w/ text 'Favourite drink: seltzer'")
})();

(function() {
  var notelist = new NoteList()
  var notecontroller = new NoteController(notelist)
  assert.isTrue(notecontroller.view.stringList === notelist)
  console.log("NoteController creates new view obj, passing in the notelist")
})();

(function() {
  var notelist = new NoteList()
  var notecontroller = new NoteController(notelist)
  assert.isTrue(notecontroller.view.htmlList() === '<ul>Your Notes: <li><div>Favourite drink: seltzer</div></li></ul>')
})();