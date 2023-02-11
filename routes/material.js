var express = require('express');
var formidable = require('formidable');
var router = express.Router();
var material = require('sequelize');

router.get('/', function(req, res, next) {
    res.render('material', { title: 'home material',title2: 'Materiais' });
});

router.get('/formCreate', function(req, res, next) {
    res.render('createMaterial', { title: 'home material',title2: 'Materiais' });
  });

router.post('/create', (req, res) => {
    console.log("oi");
    // material.Material.create({
    //     nome: "Clean Code",
    //     setor: "Robert Cecil Martin",
    //     descricao: "2021-12-14",
    //     imagem: ""
    // }).then(res => {
    //     console.log(res)
    // }).catch((error) => {
    //     console.error('Failed to create a new record : ', error);
    // });

    //res.send(req.body);
    res.send("oi 2");

    // var nome=req.body['nome'];
    // var setor=req.body.setor;
    // var descricao=req.body.descricao;
    // var f={nome: nome,setor:setor, descricao: descricao};
    // console.log(f);
});


module.exports = router;
