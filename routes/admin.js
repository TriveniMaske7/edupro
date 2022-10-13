var express = require("express");
//var admin= require("../models/Admin");
var Admin= require("../models/Admin");
var router = express.Router();
router.put("/", (req, res) => {
    var body = req.body;
   
    let admin = new Admin();
    admin.name=body.name;
    admin.email=body.email;
    admin.password=body.password;
    admin.save().then((result) => {
        res.end(JSON.stringify({ status: "Success", data: result }))
    },
        (error) => {
            res.end(JSON.stringify({ status: "Failed",data:error }))
        });
        
});

router.post("/", async (req, res) => {
    var body = req.body;
    //console.log(body);

    let admin = await Admin.findById(body.id);
    admin.name = body.name;

    admin.email = body.email;
    admin.password=body.password;
    admin.save().then((result) => {
        res.end(JSON.stringify({ status: "Success", data: result }))
    }, (error) => {
        res.end(JSON.stringify({ status: "Failed", data: result }))
    }
    )
    //res.end(JSON.stringify({status:"success"}))
});
router.delete("/", async (req, res) => {
    var body = req.body;
    //console.log(body);

    await Admin.findByIdAndDelete(body.id);


    res.end(JSON.stringify({ status: "Success" }))


    //res.end(JSON.stringify({status:"success"}))
});
router.get("/",async(req,res)=>{
    let data=await Admin.find();
    res.end(JSON.stringify({status:"success",data:data}))
});
router.get("/:id",async(req,res)=>{
    let data=await Admin.findById(req.params.id);
    res.end(JSON.stringify({status:"success",data:data}))


});
module.exports = router;
