var db = require('../utils/db')

const Usuario = {
    Data : ( req, res ) => {
        db.query('SELECT * FROM funcionarios ',[],function(erro,resultado){
            if(erro){
              res.status(200).send(erro)
            }
           
            res.json(resultado)           
           
          });
    },
    receber : (req,res) => {
      console.log(req.body.status)
      console.log(req.body)
      if(req.body.status == "ON"){
        var status = "OFF"
      }else if(req.body.status == "OFF"){
        var status = "ON"
      }


      db.query('update funcionarios  SET status = ? WHERE idfuncionarios = ?',[status,req.body.idfuncionarios],
      function(erro){ 
        if(erro){
          res.status(200).send('erro na criação do post' + erro)
        }
        
        
  });
    }
}

module.exports = Usuario