const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
      obj = {
        a:"this",
        num :32

      }
      res.json(obj)
})
      


module.exports = router