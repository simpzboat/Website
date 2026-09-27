import React from "react";
import about_photo from "../images/about_photo.png";
import aboutmephoto from "../images/aboutme.png";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={aboutmephoto}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About</h1>
            <p>
              Hi, I am Beau Hobba, and I am a mechatronics engineer, residing in Sydney and running Geospan. 
                          <br></br>
              <br></br>
I grew up on a small Dorper Sheep stud (and at one point a vineyard known as Shepherd's Moon), in Barwang, 
a town with no real population about 20km from both Young and Harden (neither of which are much bigger). 
I spent most of my time hanging out with my chickens (I had a lot of them)
 and helping my dad, who worked in the Blue Mountains.

At one point, my best mate and I ran Australia’s largest 'Kit PvP' Minecraft server,
 UHS, and I spent more time than I’d like to admit dreaming about and coding plugins for it.
  Then, when my brother moved out, I got my hands on his Mindstorms kit,
   which took that interest in coding into the physical world.
    From there, the rest is history.

              <br></br>
              <br></br>My passions lie in automation, intelligent transporation,
              AI, earth/space exploration, agriculture, and ethical robotics. I
              firmly believe robotics is a central part of our future and am
              fascinated by their ability to assist our everyday lives. I think
              as a mechatronics engineer we have an inherit ability to create
              systems which define the world we live in, so it is our responsibility to ensure we use our skills for good.               
              <br></br>
              <br></br>
              Stemming from the enjoyment of catching and researching yabbies
              when I was younger at the farm dam, one thing led to another, and
              I found myself walking up remote waterfalls looking for spiny
              crays. In my spare time, I now try to photograph and observe any
              creature endemic to Australia and have become an avid twitcher. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
