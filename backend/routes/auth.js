const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    obj = {
        a: "this",
        b: "is",
        c: "a",
        d: "test",
    };
    res.json(obj);
});

module.exports = router;