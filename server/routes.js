const express = require("express");

const router = express.Router();

router.get("/send-notification", (req, res) => {
    req.io.emit("notification", {
        message: req.query.message,
    });

    res.json({
        message: req.query.message + " message sent",
    });
});

module.exports = router;
