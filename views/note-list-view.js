(function(exports) {
  function NoteListView(list) {
    this.stringList = list
    
  }

  NoteListView.prototype.htmlList = function() {
    if (this.stringList.length === 0) {
      return 'No notes available'
    } else {
      var string = '<ul>Your Notes: <li><div>' + this.stringList.join('</div></li><li><div>') +'</div></li></ul>'
      return string 
    }
    
  }

  exports.NoteListView = NoteListView
})(this);