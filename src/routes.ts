import { Router } from "express";
import { YoutubeVideoDonwload } from "./services/YoutubeVideoDonwload";

const router = Router()

router.get("/youtube-video-download", (req, res) => {
  const url = req.query.url as string
  const filename = req.query.filename as string
  const quality = req.query.quality as "highest" | "lowest"
  // res.json(url)
  YoutubeVideoDonwload(url, filename, quality, res)

})

export default router