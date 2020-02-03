(function(exports) {
  function NoteList() {
    this.notes = []
  }

  NoteList.prototype.add = function(note) {
    this.notes.push(note)
  }

  exports.NoteList = NoteList
})(this)