const { Router } = require('express');
const router = Router();
const { body } = require('express-validator');
const { authController } = require('../controllers')

router.post('/login',
    body('email', 'El email es requerido y debe estar entre(6,100) carecteres')
        .exists()
        .isLength({ min: 5, max: 100 }),
    body('password', 'la contraseña es requerida y debe estar entre(8,16) carecteres')
        .isLength({ min: 8, max: 16 }),
    authController.login
)

module.exports = router;