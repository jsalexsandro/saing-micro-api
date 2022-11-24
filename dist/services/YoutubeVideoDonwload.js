"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YoutubeVideoDonwload = void 0;
const ytdl_core_1 = __importDefault(require("ytdl-core"));
async function YoutubeVideoDonwload(url, filename, quality, res) {
    const video = (0, ytdl_core_1.default)(url, { quality: quality });
    res.header("Content-Disposition", `attachment; filename="${filename}"`);
    video.pipe(res);
}
exports.YoutubeVideoDonwload = YoutubeVideoDonwload;
