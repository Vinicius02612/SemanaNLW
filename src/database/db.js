//importar o a dependencia do sqlite3

const sqlite3 = require("sqlite3").verbose()
    //iniciando o banco de dados em um objeto.....
const db = new sqlite3.Database("src/database/database.db")
    // metodo que roda uma sequencia de codigo


db.serialize(() => {
        //criando tabela
        /*  db.run(` 
               CREATE TABLE IF NOT EXISTS places(
                   id INTEGER PRIMARY KEY AUTOINCREMENT,
                   nome TEXT,
                   endereco TEXT,
                   endereco2 TEXT,
                   estado TEXT,
                   cidade TEXT,
                   itens TEXT
               );
           `)
              //inserindo dados na tabela
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
        //consultando dados de uma tabela   
        const values = [
                "Vinicius",
                "Rua 45",
                "45 rua",
                "Piaui",
                "Bom Jesus",
                "Celular",

            ]
            /*
                    //tratando os dados depois de inserir os dados....
                    function afterInsertData(err) {
                        //se os dados não forem cadastados com sucesso!!!
                        if (err) {
                            return console.log(err)
                        }
                        //se sim ...
                        console.log("Cadastrado com Sucesso!!!")
                        console.log(this)
                    }

                    db.run(query, values, afterInsertData)
            */
        /*
                //consultando  dados da tabela....
                db.all(`SELECT * FROM places WHERE nome =?`, ["Vinicius"], function(err, rows) {
                        if (err) {
                            return console.log(err)
                        }
                        console.log("Aqui estão seus gegistros")
                        console.log(rows)
                    })
        */
        /*
                //deletando dados da tabela
                db.run(`DELETE FROM places WHERE id = ?`, [8], function(err, rows) {
                    if (err) {
                        return console.log(`Deu erro em ${err}`)
                    }
                    console.log("Registro deletado com Sucesso!!")
                    console.log(rows)
                })
        */


    })
    //Exportando aplicac
module.exports = db