import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import htmlIcon from "../assets/img/html.png";
import cssIcon from "../assets/img/css.png";
import jsIcon from "../assets/img/js.png";
import reactIcon from "../assets/img/react.png";
import javaIcon from "../assets/img/java.png";
import sqlIcon from "../assets/img/sql.png";
import githubIcon from "../assets/img/git.png";
import csharpIcon from "../assets/img/c-sharp.png";
import jqueryIcon from "../assets/img/jquery.png";
import mysqlIcon from "../assets/img/mysql.png";
import pythonIcon from "../assets/img/python.png";
import vsIcon from "../assets/img/visual-studio-code.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 2 }
  };

  const skills = [
    { icon: htmlIcon},
    { icon: cssIcon},
    { icon: jsIcon},
    { icon: reactIcon},
    { icon: javaIcon},
    { icon: sqlIcon},
    { icon: githubIcon},
    { icon: csharpIcon},
    { icon: jqueryIcon},
    { icon: mysqlIcon},
    { icon: pythonIcon},
    { icon: vsIcon},
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>These are the tools and technologies I’ve worked with throughout my development journey. I’m always open to learning new frameworks and improving my existing skills to stay up-to-date with the evolving tech landscape.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {skills.map((skill, index) => (
                  <div className="item skill-icon-card" key={index}>
                    <div className="icon-wrapper">
                      <img src={skill.icon} width={50} height={50} />
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
