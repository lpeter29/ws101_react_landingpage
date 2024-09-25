import "./Hero.css";
import WebDev from './WebDev.jpg'
function Hero() {
  return (
    <section id="home" className="section visible">
      <div className="hero-content">
        <div className="text-content">
          <h1>What is website development?</h1>
          <p>
            Web development involves creating and maintaining websites, web applications,
            and other online platforms using various programming languages, frameworks, and tools.
          </p>
          <div className="image-content">
            <img src={WebDev} alt="Web Development" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
