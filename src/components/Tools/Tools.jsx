import "./Tools.css";
import Bootstrap from './Bootstrap.png'
import DevTools from './DevTools.jpeg'
import Github from './Github.png'
import VScode from './VScode.png'

function Tools() {
  return (
    <section id="tools" className="section visible">
      <h1>Essential Tools for Web Development</h1>
      <div className="tools-grid">
        <div className="tools-grid-item">
          <img src={VScode} alt="VS Code" />
          <p>Multiple programming languages are supported by VS Code, making it the perfect tool for developers working on a variety of projects.</p>
        </div>
        <div className="tools-grid-item">
          <img src={Github} alt="GitHub" />
          <p>Git repository hosting service GitHub has grown to become the go-to place for developers to save, distribute, and work together on projects.</p>
        </div>
        <div className="tools-grid-item">
          <img src={Bootstrap} alt="Bootstrap" />
          <p>Bootstrap's adaptable grid system, which dynamically adjusts the layout to different screen sizes and guarantees a consistent user experience across devices, is one of its core features.</p>
        </div>
        <div className="tools-grid-item">
          <img src={DevTools} alt="DevTools" />
          <p>A wide range of tools is available through Chrome DevTools, including DOM inspection, network monitoring, JavaScript debugging, performance evaluation, and others.</p>
        </div>
      </div>
    </section>
  );
}

export default Tools;
