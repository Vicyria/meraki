import React from "react";
import ReactPlayer from "react-player";
import videoFile from "/video.mp4"
export default function Banner() {
        return <ReactPlayer url={videoFile} playing loop muted width="100vw" height="100%" />;
}       