const router=require('express').Router();
const {singnup,getbill}=require('../controller/appController')
router.post('/user/singnUp',singnup)
router.post('/product/getBill',getbill)

module.exports=router;