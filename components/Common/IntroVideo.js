import React from 'react';
import ReactPlayer from 'react-player';

const IntroVideo = () => {
  return (
    <div className="video-area">
      <div className="container">
        <div
          className="video-view-content"
          data-aos="fade-up"
          data-aos-delay="80"
          data-aos-duration="800"
          data-aos-once="true"
        >
          <div className="video-image">
          <ReactPlayer
            url="video/InnociqueVideo.mp4"
            controls
            width="100%"
            height="100%"
          />
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default IntroVideo;
