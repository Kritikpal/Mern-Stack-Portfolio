import React from "react";
import { Col, Row } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

function ProjectSection() {
  const projects = [
    {
      title: "Personal Website/Portfolio",
      shortDescription:
        "Showcase your skills and projects with a personal website built using React and Node.js/Express.",
      description:
        "Develop a personal website that showcases your skills, projects, and resume. Use modern web development technologies, such as React for the front end and Node.js/Express for the back end.",
      technologies: ["React", "Node.js", "Express"],
      githubRepo: "https://github.com/yourusername/personal-website",
      image:
        "https://jstemplate.net/_next/image?url=https%3A%2F%2Fwp.jstemplate.net%2Fwp-content%2Fuploads%2F2023%2F05%2Fnextjs-1024x702.png&w=3840&q=75",
    },
    {
      title: "E-commerce Platform",
      shortDescription:
        "Create a full-stack e-commerce website with React, Node.js, Express, MongoDB, and Stripe for payments.",
      description:
        "Build a full-stack e-commerce website with features like product listings, shopping cart, user authentication, and payment integration. Technologies: React, Node.js, Express, MongoDB, Stripe for payments.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      githubRepo: "https://github.com/yourusername/e-commerce-platform",
      image:
        "https://cdn.dribbble.com/users/2134563/screenshots/4971353/frame.png",
    },
    {
      title: "Social Media Dashboard",
      shortDescription:
        "Manage and schedule social media posts across different platforms using React and Firebase.",
      description:
        "Create a social media dashboard that allows users to manage and schedule posts across different platforms. Use technologies like React for the front end and Firebase for real-time data updates.",
      technologies: ["React", "Firebase"],
      githubRepo: "https://github.com/yourusername/social-media-dashboard",
      image:
        "https://slidemodel.com/wp-content/uploads/21827-01-social-media-dashboard-template-for-powerpoint-16x9-1.jpg",
    },
    {
      title: "Task Management App",
      shortDescription:
        "Build a task management app with user authentication and MongoDB for storing tasks.",
      description:
        "Build a task management application with features like creating, updating, and deleting tasks. Implement user authentication and store task data in a database (e.g., MongoDB).",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      githubRepo: "https://github.com/yourusername/task-management-app",
      image:
        "https://cdn.dribbble.com/userupload/8648743/file/original-f36f7a4bf217c250db9ee551db2b1b9d.png",
    },
    {
      title: "Real-time Chat Application",
      shortDescription:
        "Develop a real-time chat application supporting one-on-one or group messaging with React, Node.js, Express, and Socket.io.",
      description:
        "Develop a real-time chat application that supports one-on-one or group messaging. Use technologies like React, Node.js, Express, Socket.io for real-time communication.",
      technologies: ["React", "Node.js", "Express", "Socket.io"],
      githubRepo: "https://github.com/yourusername/real-time-chat-app",
      image:
        "https://a.storyblok.com/f/231922/1726x1041/f2a68d4de1/real-time-chat-cover-image.jpg/m/0x0/",
    },
    {
      title: "Weather App",
      shortDescription:
        "Fetch and display current weather conditions from a weather API using React and Node.js/Express.",
      description:
        "Create a weather application that fetches data from a weather API and displays current weather conditions. Use React for the front end and Node.js/Express for server-side logic.",
      technologies: ["React", "Node.js", "Express"],
      githubRepo: "https://github.com/yourusername/weather-app",
      image:
        "https://img.freepik.com/premium-vector/weather-app-ui-template-editable-vector_908119-7.jpg",
    },
  ];
  return (
    <div>
      <Row>
        {projects.map((project, index) => (
          <Col sm={12} md={6} lg={4} key={index}>
            <ProjectCard
              index={index}
              className="mb-3 shadow-md"
              key={index}
              image={project.image || null}
              projectTitle={project.title}
              projectShortDescription={project.shortDescription}
            />
          </Col>
        ))}
      </Row>
      <div className="text-end">
        <p>
          <a href="#">Show All</a>
        </p>
      </div>
    </div>
  );
}

export default ProjectSection;
