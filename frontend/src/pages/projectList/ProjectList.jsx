import React, { useEffect, useState } from "react";
import "./ProjectList.css";
import axios from "axios";

export default function ProjectList() {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/projects`)
      .then((allData) => setProjectData(allData.data));
  }, []);

  return (
    <>
      <h1 className="h1-mg">Les projets et réalisations</h1>
      <div className="container-projectlist">
        {projectData.map((project) => (
          <div className="card-details">
            <h1>{project.project_name}</h1>
            <img src={project.project_picture} alt="" className="img-project" />
            <div className="btn-div">
              <button type="button">Détails du projet</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
