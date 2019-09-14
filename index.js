document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://projetofolhaum.firebaseio.com/')

  db.download('/', function(data) {


    let context = data
    coDesReplace('.section-menu', context)






  })
})
