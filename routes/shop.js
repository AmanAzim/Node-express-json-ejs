const express = require('express');
const path = require('path');
const router = express.Router();

const shopController = require('../controllers/shop');


router.get('/', shopController.getIndex);

router.get('/products-list', shopController.getDisplayProducts);

router.get('/details/:productId', shopController.getProductDetail);// We have to put route with dynamic segment after any route with same path structure

router.post('/add-to-cart', shopController.postAddToCart);

router.post('/cart', shopController.postCart);

router.get('/cart', shopController.getCart);

router.post('/cart-delete-item', shopController.postDeleteCartItem);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;