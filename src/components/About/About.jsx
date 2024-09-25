import "./About.css";
import Connection from './Connection.jpg'
import Info from './Info.jpg'
import Idea from './Idea.png'
import Job from './Job.jpeg'



function About() {
  return (
    <section id="about" className="section visible">
      <h1>About Web Development</h1>
      <p id="web">
        Web development is crucial in today's digital world. It allows businesses to establish an online presence, 
        reach a wider audience, and provide essential information and services.
      </p>
      <div className="about-grid">
        <div className="about-grid-item">
          <img src={Connection} alt="Connection" />
          <p>
            Web development breaks geographical barriers, allowing businesses, institutions, 
            and individuals to reach a global audience easily.
          </p>
        </div>
        <div className="about-grid-item">
          <img src={Info} alt="Information" />
          <p>
            Websites are crucial for spreading information quickly and efficiently, making news, updates, 
            and educational content accessible worldwide.
          </p>
        </div>
        <div className="about-grid-item">
          <img src={Idea} alt="Idea" />
          <p>
            Web development encourages innovation, allowing creatives to conceptualize and 
            implement unique ideas in the digital space.
          </p>
        </div>
        <div className="about-grid-item">
          <img src={Job} alt="Job" />
          <p>
            The field of web development offers vast career opportunities and a high demand for 
            skilled professionals, creating significant job prospects in the IT sector.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
