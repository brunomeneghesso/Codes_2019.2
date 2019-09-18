document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']
  let db = coDesConnect('https://projetofolhaum.firebaseio.com/')

  db.download('/', function(data) {


    context = data["portfolio"][value]
    coDesReplace('.local', context)

    context = data
    coDesReplace('.atalhos', context)

    context = data["portfolio"][value]
    coDesReplace('title', context)

    context = data["portfolio"][value]
    coDesReplace('.header', context)

    dic = {} 
    for (let x of Object.keys(data["portfolio"][value]['projetos'])){
      dic[x]={'categoria':value,'descricao':data["portfolio"][value]['projetos'][x]['descricao'],'recursos':data["portfolio"][value]['projetos'][x]['recursos']}
    }
    context = {'dicionario':dic}
    coDesReplace('.text_categoria', context)

  	context = {'dicionario':dic}
    coDesReplace('.img_categoria', context)


  })
})
