(function testFirstNote() {
  var note = new Note('We are the fricking business', 1);
  assert.isTrue(note.showNote() === 'We are the fricking business');
  assert.isTrue(note.text === 'We are the fricking business')
  assert.isTrue(note.id === 1)
  console.log('new note + text instantiates new note obj with text attr')
})();



