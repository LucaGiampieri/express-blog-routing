
const express = require('express');
const router = express.Router();

const postsList = require('../data/posts');

//rotte du CRUD

// index
router.get('/', function (req, res) {

    const ojbectPosts = {
        postsNumber: postsList.length,
        posts: postsList
    }

    res.json(ojbectPosts);
});

// show
router.get('/:id', function (req, res) {
    const postId = postsList.find(post =>
        post.id === Number(req.params.id));

    postId ? res.json(postId)
        : res.status(404).json("404 Not found");
});

// store
router.post('/', function (req, res) {
    res.send('Creazione nuovo post');
});

// update
router.put('/:id', function (req, res) {
    res.send('Modifica integrale del post ' + req.params.id);
});

// modify
router.patch('/:id', function (req, res) {
    res.send('Modifica parziale del post ' + req.params.id);
});

// destroy
router.delete('/:id', function (req, res) {
    res.send('Eliminazione del post ' + req.params.id);
});

module.exports = router;