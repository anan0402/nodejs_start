const express = require('express');
const router = express.Router();
const meController = require('../app/controllers/MeController');

router.get('/recently-deleted', meController.recentlyDelete);
router.get('/posts', meController.posts);

module.exports = router;
