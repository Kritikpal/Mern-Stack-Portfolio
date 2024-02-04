import { Col, Row } from "react-bootstrap";
import face from "../../Images/face-2.png";
import "../../css/sidebar.css";
import SkillCircularLoader from "./SkillCircularLoader";
import SidebarAddress from "./SidebarAddress";
import SidebarHorigentalProgress from "./SidebarHorigentalProgress";
import SidebarFooter from "./sidebarfooter";
function Sidebar() {
  let skills = [
    {
      name: "HTML",
      percentage: 90,
    },
    {
      name: "CSS",
      percentage: 80,
    },
    {
      name: "JS",
      percentage: 70,
    },
  ];
  let frameworks = [
    {
      name: "React",
      percentage: 90,
    },
    {
      name: "Spring boot",
      percentage: 80,
    },
    {
      name: "Angular",
      percentage: 70,
    },
    {
      name: "Django",
      percentage: 60,
    },
  ];
  const cutomAttribut = {
    loaderThickness: 10,
  };
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-top">
          <div className="sidebar-top-content">
            <img src="face-2.png" alt="face" className="sidebar-img" />
            <div className="sidebar-name">Kritik</div>
            <div className="sidebar-designation">Software Developer</div>
          </div>
        </div>
        <div className="scrollable-content">
          <SidebarAddress />
          <hr />
          <Row>
            {skills.map((skill, index) => {
              return (
                <Col>
                  <SkillCircularLoader
                    key={index}
                    {...skill}
                    {...cutomAttribut}
                  />
                </Col>
              );
            })}
          </Row>
          <hr />
          <Row>
            {frameworks.map((skill, index) => {
              return (
                <Col sm={12}>
                  <SidebarHorigentalProgress
                    key={index}
                    {...skill}
                    {...cutomAttribut}
                  />
                </Col>
              );
            })}
          </Row>
        </div>
        <SidebarFooter />
      </div>
    </>
  );
}

export default Sidebar;
