import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githublink }) => {
  const codeView = () => {
    window.open(githublink, "_blank")
  }
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx my-2">
        <img className='proj-img' src={imgUrl} alt="headerimg" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      <div className="my-2 proj-btn">
        <button onClick={codeView}>View Code</button>
      </div>
    </Col>
  )
} 