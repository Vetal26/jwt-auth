const Router = require('express').Router;
const router = new Router();

router.post('/registration', (req, res) => {});
router.post('/login', (req, res) => {});
router.post('/logout', (req, res) => {});
router.get('/activate/:link', (req, res) => {});
router.get('/refresh', (req, res) => {});
router.get('/users', (req, res) => {});

module.exports = router;
