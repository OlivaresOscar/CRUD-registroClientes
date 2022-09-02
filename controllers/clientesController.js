let { query } = require('express');
let conexion = require('../configuración/conexion');
let cliente = require("../model/cliente"); 

module.exports = {
    index:function(req, res){

        cliente.obtener(conexion, function(err, datos){
            console.log(datos);
            res.render('clientes/index', { title: 'Express', clientes:datos });

        });

    },
    crear:function(req, res){
        res.render('clientes/crear');
    },
    guardar:function(req, res){
        console.log(req.body);

        cliente.insertar(conexion,req.body,function(err, datos){
                   res.redirect('/clientes');
        });
    }

};