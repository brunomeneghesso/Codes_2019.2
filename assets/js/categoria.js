document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']
  let db = coDesConnect('https://projetofolhaum.firebaseio.com/')

  db.download('/', function(data) {


    let context = data
    coDesReplace('.local', context)






  })
})
