const controllers = require('../controllers/');
const router = require('express').Router();

router.get('/', controllers.user.get);

router.post('/register', controllers.user.post.register);

router.post('/login', controllers.user.post.login);

router.post('/logout', controllers.user.post.logout);

router.delete('/:id', controllers.user.delete);



router.get('/verify', controllers.user.post.verifyLogin);

module.exports = router;