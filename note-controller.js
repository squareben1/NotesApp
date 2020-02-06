(function(exports) {
  function NoteController(notelist) {
    this.notelist = notelist
    this.notelist.add('Favourite drink: seltzer')
    this.view = new NoteListView(this.notelist)
  }

    NoteController.prototype.changeText = function(text) {
      var element = document.getElementById('app')
      element.innerHTML = text
    }

    NoteController.prototype.insertHTML = function() {
      var element = document.getElementById('app')
      element.innerHTML = this.view.htmlList()
      
    }

    NoteController.prototype.makeUrlChangeShowNoteForCurrentPage = function() {
        window.addEventListener("hashchange", this.showNoteForCurrentPage());
      };

      NoteController.prototype.showNoteForCurrentPage = function() {
        this.showNote(this.getNoteFromUrl(window.location));
      };

      NoteController.prototype.getNoteFromUrl = function(location) {
        // location.hash.split("#notes/") >> ["", "0"]
        // location.hash.split("#notes/")[1] >> 0 (the ID of the note)
        return location.hash.split("#notes/")[1];
      };

      NoteController.prototype.showNote = function(noteId) {
        var noteText = this.notelist.notes[noteId].text
        document
          .getElementById("app")
          .innerHTML = noteText;
      };

    // var noteController = function(listmodel) {
    //   return new NoteController(listmodel)
    // }
    // the above is useful when you want to pass new arg into the function, not possible below: 
    
    // var noteController = new NoteController()
    exports.NoteController = NoteController
  
})(this);

// notelist = new NoteList
// noteController = new NoteController(notelist)
// noteController.insertHTML()

// console.dir("NoteController", NoteController)
// console.log('---')
// // var x = document.getElementById('app')
// console.log("outside function", document.getElementById('app'))

// setTimeout(function() {
//   NoteController.changeText('Niki is the best!')
// }, 78)

// window.addEventListener('load', function() {
//   NoteController.changeText('Niki is the best!')
// })


