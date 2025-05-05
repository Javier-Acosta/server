const express = require('express');
const router = express.Router();
const clienteRouter = require('./clienteRouter');
const authRouter = require('./authRouter');

router.use('/cliente', clienteRouter);
router.use('/auth', authRouter);

module.exports = router;