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
        window.onhashchange = function () {
      // location.hash.split("#notes/") >> ["", "0"]
        var noteId = window.location.hash.split("#notes/")[1]
        var noteText = this.notelist.notes[noteId].text
        document
          .getElementById("app")
          .innerHTML = noteText;
      }
    };

    // var noteController = function(listmodel) {
    //   return new NoteController(listmodel)
    // }
    // the above is useful when you want to pass new arg into the function, not possible below: 
    
    // var noteController = new NoteController()

    exports.NoteController = NoteController
  
})(this);


// notelist = new NoteList
// notelist.add('PLEASE FREAKING WORK')
// noteController = new NoteController(notelist)
// noteController.insertHTML()
// noteController.makeUrlChangeShowNoteForCurrentPage()

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


