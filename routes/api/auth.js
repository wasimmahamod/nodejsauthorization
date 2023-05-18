const express =require('express');
const singupControllars = require('../../controllars/authContollars/singupControllars');
const verfiyControllears = require('../../controllars/authContollars/verifyControllears');
const userContoller = require('../../controllars/userContollers/userContollers');
const userMiddleware = require('../../middleware/userMiddleware');
const router = express.Router()


router.post('/singup',singupControllars)
router.get('/verify',verfiyControllears)
router.get('/users',userMiddleware,userContoller)


module.exports = router;