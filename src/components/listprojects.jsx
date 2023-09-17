import React from "react";

const ImageCircle = ({ uri }) => {
  return (
    <div className="circle">
      <img src={uri} alt="Circle" />
    </div>
  );
};

const ProjectCard = ({
  title,
  description,
  tech,
  github,
  video,
  image,
  liveLink,
}) => {
  console.log(liveLink);
  return (
    <div className="project-card">
      <div className="project-image">
        <a target="_blank" rel="noopener noreferrer">
          <img src={image} alt={title} />
        </a>
      </div>
      <div className="project-details">
        <h2 className="project-title">{title}</h2>
        <p
          dangerouslySetInnerHTML={{ __html: description }}
          className="project-description"
        ></p>
        <div
          style={{ display: "flex", flexDirection: "row" }}
          className="image-circle-list"
        >
          {tech.map((uri, index) => (
            <ImageCircle key={index} uri={uri} />
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <a
            href={github}
            className="btn btn-primary project-github-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          {liveLink ? (
            <a
              href={liveLink}
              className="btn btn-primary project-github-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>
          ) : (
            ""
          )}
          {video ? (
            <a
              href={liveLink}
              className="btn btn-primary project-video-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Video
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list row">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectList;
