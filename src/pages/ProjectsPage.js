import React from "react";
import ProjectCard from "../components/Projects/ProjectCard";
import { Col, Row } from "react-bootstrap";
import AppTitle from "../components/elements/AppTitle";
import "../components/Projects/projects.css";
import CustomesSection from "../components/Projects/CustomesSection";
import ProjectSection from "../components/Projects/ProjectSection";

function ProjectsPage() {
  return (
    <div className="m-lg-4 m-md-3 m-sm-2 m-xs-2">
      <AppTitle title="Projects" />
      <ProjectSection />

      <CustomesSection />
    </div>
  );
}

export default ProjectsPage;
