(function(exports) {
  function NoteListView(list) {
    this.stringList = list
    
  }

  NoteListView.prototype.htmlList = function() {
    let output = []
    let listLength = this.stringList.notes.length
    if (this.stringList.notes.length === 0) {
      return 'No notes available'
    } else {
      for (let i = 0; i < listLength; i++) {
        var id = this.stringList.notes[i].id
        output.push(`<li><a href="#notes/${id}">${this.stringList.showNotes()[i]}</a></li>`)
      }
      return `<ul>Your Notes: ${output.join("")}</ul>`
    }
    
    // else {
    //   var string = `<ul>Your Notes: <li><a href${this.stringlist[]}>` + this.stringList.showNotes().join('</div></li><li><div>') +'</div></li></ul>'
    //   return string 
    // }
  }

  exports.NoteListView = NoteListView
})(this);