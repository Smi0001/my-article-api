var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
    secret: 'MY_SECRET',
    userProperty: 'payload'
});
var path = require('path');

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
var otpService = require('../controllers/otpservice');

// open Url
router.get('/', (req, res) => {
    // console.log(path.join(__dirname + '\\..\\dist\\index.html'));
    res.sendFile(path.join(__dirname + '\\..\\dist\\index.html'));
    // res.send('SERVER IS WORKING');
});
router.get('/test', (req, res) => {
    const testUser = req.query.email;
    res.send('Testing successfull for -> ', testUser);
});

// mail OTP
router.get('/mailOtp/:email', otpService.mailOtp);
router.post('/deleteOtp', otpService.deleteOtpOfUserEmail);

// profile
router.get('/profile', auth, ctrlProfile.profileRead);
router.post('/updateUser', auth, ctrlProfile.updateUser);
router.post('/validatePassword', auth, ctrlProfile.validatePassword);
router.post('/validateThenSetPassword', auth, ctrlProfile.validateThenSetPassword);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);


module.exports = router;