(function(exports) {
  function NoteListView(list) {
    this.stringList = list
    
  }

  NoteListView.prototype.htmlList = function() {
    var string = '<ul>Your Notes: <li><div>' + this.stringList.join('</div></li><li><div>') +'</div></li></ul>'
    
    document.querySelector('.notes').innerHTML = string
    return string 
  }

  exports.NoteListView = NoteListView
})(this)