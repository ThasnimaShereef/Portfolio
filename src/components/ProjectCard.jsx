import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, liveLink, githubLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="project-links">
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline-light me-2"
              >
                Live
              </a>
            )}
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline-light"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};
