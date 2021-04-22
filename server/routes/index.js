const express = require("express");
const router = express.Router();
const axios = require('axios');

router.get("/welcome", function (req, res, next) {
  res.status(200).send({ welcomeMessage: "Step 1 (completed)" });
});

router.post("/test", async (req, res, next) => {
  let tempFiles = req.body.files;
  let url = req.body.url;

  try{
    let response = await axios.post(`https://glot.io/api/run/${url}`, { files: tempFiles },
    {
      headers: {
        'Authorization': '62e5bea3-bc91-4ef2-b9f7-0fdfeb4001fd', 
        'Content-Type': 'application/json'
      }
    });
    res.json(response.data);
  }
  catch(err){
    console.error(err);
    res.send(err);
  }

})

module.exports = router;
