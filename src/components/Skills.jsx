import React from "react";
import about_photo from "../images/about_photo.png";
import SkillBar from "react-skillbars";

const robot_skills = [
  { type: "Arduino", level: 90 },
  { type: "Assembly", level: 85 },
  { type: "Electronics", level: 50 },
  { type: "MCUs", level: 90 },
  { type: "MicroRos", level: 75 },
  { type: "RPI", level: 80 },
  { type: "ROS/ROS2", level: 85 },
  {
    type: "SystemDesign",
    level: 95,
    color: {
      bar: "#a4dbb9",
    },
  },
];

const software_skills = [
  { type: "C/C++", level: 90 },
  { type: "Java", level: 65 },
  { type: "Javascript", level: 70 },
  { type: "MATLAB", level: 90 },
  { type: "ML\t(TF)", level: 75 },
  {
    type: "Python",
    level: 100,
    color: {
      bar: "#a4dbb9",
    },
  },
  { type: "ReactJS", level: 60 },
];

const other_skills = [
  { type: "Agile", level: 80 },
  { type: "AI\tDesign", level: 90 },
  {
    type: "Leadership",
    level: 95,
    color: {
      bar: "#a4dbb9",
    },
  },
  { type: "Teamwork", level: 90 },
];

const colors = {
  bar: "#c4c4c4",
  title: {
    text: "#FFF",
    background: "#949494",
  },
};
const colors_inverted = {
  bar: "#949494",
  title: {
    text: "#FFF",
    background: "#c4c4c4",
  },
};

function Skills() {
  return (
    <div
      className="about"
      style={{
        paddingBottom: "80px",
      }}
    >
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={about_photo}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Skills</h1>
            <p>
              Below are my listed skills for everything mechatronics related.
            </p>
          </div>
        </div>

        <div>
          <h4 class="font-weight-light">Robotic Specific Skills</h4>

          <SkillBar skills={robot_skills} colors={colors} height={"3vh"} />
          <br></br>
          <h4 class="font-weight-light">Software Skills</h4>
          <SkillBar skills={software_skills} colors={colors} height={"3vh"} />
          <br></br>
          <h4 class="font-weight-light">Other Skills</h4>
          <SkillBar skills={other_skills} colors={colors} height={"3vh"} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
