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
  notecontroller.insertHTML()
  assert.isTrue(document.getElementById('app').innerHTML.includes('Favourite drink: sel'))
})();

(function() {
  var notelist = new NoteList
  notelist.add('Favourite drink: champagne')
  var notecontroller = new NoteController(notelist)
  notecontroller.insertHTML()
  // notecontroller.makeUrlChangeShowNoteForCurrentPage()
  // window.location.hash = "#notes/0"
  // document.getElementById('0').click()
  // var expectedContent = notecontroller.notelist.notes[0].text
  console.log('notes: ', notelist.notes)
  console.log('app innerhtml: ', document.getElementById('app').innerHTML)
  // console.log('expected content: ', expectedContent)
  document.getElementById('0').click()
  assert.isTrue(document.getElementById('app').innerHTML.includes('Favourite drink: champagne'))
  console.log('Can click on a note and be redirected to the URL for that note.')
})();
