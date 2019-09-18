document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']
  let db = coDesConnect('https://projetofolhaum.firebaseio.com/')

  db.download('/', function(data) {


    let context = data["portfolio"][value]
    coDesReplace('.local', context)

    context = data
    coDesReplace('.atalhos', context)

    context = data["portfolio"][value]
    coDesReplace('title', context)

    context = data["portfolio"][value]
    coDesReplace('.header', context)

    context = data["portfolio"][value]
    coDesReplace('.text_categoria', context)

	context = data["portfolio"][value]
    coDesReplace('.img_categoria', context)

  context = {'classe':value}
    coDesReplace(".cell_text", context)
    coDesReplace(".projeto", context)


  })
})
