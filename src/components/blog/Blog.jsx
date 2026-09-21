import React, {Text} from "react";
import coverphoto from '../../images/coverphoto.png'
import heinkein_arm from '../../images/robot_arms_heinkein.png'
import weed_farm from '../../images/weed_farm.png'
import cooking_robot from '../../images/cooking_robot.png'
import white from '../../images/white.png'
import CardTile from "../cards/CardTile"
import "react-image-gallery/styles/css/image-gallery.css";

import Heineken from '../modals/Heineken'
import HerbicideMapping from '../modals/HerbicideMapping'
import Robotatouille from '../modals/Robotatouille'


function Blog() {
  return (
    <div >
      <div class="container" style={{
      paddingBottom: '80px'}}>
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={coverphoto}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">My Blog</h1>
            <p>
              Documenting my life...
            </p>
            
          </div>
        </div>

        <div style={{
      display: "flex",
      flexDirection: "column",
      paddingTop: '20px'}}>
          <div class="row">

          <div class="col-sm">
          <CardTile photo={white} text={"TBD"} />
          </div>

          <div class="col-sm">
          <CardTile photo={white} text={"TBD"} />
          </div>

          <div class="col-sm">
            <CardTile photo={white} text={"TBD"} />
          </div>

        </div>       
        </div>

      </div>
      
    </div>
  );
}

export default Blog;
