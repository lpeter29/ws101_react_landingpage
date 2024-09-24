import "./Tools.css";
function Tools() {
  return (
    <section id="tools" className="section visible">
      <h1>Essential Tools for Web Development</h1>
      <div className="tools-grid">
        <div className="tools-grid-item">
          <img src="/assets/VScode.png" alt="VS Code" />
          <p>Multiple programming languages are supported by VS Code, making it the perfect tool for developers working on a variety of projects.</p>
        </div>
        <div className="tools-grid-item">
          <img src="/assets/Github.png" alt="GitHub" />
          <p>Git repository hosting service GitHub has grown to become the go-to place for developers to save, distribute, and work together on projects.</p>
        </div>
        <div className="tools-grid-item">
          <img src="/assets/Bootstrap.png" alt="Bootstrap" />
          <p>Bootstrap's adaptable grid system, which dynamically adjusts the layout to different screen sizes and guarantees a consistent user experience across devices, is one of its core features.</p>
        </div>
        <div className="tools-grid-item">
          <img src="/assets/DevTools.jpeg" alt="DevTools" />
          <p>A wide range of tools is available through Chrome DevTools, including DOM inspection, network monitoring, JavaScript debugging, performance evaluation, and others.</p>
        </div>
      </div>
    </section>
  );
}

export default Tools;
