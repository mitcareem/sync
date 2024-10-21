"use client"
import assets from "@/constants/assets";

const Video = () => {
  return (
    <video style={{objectFit: "cover"}} width="100%" height={"100%"} autoPlay muted loop >
      <source src={assets.video} type="video/mp4" />
      Your browser does not support HTML video.
    </video>
  );
};

export default Video;
