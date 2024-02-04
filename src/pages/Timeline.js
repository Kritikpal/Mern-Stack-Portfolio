import { Col, Row } from "react-bootstrap";
import "../css/timeline.css";
import { animated } from "react-spring";
import { useSlidingAnimation } from "../hooks/useAnimations";
import AppTitle from "../components/elements/AppTitle";
import HigherOrderSuspendedComponent from "../components/elements/HigherOrderSuspendedComponent.js";
import { FetchStudyTimelien } from "../constants/apiEndpoints.js";
import { useCustomQuery } from "../hooks/useCustomQuery.js";

function Timeline({}) {
  let {
    data: studyTimeLines,
    isLoading,
    error,
  } = useCustomQuery(FetchStudyTimelien.endPoint, FetchStudyTimelien.key);
  const jobTimeLines = [
    {
      startYear: "2021",
      endYear: "2022",
      title: "Freeelancer",
      subTitle: "Tech Solutions Inc.",
      description:
        "Joined as a junior developer, worked on various projects, and gained hands-on experience with web development technologies.",
    },
    {
      startYear: "2022",
      endYear: "2023",
      title: "Associate Software Engineer",
      subTitle: "Innovate Tech Co.",
      description:
        "Promoted to Ass, contributed to the development of innovative software solutions, and collaborated with cross-functional teams.",
    },
    {
      startYear: "2023",
      endYear: "Present",
      title: "Software Engineer",
      subTitle: "Future Tech Innovations",
      description:
        "Currently serving as a software engineer, leading project teams, mentoring junior developers, and contributing to the company's growth.",
    },
  ];
  return (
    <>
      <Row>
        <Col>
          <div class="timeline-box">
            <AppTitle title="Education"></AppTitle>
            <ul>
              <HigherOrderSuspendedComponent
                isLoading={isLoading}
                error={error}
              >
                {(studyTimeLines || []).map((timeline, index) => {
                  return (
                    <TimelineItem
                      {...timeline}
                      key={timeline.title}
                      index={index}
                      animationDirection="top-to-bottom"
                    />
                  );
                })}
              </HigherOrderSuspendedComponent>
            </ul>
          </div>
        </Col>
        <Col>
          <div class="timeline-box">
            <AppTitle title="Work Experience" />
            <ul>
              {jobTimeLines.map((timeline, index) => {
                return (
                  <TimelineItem
                    {...timeline}
                    key={timeline.title}
                    index={index}
                    animationDirection="top-to-bottom"
                  />
                );
              })}
            </ul>
          </div>
        </Col>
      </Row>
    </>
  );
}

function TimelineItem({
  startYear,
  endYear,
  title,
  subTitle,
  description,
  index,
  animationDirection = "left-to-right",
}) {
  return (
    <animated.div
      style={useSlidingAnimation({
        delay: index * 500,
        direction: animationDirection,
      })}
    >
      <li>
        <span></span>
        <div class="title">{title}</div>
        <div class="sub-title">{subTitle}</div>
        <div class="info">{description}</div>
        <div class="time">
          <span>{startYear}</span>
          <span>{endYear}</span>
        </div>
      </li>
    </animated.div>
  );
}

export default Timeline;
