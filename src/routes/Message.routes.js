const { Router } = require('express');
const router = Router();

const { sendMessage } = require('../Controller/Message.js');

router.post('/sendMessage', sendMessage);

module.exports = router;
