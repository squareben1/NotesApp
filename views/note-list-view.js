(function(exports) {
  function NoteListView(list) {
    this.stringList = list
    
  }

  NoteListView.prototype.htmlList = function() {
    // console.log('stringlist arr', this.stringList.showNotes())
    if (this.stringList.notes.length === 0) {
      return 'No notes available'
    } else {
      var string = '<ul>Your Notes: <li><div>' + this.stringList.showNotes().join('</div></li><li><div>') +'</div></li></ul>'
      return string 
    }
  }

  exports.NoteListView = NoteListView
})(this);