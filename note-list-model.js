(function(exports) {
  function NoteList() {
    this.notes = []
    this.notestext = []
  }

  NoteList.prototype.add = function(string) {
    var note = new Note(string)
    this.notes.push(note)
    this.notestext.push(note.text)
  }

  NoteList.prototype.showNotes = function() {
    // for (var i = 0; i < this.notes.length; i++) {
    //   console.log(this.notes[i].text);
    // }
    return this.notes
  }

  exports.NoteList = NoteList
})(this)