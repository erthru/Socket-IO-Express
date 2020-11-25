const express = require("express");

const router = express.Router();

// test routes
router.get("/send-notification", (req, res) => {
    // emit notification room, and put value in message key
    req.io.emit("notification", {
        message: req.query.message,
    });

    res.json({
        message: req.query.message + " message sent",
    });
});

module.exports = router;
