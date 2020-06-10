//Criando servior...
//exportando express
const express = require("express")
    //Alocando express me uma const server
const server = express()

//Pegando o banco de dados
const db = require("./database/db")



//configurando pasta publica
//servindo os aquivos de forma estatica
server.use(express.static("public"))

server.use(express.urlencoded({ extended: true }))

// usando nunjucks pra renderizar a pagina
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//configurando o caminho da aplicação 
//pagina inicial
//req: resquisição ao seervidor
//res: resposta do servidor

server.get("/", (req, res) => {
    //enviando arquivos para servidor
    return res.render("index.html", { title: "" })
})



server.get("/create-point", (req, res) => {
    //enviando arquivos para servidor
    console.log(req.query)


    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {

    console.log(req.body)

    //inserir dados na tabela
    const query = `
        INSERT INTO places(
            nome,
            endereco,
            endereco2,
            estado,
            cidade,
            itens		
        )VALUES(?,?,?,?,?,?,?);
    `
        //inserindo  
    const values = [
        req.body.image,
        req.body.nome,
        req.body.endereco,
        req.body.endereco2,
        req.body.estado,
        req.body.cidade,
        req.body.itens,

    ]

    //tratando os dados depois de inserir os dados....
    function afterInsertData(err) {
        //se os dados não forem cadastados com sucesso!!!
        if (err) {
            return console.log(err)
        }
        //se sim ...
        console.log("Cadastrado com Sucesso!!!")
        console.log(this)
        return res.send("Deu certo!!!")
    }

    db.run(query, values, afterInsertData)




})



server.get("/search", (req, res) => {
        //consultando  dados da tabela....
        db.all(`SELECT * FROM places WHERE cidade `, function(err, rows) {
            if (err) {
                return console.log(err)
            }
            console.log("Aqui estão seus gegistros")
            console.log(rows)

            //total de produtos
            const total = rows.length


            //mostrar na pagina html os dados cadastrandos no banco de dados
            return res.render("search-results.html", { places: rows, total: total })

        })
    })
    //Ouvindo a porta que  o servidor vai executar....
server.listen(3000)