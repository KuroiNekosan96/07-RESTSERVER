const express = require('express');
const Usuario = require('../models/usuario');
const Categoria = require('../models/categoria');
const Producto = require('../models/producto')
const app = express()

app.get('/usuario', function(req, res) {
    res.json("get Usuario");
})

app.post('/usuario', function(req, res) {
    let body = req.body;

    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: body.password,
        role: body.role
    });

    usuario.save((err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            usuario: usuarioDB
        });
    });

});

app.post('/categoria', function(req, res) {
    let body = req.body;
    let categoria = new Categoria({
        nombre: body.nombre
    });

    categoria.save((err, categoriaDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }
        res.json({
            ok: true,
            Categoria: categoriaDB
        });
    });
});

app.post('/producto', function(req, res) {
    let body = req.body;
    let producto = new Producto({
        nombre: body.nombre,
        precioUni: body.precioUni,
        disponible: body.disponible
    });

    producto.save((err, productoDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }
        res.json({
            ok: true,
            producto: productoDB
        });
    });
});




app.put('/usuario/:id', function(req, res) {
    let id = req.params.id
    res.json({
        cedula: id
    });
})

app.delete('/usuario', function(req, res) {
    res.json("delete Usuario");
})

module.exports = app;