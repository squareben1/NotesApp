(function(exports) {
  function NoteList() {
    this.notes = []
    // this.notestext = []
  }

  NoteList.prototype.add = function(string) {
    var note = new Note(string)
    this.notes.push(note)
    // this.notestext.push(note.text)
  }

  NoteList.prototype.showNotes = function() {
    var arr = []
    // console.log('notes 1st', this.notes[0].text)
    for (var i = 0; i < this.notes.length; i++) {
      arr.push(this.notes[i].text);
    }
    return arr
  }

  exports.NoteList = NoteList
})(this)