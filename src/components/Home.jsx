import React, { useState } from "react";
import coverphoto from "../images/coverphoto.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/buttons.css";

import {
  Geospan, Chippendale, NRLOpenSource, Brick, PyChat, CoreNLP, EVChargingMap, InspectorRobot,
  ElectricCouncilMap, Heineken, Shuffleboard, HerbicideMapping,
  Robotatouille, Roost, Blackjack, AustraliaDatabases,
  SmartTrafficLantern, Deepracer, PalePavements, HarbourTunnel
} from "./modals";

// All project modules centralized
const projects = [
  { id: "heineken", year: [2021], component: <Heineken /> },
  { id: "herbicide", year: [2020, 2021], component: <HerbicideMapping /> },
  { id: "robotatouille", year: [2020], component: <Robotatouille /> },
  { id: "inspector", year: [2021, 2022], component: <InspectorRobot /> },
  { id: "brick", year: [2022], component: <Brick /> },
  { id: "pychat", year: [2021, 2022], component: <PyChat /> },
  { id: "corenlp", year: [2021, 2022], component: <CoreNLP /> },
  { id: "roost", year: [2023, 2024, 2025, 2026], component: <Roost /> },
  { id: "australia-db", year: [2024], component: <AustraliaDatabases /> },
  { id: "deepracer", year: [2022], component: <Deepracer /> },
  { id: "shuffleboard", year: [2021], component: <Shuffleboard /> },
  { id: "blackjack", year: [2020], component: <Blackjack /> },
  { id: "smarttraffic", year: [2024], component: <SmartTrafficLantern /> },
  { id: "electric-council", year: [2024, 2025], component: <ElectricCouncilMap /> },
  { id: "ev-charging", year: [2024], component: <EVChargingMap /> },
  { id: "nrl", year: [2024, 2025], component: <NRLOpenSource /> },
  { id: "animal-detect", year: [2025, 2026], component: <PalePavements /> },
  { id: "harbour-tunnel", year: [2025], component: <HarbourTunnel /> },
  { id: "chippendale", year: [2024], component: <Chippendale /> },
  { id: "geospan", year: [2025, 2026], component: <Geospan /> }
];

function Home() {
  const [selectedYear, setSelectedYear] = useState("all");

  const displayedProjects =
    selectedYear === "all"
      ? projects
      : projects.filter((p) => p.year.includes(parseInt(selectedYear)));

  // Split into chunks of 3 for rows
  const chunkedProjects = [];
  for (let i = 0; i < displayedProjects.length; i += 3) {
    chunkedProjects.push(displayedProjects.slice(i, i + 3));
  }

  return (
    <div>
      <div className="container" style={{ paddingBottom: "80px" }}>
        {/* Header */}
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img className="img-fluid rounded mb-4 mb-lg-0" src={coverphoto} alt="" />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Hi, I'm Beau</h1>
            <p style={{ margin: 0 }}>
              and I like robots. Here are some projects I have worked on...
            </p>
          </div>
        </div>

        {/* Year Filter Dropdown */}
        <div className="row" style={{ paddingBottom: "20px" }}>
          <div className="col" style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
            {["All", 2020, 2021, 2022, 2023, 2024, 2025, 2026].map((year) => {
              const isSelected = selectedYear === String(year).toLowerCase();
              return (
                <button
                  key={year}
                  type="button"
                  onClick={() => setSelectedYear(String(year).toLowerCase())}
                  className={
                    isSelected ? "year-filter year-filter--selected" : "year-filter"
                  }
                >
                  {year}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects: 3 per row */}
        {chunkedProjects.map((row, rowIndex) => (
          <div className="row" key={rowIndex} style={{ marginBottom: "20px" }}>
            {row.map((project) => (
              <React.Fragment key={project.id}>{project.component}</React.Fragment>
            ))}
            {/* Fill remaining columns to simulate 3 per row */}
            {Array.from({ length: 3 - row.length }).map((_, i) => (
              <div className="col-12 col-sm-6 col-md-4" key={`placeholder-${rowIndex}-${i}`} style={{ visibility: "hidden" }}>
                Placeholder
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
