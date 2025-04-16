import React from "react";
import happyEarth from '../assets/happy-earth.png';
import sadEarth from '../assets/sad-earth.png';
import neutralEarth from '../assets/neutral-earth.png';

const ClimateAvatar = ({ progress }) => {
  let mood;
  if (progress >= 75) mood = "happy";
  else if (progress >= 40) mood = "neutral";
  else mood = "sad";

  let avatarImg;
  if (mood === "happy") avatarImg = happyEarth;
  else if (mood === "neutral") avatarImg = neutralEarth;
  else avatarImg = sadEarth;

  return (
      <img 
        src={avatarImg} 
        alt="Climate Avatar" 
        style={{ width: "60px", height: "60px" }}
      />
  );
};

export default ClimateAvatar;
