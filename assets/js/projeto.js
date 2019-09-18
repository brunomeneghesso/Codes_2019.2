document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://projetofolhaum.firebaseio.com/')
  let params = coDesExtract()
  db.download('/', function(data) {
    console.log(data)
    let atual = data['portfolio'][params['categoria']]['projetos'][params['projeto']]
    let context = {
    'descricao':atual['descricao'] ,
    'equipe':atual['equipe'] ,
    'recursos':atual['recursos'],
    'titulo':atual['titulo'],
    'categoria':params['categoria'],
    'projeto':params['projeto'],
    'categoria_desc':data['portfolio'][params['categoria']]['categoria'],
    'portfolio':data['portfolio']
  } 
    coDesReplace('.container', context)
    coDesReplace('.title',context)
    coDesReplace('.titulo_jogo',context)
  })
})
