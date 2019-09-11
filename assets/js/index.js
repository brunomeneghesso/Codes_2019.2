document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://projetofolhaum.firebaseio.com/')

  db.download('/', function(data) {
    context = data
    coDesReplace("section-menu", context)
    coDesReplace("section-list", context)
  })
})
