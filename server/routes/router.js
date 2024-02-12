const { Router }    = require("express")
const { generate, push } = require("../lib/notification")

const router        = Router();

router.get("/generate", async (req, res) => {

    res.send( generate() )
    
});

router.post("/push", async (req, res) => {

    res.json( await push( req.body.notification, req.body.suscriptions ) )
    
});

module.exports = router;