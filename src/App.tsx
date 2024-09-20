import React from "react";
import "./App.css";
function App() {
  return <div>
    <header className="first-container" id="header-nav">
      <nav>
        <ul>
          <li><a href="#">About Me</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#connect">Let's Connect</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <div id="main-container" className="first-container">
        <div id="content">
          <h3>Hi there, I'm</h3>
          <h1>Albert Randi</h1>
          <h2 id="location">a Web Developer based on Indonesia</h2>
          <article id="description">Delivering exceptional IT services tailored for businesses, organizations, and unique individuals like you. Experience unparalleled IT support designed to help your organization thrive in today’s digital landscape. Delivering personalized IT services that empower individuals and businesses alike.</article>
        </div>
        <aside>
          <img id="profile-image" src="images/profile.jpg" alt="Albert Randi" />
        </aside>
      </div>
      <div id="services" className="section">
        <h2 className="title-section">Services</h2>
        <div id="services-container">
          <div className="service-card">
            <div className="card-container">
              <img src="images/tools.png" />
              <h3>Web Development</h3>
              <p className="service-description">Creating responsive and user-friendly websites involves using flexible layouts and media queries to ensure the site adapts to various devices, from desktops to smartphones. It also includes designing intuitive navigation, optimizing for fast loading times, and ensuring accessibility for all users. Tailoring the website to specific needs means incorporating custom features, SEO optimization, and a content management system for easy updates. This approach ensures a seamless and enjoyable user experience, regardless of the device being used.</p>
            </div>
          </div>
          <div className="service-card">
            <div className="card-container">
              <img src="images/customer-service.png" alt="IT Support" />
              <h3>IT Support</h3>
              <p className="service-description">Providing IT support services involves offering technical assistance and solutions for various technological issues, such as computers, printers, networks, and devices. This includes troubleshooting problems, installing and configuring hardware and software, and performing regular maintenance to ensure smooth operations. IT support services aim to enhance productivity by resolving technical issues promptly and efficiently, allowing you to focus on your core business activities. Whether through an in-house team or outsourced professionals, these services ensure that your technology infrastructure runs seamlessly and securely, meeting all your technical needs.

              </p>
            </div>
          </div>
          <div className="service-card">
            <div className="card-container">
              <img src="images/it-alt.png" alt="Consulting" />
              <h3>Consulting</h3>
              <p className="service-description">Offering consulting services involves providing expert advice and guidance to help you make informed decisions about your IT needs. This includes assessing your current technology infrastructure, identifying areas for improvement, and recommending strategic solutions. IT consultants work closely with you to understand your business objectives and challenges, ensuring that the proposed solutions align with your goals. By leveraging their expertise, you can optimize your IT investments, enhance operational efficiency, and stay ahead of technological trends, ultimately driving your business forward.</p>
            </div>
          </div>
        </div>
      </div>
      <div id="connect" className="section">
        <div id="connect-container">
          <h2 id="connect-title" className="title-section text-left main-color">Connect with me</h2>
          <div className="text-subtitle">
            You could contact and connect me through following media, I'm available to talk about any project or collaboration.
          </div>
          <hr className="second-border-color" />
          <div id="container-connect">

            <div className="connect-item">
              <a href="mailto:albertrandi72@gmail.com">
                <div className="icon-connect">
                  <img src="images/envelope.png" alt="Email" />
                </div>
                <div className="connect-sub">
                  WRITE ME -
                </div>
                <div className="connect-value">
                  albertrandi72@gmail.com
                </div>
              </a>
            </div>
            <div className="connect-item">
              <a href="https://github.com/albertrandi72">
                <div className="icon-connect">
                  <img src="images/github.png" alt="github" />
                </div>
                <div className="connect-sub">
                  CHECK ME -
                </div>
                <div className="connect-value">
                  github.com/albertrandi72
                </div>
              </a>
            </div>
            <div className="connect-item">
              <a href="https://www.linkedin.com/in/albert-randi/">
                <div className="icon-connect">
                  <img src="images/linkedin.png" alt="linkedin" />
                </div>
                <div className="connect-sub">
                  CONNECT ME -
                </div>
                <div className="connect-value">
                  www.linkedin.com/in/albert-randi/
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </main>
    <footer>
      <p>&copy; 2024 - created by albert randi - All rights Reserved</p>
    </footer>
    <script src="scripts/index.js"></script>
  </div>
}

export default App;
