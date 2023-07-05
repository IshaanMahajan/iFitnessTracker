const router = require("express").Router();
const SignupController = require("../Controllers/Signup");
const LoginController = require("../Controllers/Login");
const ContactusController = require("../Controllers/Contact");

router.post('/signup',SignupController.signup)
router.post('/login',LoginController.login)
router.post('/contactus',ContactusController.contactus)

module.exports = router;