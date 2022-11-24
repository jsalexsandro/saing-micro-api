import { Response } from "express";
import ytdl from "ytdl-core";

export async function YoutubeVideoDonwload(url: string,filename:string, quality:"highest" | "lowest", res:Response){
  const video = ytdl(url, { quality: quality })    
  res.header("Content-Disposition", `attachment; filename="${filename}"`);
  video.pipe(res)
}