const montarTabela = (cs, idElemento = "tabelaDiv", cabecalhos = ["Coluna 1", "Coluna 2"], propriedades = ["prop1", "prop2"]) => {

   const div = document.getElementById(idElemento)

   const cabecalhosHtml = cabecalhos.map( c => `<th>${c}</th>` )

   const itensHtml = cs.map( item => {

      const celulas = propriedades.map( prop => `<td>${item[prop]}</td>` )

      return `<tr>${celulas.join("\n")}</tr>`

   } )

   div.innerHTML = `<table><tr>${cabecalhosHtml.join("\n")}</tr>${itensHtml.join("\n")}</table>`

}