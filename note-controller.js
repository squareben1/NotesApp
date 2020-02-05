(function(exports) {
  function NoteController() {
    
  }
  console.log('before call changeText')
  console.log(document.getElementById('app'))

    NoteController.prototype.changeText = function(text) {
      var element = document.getElementById('app')
      // document.getElementById('app').innerHTML = 'Niki is super super awesome'
      element.innerHTML = text
      console.log("inside chagetext", element)
    }

    // var noteController = function(listmodel) {
    //   return new NoteController(listmodel)
    // }
    // the above is useful when you want to pass new arg into the function, not possible below: 
    var noteController = new NoteController()

      exports.noteController = noteController
  
})(this);

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

noteController.changeText('Ben is the best!')
