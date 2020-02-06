(function(exports) {
  function NoteList() {
    this.notes = []

  }

  NoteList.prototype.add = function(string) {
    
    var note = new Note(string, this.notes.length)
    this.notes.push(note)

  }

  NoteList.prototype.showNotes = function() {
    var arr = []
    for (var i = 0; i < this.notes.length; i++) {
      arr.push(this.notes[i].text.slice(0, 20));
    }
    return arr
  }

  exports.NoteList = NoteList
})(this)