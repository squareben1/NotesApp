(function(exports) {
  function NoteList() {
    this.notes = []
  }

  NoteList.prototype.add = function(string) {
    var note = new Note(string)
    this.notes.push(note)
  }

  NoteList.prototype.showNotes = function() {
    for (var i = 0; i < this.notes.length; i++) {
      return this.notes[i].text;
    }
  }

  exports.NoteList = NoteList
})(this)