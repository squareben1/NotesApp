(function testFirstNote() {
  var note = new Note('We are the fricking business');
  assert.isTrue(note.showNote() === 'We are the fricking business');
  console.log('new note + text instantiates new note obj with text attr')
})();



