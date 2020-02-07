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
    };

    (function listenForSubmit() {
      var element = document.getElementById('text')
      element.addEventListener("submit", function(click){
        click.preventDefault();
        console.log('click: ', click.srcElement.elements[0].value)
      })
    })();


    (function makeUrlChangeShowNoteForCurrentPage() {  
      window.onhashchange = function () {
        console.log('this', this)
      // location.hash.split("#notes/") >> ["", "0"]
      console.log('location.hash: ', location.hash)
      var noteId = window.location.hash.split("#notes/")[1]
      console.log('noteId', noteId)
      
      var noteText = this.notelist.notes[noteId].text
      console.log('this.notelist.notes: ', this.notelist.notes)
      document
        .getElementById("app")
        .innerHTML = noteText;
    }
  })();


    // NoteController.prototype.makeUrlChangeShowNoteForCurrentPage = function() {  
    //     window.onhashchange = function () {
    //       console.log('this', this)
    //     // location.hash.split("#notes/") >> ["", "0"]
    //     console.log('location.hash: ', location.hash)
    //     var noteId = window.location.hash.split("#notes/")[1]
    //     console.log('noteId', noteId)
        
    //     var noteText = this.notelist.notes[noteId].text
    //     console.log('this.notelist.notes: ', notelist.notes)
    //     document
    //       .getElementById("app")
    //       .innerHTML = noteText;
    //   }
    // };

    // var noteController = function(listmodel) {
    //   return new NoteController(listmodel)
    // }
    // the above is useful when you want to pass new arg into the function, not possible below: 
    
    // var noteController = new NoteController()

    exports.NoteController = NoteController
  
})(this);

notelist = new NoteList
notelist.add('Favourite drink: champagne')
noteController = new NoteController(notelist)
noteController.insertHTML()
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


