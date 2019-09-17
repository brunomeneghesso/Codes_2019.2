document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://projetofolhaum.firebaseio.com/')
  let params = coDesExtract()
  db.download('/', function(data) {
    console.log(data)
    let context = {
    'descricao':data['descricao'] ,
    'equipe':data['equipe'] ,
    'recursos':data['recursos']
    'titulo':data['titulo'],
  }
  coDesReplace('.container', context)
}
