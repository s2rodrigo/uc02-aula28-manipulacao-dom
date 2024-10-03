const dadosPessoa = {
    "nome": "Rodrigo Gonçalves",
    "email": "github.com/s2rodrigo",
    "telefone": "46987654321",
    "cpf": "00123456789",
    "endereco": "Rua da fogueira santa",
    "numero": 777,
    "complemento": "Sobrado",
    "cep": 123456789,
    "bairro": "Centro",
    "cidade": "Pato Branco",
    "estado": "Paraná",
    "sexo": "Masculino",
    "estadoCivil": "casado",
    "profissao": "Técnico de Laboratório",
    "dataNascimento": "01/01/1980",
    "urls": [
        {
            "titele": "linkeGit",
            "urls": "https://github.com/s2rodrigo",
        }

    ]
}

const divTitle = document.getElementById("title")

const h1Nome = document.createElement("h1")
h1Nome.textContent = dadosPessoa.nome

divTitle.appendChild(h1Nome)

const spanProfissao = document.createElement("span")
spanProfissao.textContent = dadosPessoa.profissao

divTitle.appendChild(spanProfissao)

//montagem da div contact 

const divContact = document.getElementById("contact")

// criar uma lista nao ordenada 
const listaContato = document.createElement("ul")
// item de lista para o endereço completo
const itemEndereco = document.createElement("li")
itemEndereco.textContent = `${dadosPessoa}, ${dadosPessoa.numero}`

listaContato.appendChild(itemEndereco)

// item de lista para o email
const itemEmail = document.createElement("li")
itemEmail.textContent = dadosPessoa.email
listaContato.appendChild(itemEmail)

//item de lista para telefone
const itemtelefone = document.createElement("li")
itemtelefone.textContent = dadosPessoa.telefone
listaContato.appendChild(itemtelefone)

//item lista para cep
const itemCep = document.createElement("li")
itemCep.textContent = dadosPessoa.cep
listaContato.appendChild(itemCep)

//item de lista com link 

for (url of dadosPessoa.urls) {
    const itemlink = document.createElement("li")
    const ancora = document.createElement("a")
    ancora.textContent = url.titele
    ancora.setAttribute("href", url)

    itemlink.appendChild(ancora)
    listaContato.appendChild(itemlink)
}


divContact.appendChild(listaContato)

