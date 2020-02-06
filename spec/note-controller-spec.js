(function testNoteController() {
  var notelist = new NoteList()
  var notecontroller = new NoteController(notelist)
  assert.isTrue(notecontroller.notelist == notelist)
  console.log("NoteController takes notelist as param")
})();

(function() {
  var notelist = new NoteList()
  var notecontroller = new NoteController(notelist)
  assert.isTrue(notecontroller.notelist.notes[0].text === 'Favourite drink: seltzer')
  console.log("NoteController adds new note w/ text 'Favourite drink: seltzer'")
})();

(function() {
  var notelist = new NoteList()
  var notecontroller = new NoteController(notelist)
  console.log('view stringlist', notecontroller.view.stringList)
  assert.isTrue(notecontroller.view.stringList === notelist)
  console.log("NoteController creates new view obj, passing in the notelist")
})();

(function() {
  var notelist = new NoteList()
  var notecontroller = new NoteController(notelist)
  var divDouble = document.createElement('div')
  divDouble.setAttribute('id', 'app')
  var textContent = document.createTextNode('Hello')
  divDouble.appendChild(textContent)
  document.body.appendChild(divDouble)
  console.log('divdouble post text:', divDouble)
  console.log('notecontroller.view:', notecontroller.view)
  // console.log('textcontent', document.getElementById('app').textContent)
  notecontroller.insertHTML()
  assert.isTrue(document.getElementById('app').innerHTML.includes('Favourite drink: seltzer'))
})();