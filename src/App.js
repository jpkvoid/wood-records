import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('mics');
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "The Shed Sessions",
      artist: "Pine & Oak",
      year: "2023",
      services: ["Recording", "Mixing"],
      cover: "https://accidentallywesanderson.com/wp-content/uploads/2020/04/53472952_2412166782344723_3727593582141094838_n.jpg",
      link: "#"
    },
    {
      title: "Grain & Texture",
      artist: "Maple Brothers",
      year: "2022",
      services: ["Full Production"],
      cover: "https://accidentallywesanderson.com/wp-content/uploads/2021/06/199161343_1395264844184539_4223523226218225616_n.jpg",
      link: "#"
    },
    {
      title: "Resonance",
      artist: "Birch Ensemble",
      year: "2023",
      services: ["Drum Recording", "Analog Mixing"],
      cover: "https://accidentallywesanderson.com/wp-content/uploads/2020/04/43913426_736009136757005_8350703739313308730_n.jpg",
      link: "#"
    }
  ];

  return (
    <div className="App">
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <h1>WOOD<span>RECORDS</span></h1>
            <h1>       </h1>
          </div>
          <nav>
            <a href="#studio">Studio</a>
            <a href="#services">Services</a>
            <a href="#gear">Gear</a>
            <a href="#contact" className="nav-cta">Book Session</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <video autoPlay muted loop className="hero-video">
            <source src="/studio-video.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            {/* <p className="pre-title">Premium Recording Studio</p> */}
            <h2>Mix & Enregistrement<br /><span>au centre d'Yverdon</span></h2>
            {/* <a href="#contact" className="hero-cta">Explore Sessions →</a> */}
          </div>
        </section>

        <section id="studio" className="studio-section">
          <div className="studio-content">
            <p className="section-subtitle">Le lieu</p>
            <h3>Un son <span>fait main</span></h3>
            <p>Construit dans une cabane de jardin réaménagée, Wood Records offre une cabine d'enregistrement isolée dans un cadre lumineux et naturel</p>
            <ul className="studio-features">
              <li>Pas une cave</li>
              <li>Douche</li>
              <li>Thibault le plus beau aux manettes</li>
            </ul>
          </div>
          <div className="studio-image-carousel">
            <div className="carousel-image active" style={{ backgroundImage: "url('https://woodrecords.ch/images/img_3937.jpg')" }}></div>
            {/* <div className="carousel-image" style={{ backgroundImage: "url('https://woodrecords.ch/images/img_3937.jpg')" }}></div> */}
            {/* <div className="carousel-dots">
              <span className="dot active"></span>
              <span className="dot"></span>
            </div> */}
          </div>
        </section>

        <section id="services" className="services-section">
          <div className="section-header">
            <p className="section-subtitle">What We Offer</p>
            <h3>Tailored <span>Recording</span> Solutions</h3>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="card-number">01</div>
              <h4>Full Production</h4>
              <p>From tracking to mastering with our end-to-end analog/digital hybrid workflow</p>
              <ul className="service-features">
                <li>Artist development</li>
                <li>Session musicians</li>
                <li>Vintage gear selection</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="card-number">02</div>
              <h4>Mix Processing</h4>
              <p>Send us your stems for analog summing and premium outboard processing</p>
              <ul className="service-features">
                <li>API 2500 bus compression</li>
                <li>Manley Massive Passive EQ</li>
                <li>Tape emulation</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="card-number">03</div>
              <h4>Drum Sessions</h4>
              <p>Specialized drum tracking with multiple mic setups and expert tuning</p>
              <ul className="service-features">
                <li>15+ mic positions</li>
                <li>Drum tuning service</li>
                <li>Custom room miking</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="gear" className="gear-section">
          <div className="section-header">
            <p className="section-subtitle">Our Arsenal</p>
            <h3>Curated <span>Equipment</span> Selection</h3>
          </div>
          <div className="gear-tabs">
            <button
              className={`tab-button ${activeTab === 'mics' ? 'active' : ''}`}
              onClick={() => setActiveTab('mics')}
            >
              Microphones
            </button>
            <button
              className={`tab-button ${activeTab === 'outboard' ? 'active' : ''}`}
              onClick={() => setActiveTab('outboard')}
            >
              Outboard
            </button>
            <button
              className={`tab-button ${activeTab === 'instruments' ? 'active' : ''}`}
              onClick={() => setActiveTab('instruments')}
            >
              Instruments
            </button>
          </div>

          <div className="gear-grid">
            {activeTab === 'mics' && (
              <>
                <GearItem
                  name="Neumann U67"
                  description="German tube condenser with silky highs"
                  category="Vintage LDC"
                />
                <GearItem
                  name="Coles 4038"
                  description="British ribbon for smooth brass/strings"
                  category="Ribbon"
                />
                <GearItem
                  name="Sony C800G"
                  description="Japanese vocal masterpiece"
                  category="Modern LDC"
                />
              </>
            )}

            {activeTab === 'outboard' && (
              <>
                <GearItem
                  name="Neve 1073"
                  description="Classic British preamp/EQ"
                  category="Preamps"
                />
                <GearItem
                  name="Fairchild 670"
                  description="Legendary tube compressor"
                  category="Compression"
                />
                <GearItem
                  name="Pultec EQP-1A"
                  description="Program EQ magic"
                  category="Equalization"
                />
              </>
            )}

            {activeTab === 'instruments' && (
              <>
                <GearItem
                  name="Ludwig Classic Maple"
                  description="1972 4-piece kit"
                  category="Drums"
                />
                <GearItem
                  name="Fender '63 Jazz Bass"
                  description="All-original"
                  category="Bass"
                />
                <GearItem
                  name="Hammond B3"
                  description="With Leslie 122"
                  category="Keys"
                />
              </>
            )}
          </div>
        </section>


        <section id="projects" className="projects-section">
          <div className="section-header">
            <p className="section-subtitle">Our Work</p>
            <h3>Featured <span>Projects</span></h3>
            <p className="section-description">Music brought to life in our wooden sanctuary</p>
          </div>

          <div className="projects-container">
            <div className="project-display">
              <div className="project-image"
                style={{ backgroundImage: `url(${projects[activeProject].cover})` }}>
                <div className="project-overlay">
                  <button className="play-button">
                    <span>▶</span>
                  </button>
                </div>
              </div>
              <div className="project-info">
                <h4>{projects[activeProject].title}</h4>
                <p className="project-artist">{projects[activeProject].artist} • {projects[activeProject].year}</p>
                <div className="project-services">
                  {projects[activeProject].services.map((service, index) => (
                    <span key={index} className="service-tag">{service}</span>
                  ))}
                </div>
                <a href={projects[activeProject].link} className="project-link">
                  Listen Now <span>→</span>
                </a>
              </div>
            </div>

            <div className="project-selector">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`project-thumbnail ${index === activeProject ? 'active' : ''}`}
                  onClick={() => setActiveProject(index)}
                >
                  <div className="thumbnail-image"
                    style={{ backgroundImage: `url(${project.cover})` }}></div>
                  <div className="thumbnail-info">
                    <p>{project.artist}</p>
                    <h5>{project.title}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section id="contact" className="contact-section">
          <div className="contact-form-container">
            <div className="form-header">
              <p className="section-subtitle">Get In Touch</p>
              <h3>Start Your <span>Project</span></h3>
              <p>Tell us about your recording needs and we'll craft a custom solution</p>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder=" " />
                <label>Your Name</label>
              </div>
              <div className="form-group">
                <input type="email" placeholder=" " />
                <label>Email</label>
              </div>
              <div className="form-group">
                <select>
                  <option value="">Service Needed</option>
                  <option value="recording">Full Recording</option>
                  <option value="mixing">Mixing</option>
                  <option value="mastering">Mastering</option>
                </select>
              </div>
              <div className="form-group">
                <textarea placeholder=" "></textarea>
                <label>Project Details</label>
              </div>
              <button type="submit" className="submit-button">
                Send Request
                <span className="arrow">→</span>
              </button>
            </form>
          </div>
          <div className="contact-image">
            <div className="image-overlay"></div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="logo">
              <h4>WOOD<span>RECORDS</span></h4>
            </div>
            <p>Analog soul in a digital world</p>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h5>Studio</h5>
              <a href="#studio">The Space</a>
              <a href="#gear">Equipment</a>
              <a href="#services">Services</a>
            </div>
            <div className="link-group">
              <h5>Connect</h5>
              <a href="#">Instagram</a>
              <a href="#">Spotify</a>
              <a href="#">LinkedIn</a>
            </div>
            <div className="link-group">
              <h5>Legal</h5>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Imprint</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Wood Records. All rights reserved.</p>
          <p>Handcrafted in our wooden shed studio</p>
        </div>
      </footer>
    </div>
  );
}

function GearItem({ name, description, category }) {
  return (
    <div className="gear-item">
      <div className="gear-category">{category}</div>
      <h4>{name}</h4>
      <p>{description}</p>
    </div>
  );
}

export default App;