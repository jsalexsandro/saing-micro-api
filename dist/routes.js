"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const YoutubeVideoDonwload_1 = require("./services/YoutubeVideoDonwload");
const router = (0, express_1.Router)();
router.get("/youtube-video-download", (req, res) => {
    const url = req.query.url;
    const filename = req.query.filename;
    const quality = req.query.quality;
    // res.json(url)
    (0, YoutubeVideoDonwload_1.YoutubeVideoDonwload)(url, filename, quality, res);
});
exports.default = router;
