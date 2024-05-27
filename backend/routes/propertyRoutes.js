const express = require('express');
const { getProperties, likeProperty, userInterestedProperty, getPropertyDetails, createProperty, updateProperty, deleteProperty, unlikeProperty, checkIfLiked } = require('../controllers/propertyController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', getProperties);
router.get('/:id',authMiddleware, getPropertyDetails);
router.post('/', authMiddleware, createProperty);
router.put('/:id', authMiddleware, updateProperty);
router.delete('/:id', authMiddleware, deleteProperty);
router.post('/:id/like', authMiddleware, likeProperty);
router.post('/:id/unlike', authMiddleware, unlikeProperty);
router.get('/:id/isLiked', authMiddleware, checkIfLiked); // New route for checking like status
router.post('/:id/interested', authMiddleware, userInterestedProperty); // New route for handling interested buyers

module.exports = router;
