import React from "react";
import "./storySection.css";

function Story({ profileImg, username }) {
  return (
    <div className="story">
      <div className="storyCircle">
        <img src={profileImg} alt="Profile" className="storyProfileImg" />
      </div>
      <div className="storyUsername">{username}</div>
    </div>
  );
}

const StorySection = () => {
  const stories = [
    { username: "User1", profileImg: 1 },
    { username: "User2", profileImg: "path_to_profile_image2.jpg" },
    { username: "User3", profileImg: "path_to_profile_image3.jpg" },
    { username: "User4", profileImg: "path_to_profile_image4.jpg" },
    { username: "User5", profileImg: "path_to_profile_image5.jpg" },
    { username: "User6", profileImg: "path_to_profile_image6.jpg" },
    { username: "User7", profileImg: "path_to_profile_image7.jpg" },
    { username: "User8", profileImg: "path_to_profile_image8.jpg" },
    { username: "User7", profileImg: "path_to_profile_image7.jpg" },
    { username: "User8", profileImg: "path_to_profile_image8.jpg" },
    { username: "User7", profileImg: "path_to_profile_image7.jpg" },
    { username: "User8", profileImg: "path_to_profile_image8.jpg" },
    { username: "User7", profileImg: "path_to_profile_image7.jpg" },
    { username: "User8", profileImg: "path_to_profile_image8.jpg" },
  ];

  return (
    <div className="storyBlock">
      <div className="storySection">
        {stories.map((story, index) => (
          <Story
            key={index}
            username={story.username}
            profileImg={story.profileImg}
          />
        ))}
      </div>

      <div className="postSection">
        <div className="post">
          <div className="postInfo">
            <img
              className="postInfoImg"
              src="https://static.toiimg.com/thumb/msid-101260613,imgsize-19216,width-400,resizemode-4/101260613.jpg"
              alt="srk"
            />
            <div className="username">Sharukh khan</div>
            <div className="timingInfo">. 36 m</div>
          </div>
          <div className="postImg">
            <img
              className="image"
              src="https://static.toiimg.com/thumb/msid-101260613,imgsize-19216,width-400,resizemode-4/101260613.jpg"
              alt="post"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySection;
