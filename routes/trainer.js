var express = require("express");
var Trainer= require("../models/Trainer");
var router = express.Router();

router.put("/", (req, res) => {
    var body = req.body;
   
    let trainer = new Trainer();
    trainer.name=body.name;
    trainer.email=body.email;
    trainer.mobileno = body.mobileno;
    trainer.website = body.website;
    trainer.password=body.password;
    trainer.status = body.status;
    trainer.tagline = body.tagline;
    trainer.gatewayid = body.gatewayid;
    trainer.save().then((result) => {
        res.end(JSON.stringify({ status: "Success", data: result }))
    },
        (error) => {
            res.end(JSON.stringify({ status: "Failed",data:error }))
        })
});
router.post ("/", async (req, res) => {
    var body = req.body;
   
    let trainer = await Trainer.findById(body.id);
    trainer.name=body.name;
    trainer.email=body.email;
    trainer.mobileno = body.mobileno;
    trainer.website = body.website;
    trainer.password=body.password;
    trainer.status = body.status;
    trainer.tagline = body.tagline;
    trainer.gatewayid = body.gatewayid;
    trainer.save().then((result) => {
        res.end(JSON.stringify({ status: "Success", data: result }))
    },
        (error) => {
            res.end(JSON.stringify({ status: "Failed",data:error }))
        })
});
router.get("/",async(req, res) => {
   let data = await Trainer.find();
    res.end(JSON.stringify({ status: "Success", data:data}));
});
router.get("/:id",async(req, res) => {
   let data = await Trainer.findById(req.params.id);
    res.end(JSON.stringify({ status: "Success", data:data}));
});
router.delete("/",async(req, res) => {
    var body = req.body;
   await Trainer.findByIdAndDelete(body.id);
    res.end(JSON.stringify({ status: "Success"}));
});
    



module.exports = router;