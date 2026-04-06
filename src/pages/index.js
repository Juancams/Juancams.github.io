import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import pic1 from '../assets/images/pic01.jpeg';
import pic2 from '../assets/images/pic02.png';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.png';
import gif from '../assets/images/shinchan.gif';
import gif2 from '../assets/images/kururu.gif';
import Scroll from '../components/Scroll';

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'experience', name: 'Experience', icon: 'fa-briefcase' },
  { id: 'papers', name: 'Papers', icon: 'fa-file' },
  { id: 'achievements', name: 'Achievements', icon: 'fa-trophy' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt">
              Hi! I'm <strong>Juan Carlos Manzanares Serrano</strong>
              <br />
              Robotics Researcher
            </h2>
            <p>Coffee with milk is like coffee but with milk </p>
          </header>
        </div>
      </section>

      <section id="portfolio" className="two">
        <div className="container">
          <header>
            <h2>Portfolio</h2>
          </header>

          <p>
            A showcase of my latest work in robotics and software engineering, featuring mobile bases,
            quadruped robots, advanced simulation environments, ROS 2 utilities, and Continuous Integration (CI) workflows.
          </p>

          <div className="row">
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="https://github.com/Tiago-Harmonic" className="image fit">
                  <img src={pic1} alt="" />
                </a>
                <header>
                  <h3 style={{ fontWeight: 'bold' }}>Tiago Harmonic</h3>
                  <p>A Gazebo Harmonic simulation wrapper for the Tiago robot.</p>
                </header>
              </article>
              <article className="item">
                <a href="https://github.com/Juancams/rviz_publisher" className="image fit">
                  <img src={pic2} alt="" />
                </a>
                <header>
                  <h3 style={{ fontWeight: 'bold' }}>RViz Publisher</h3>
                  <p>Tool to generate rviz plugins using a yaml file.</p>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="https://github.com/Unitree-Go2-Robot" className="image fit">
                  <img src={pic3} alt="" />
                </a>
                <header>
                  <h3 style={{ fontWeight: 'bold' }}>Unitree Go 2</h3>
                  <p>Go 2 wrapper to provide ROS 2 users a simple API to use the robot.</p>
                </header>
              </article>
              <br />
              <article className="item">
                <img src={gif} alt="" />
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="https://github.com/Juancams/kobuki_ros" className="image fit">
                  <img src={pic4} alt="" />
                </a>
                <header>
                  <h3 style={{ fontWeight: 'bold' }}>Kobuki ROS 2</h3>
                  <p>Updated ROS 2 drivers for the Kobuki mobile base in jazzy/rolling distributions.</p>
                </header>
              </article>
              <article className="item">
                <a href="https://github.com/marketplace/actions/date-last-ci" className="image fit">
                  <img src={pic5} alt="" />
                </a>
                <header>
                  <h3 style={{ fontWeight: 'bold' }}>Date Last CI</h3>
                  <p>A GitHub Action that automates the generation and display of dynamic Shields.io badges showing the last successful CI build date.</p>
                </header>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="three">
        <div className="container">
          <header>
            <h2>Work Experience</h2>
          </header>

          <p>
            My professional journey in robotics research, software development, and automation.
          </p>

          <div style={{ textAlign: 'left', marginTop: '40px', paddingLeft: '20px', maxWidth: '800px', margin: '40px auto 0 auto' }}>

            <div style={{ position: 'relative', borderLeft: '3px solid #ccc', paddingLeft: '30px', paddingBottom: '40px' }}>
              <span style={{ position: 'absolute', left: '-11px', top: '0', width: '19px', height: '19px', borderRadius: '50%', backgroundColor: '#fff', border: '3px solid #888' }}></span>

              <h3 style={{ fontWeight: 'bold', margin: '0 0 5px 0', fontSize: '1.3em' }}>Robotics Software Engineer</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '10px' }}>
                <span style={{ fontSize: '1.1em', color: '#555', fontWeight: 'bold' }}>Monodon (Navantia), Madrid</span>
                <span style={{ fontSize: '0.9em', fontStyle: 'italic', color: '#888' }}>03/2026 - Present</span>
              </div>
              <p style={{ margin: 0, fontSize: '0.95em' }}>
                Development of software for naval platforms.
              </p>
            </div>

            <div style={{ position: 'relative', borderLeft: '3px solid #ccc', paddingLeft: '30px', paddingBottom: '40px' }}>
              <span style={{ position: 'absolute', left: '-11px', top: '0', width: '19px', height: '19px', borderRadius: '50%', backgroundColor: '#fff', border: '3px solid #888' }}></span>

              <h3 style={{ fontWeight: 'bold', margin: '0 0 5px 0', fontSize: '1.3em' }}>Technical Support Staff</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '10px' }}>
                <span style={{ fontSize: '1.1em', color: '#555', fontWeight: 'bold' }}>Universidad Rey Juan Carlos, Fuenlabrada</span>
                <span style={{ fontSize: '0.9em', fontStyle: 'italic', color: '#888' }}>12/2024 - 11/2025</span>
              </div>
              <p style={{ margin: 0, fontSize: '0.95em' }}>
                Technical support for robots in the CoreSense project and participation in RoboCup.
              </p>
            </div>

            <div style={{ position: 'relative', borderLeft: '3px solid #ccc', paddingLeft: '30px', paddingBottom: '40px' }}>
              <span style={{ position: 'absolute', left: '-11px', top: '0', width: '19px', height: '19px', borderRadius: '50%', backgroundColor: '#fff', border: '3px solid #888' }}></span>

              <h3 style={{ fontWeight: 'bold', margin: '0 0 5px 0', fontSize: '1.3em' }}>Specialist Technical Staff</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '10px' }}>
                <span style={{ fontSize: '1.1em', color: '#555', fontWeight: 'bold' }}>Universidad Rey Juan Carlos, Fuenlabrada</span>
                <span style={{ fontSize: '0.9em', fontStyle: 'italic', color: '#888' }}>03/2024 - 11/2024</span>
              </div>
              <p style={{ margin: 0, fontSize: '0.95em' }}>
                Integration of robotic, optical and lighting elements from the Laboratory of Guidance, Navigastion and Control of Spacecraft in Co-orbital Flight into a ROS 2-based simulator.
              </p>
            </div>

            <div style={{ position: 'relative', borderLeft: '3px solid #ccc', paddingLeft: '30px', paddingBottom: '40px' }}>
              <span style={{ position: 'absolute', left: '-11px', top: '0', width: '19px', height: '19px', borderRadius: '50%', backgroundColor: '#fff', border: '3px solid #888' }}></span>

              <h3 style={{ fontWeight: 'bold', margin: '0 0 5px 0', fontSize: '1.3em' }}>Technical Support Staff</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '10px' }}>
                <span style={{ fontSize: '1.1em', color: '#555', fontWeight: 'bold' }}>Universidad Rey Juan Carlos, Fuenlabrada</span>
                <span style={{ fontSize: '0.9em', fontStyle: 'italic', color: '#888' }}>10/2022 - 02/2024</span>
              </div>
              <p style={{ margin: 0, fontSize: '0.95em' }}>
                Technical support for robots in the CoreSense project and participation in RoboCup.
              </p>
            </div>

            <div style={{ position: 'relative', borderLeft: '3px solid #ccc', paddingLeft: '30px', paddingBottom: '40px' }}>
              <span style={{ position: 'absolute', left: '-11px', top: '0', width: '19px', height: '19px', borderRadius: '50%', backgroundColor: '#fff', border: '3px solid #888' }}></span>

              <h3 style={{ fontWeight: 'bold', margin: '0 0 5px 0', fontSize: '1.3em' }}>University Intership</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '10px' }}>
                <span style={{ fontSize: '1.1em', color: '#555', fontWeight: 'bold' }}>Startiun. SL, Madrid</span>
                <span style={{ fontSize: '0.9em', fontStyle: 'italic', color: '#888' }}>01/2022 - 09/2022</span>
              </div>
              <p style={{ margin: 0, fontSize: '0.95em' }}>
                Development of a node recovery system for the ROS 2 framework and a robots with manipulator arm using MoveIt 2.
              </p>
            </div>

            <div style={{ position: 'relative', borderLeft: '3px solid transparent', paddingLeft: '30px' }}>
              <span style={{ position: 'absolute', left: '-11px', top: '0', width: '19px', height: '19px', borderRadius: '50%', backgroundColor: '#fff', border: '3px solid #888' }}></span>

              <h3 style={{ fontWeight: 'bold', margin: '0 0 5px 0', fontSize: '1.3em' }}>Senior Technician Intership</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '10px' }}>
                <span style={{ fontSize: '1.1em', color: '#555', fontWeight: 'bold' }}>Repsol, Puertollano</span>
                <span style={{ fontSize: '0.9em', fontStyle: 'italic', color: '#888' }}>04/2028 - 08/2018</span>
              </div>
              <p style={{ margin: 0, fontSize: '0.95em' }}>
                Assistant in maintenance and repairs of different plants, mainly the sulfur plant.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section id="papers" className="four">
        <div className="container">
          <header>
            <h2>Papers & Publications</h2>
          </header>

          <p>
            A selection of my recent academic publications, preprints, and research contributions in the field of robotics.
          </p>

          <div style={{ textAlign: 'left', marginTop: '30px' }}>

            <article style={{ marginBottom: '25px', paddingBottom: '20px', borderBottom: 'solid 1px rgba(0, 0, 0, 0.1)' }}>
              <h3 style={{ fontWeight: 'bold', margin: '0 0 10px 0', fontSize: '1.2em' }}>
                <a href="https://www.sciencedirect.com/science/article/abs/pii/S0921889025000454" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                  Towards a robotic intrusion prevention system: Combining security and safety in cognitive social robots
                </a>
              </h3>
              <p style={{ margin: '0 0 5px 0', fontSize: '0.9em' }}>
                F Martín, E Soriano-Salvador, JM Guerrero, GG Muzquiz, JC Manzanares, et al.
              </p>
              <p style={{ margin: 0, fontSize: '0.85em', fontStyle: 'italic', color: '#888' }}>
                Robotics and Autonomous Systems 190, 104959 — 2025
              </p>
            </article>

            <article style={{ marginBottom: '25px', paddingBottom: '20px', borderBottom: 'solid 1px rgba(0, 0, 0, 0.1)' }}>
              <h3 style={{ fontWeight: 'bold', margin: '0 0 10px 0', fontSize: '1.2em' }}>
                <a href="https://ui.adsabs.harvard.edu/abs/2025arXiv250700882A/abstract" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                  I Move Therefore I Learn: Experience-Based Traversability in Outdoor Robotics
                </a>
              </h3>
              <p style={{ margin: '0 0 5px 0', fontSize: '0.9em' }}>
                MÁ de Miguel, J Beltrán, JS Cely, F Martín, JC Manzanares, A García
              </p>
              <p style={{ margin: 0, fontSize: '0.85em', fontStyle: 'italic', color: '#888' }}>
                arXiv preprint arXiv:2507.00882 — 2025
              </p>
            </article>

            <article style={{ marginBottom: '25px', paddingBottom: '20px', borderBottom: 'solid 1px rgba(0, 0, 0, 0.1)' }}>
              <h3 style={{ fontWeight: 'bold', margin: '0 0 10px 0', fontSize: '1.2em' }}>
                <a href="https://repositorio.upct.es/entities/publication/ab6e06bb-eec1-4778-8774-b81a943f24a8" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                  EasyNav Simple Stack: a minimum set of plugins for a reliable navigation
                </a>
              </h3>
              <p style={{ margin: '0 0 5px 0', fontSize: '0.9em' }}>
                F Martín Rico, FM Moreno Olivo, C Manzanares Serrano, et al.
              </p>
              <p style={{ margin: 0, fontSize: '0.85em', fontStyle: 'italic', color: '#888' }}>
                Universidad Politécnica de Cartagena — 2025
              </p>
            </article>

            <article style={{ marginBottom: '25px', paddingBottom: '20px', borderBottom: 'solid 1px rgba(0, 0, 0, 0.1)' }}>
              <h3 style={{ fontWeight: 'bold', margin: '0 0 10px 0', fontSize: '1.2em' }}>
                <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5350912" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                  Llm-Assisted Plan Execution for Robots in Dynamic Environments
                </a>
              </h3>
              <p style={{ margin: '0 0 5px 0', fontSize: '0.9em' }}>
                JD Peña-Narvaez, JC Manzanares, FM Moreno, R Pérez-Rodríguez, et al.
              </p>
              <p style={{ margin: 0, fontSize: '0.85em', fontStyle: 'italic', color: '#888' }}>
                SSRN 5350912 — 2024/2025
              </p>
            </article>

            <article style={{ marginBottom: '25px', paddingBottom: '20px', borderBottom: 'solid 1px rgba(0, 0, 0, 0.1)' }}>
              <h3 style={{ fontWeight: 'bold', margin: '0 0 10px 0', fontSize: '1.2em' }}>
                <a href="https://arxiv.org/abs/2406.17379" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                  Constructing behavior trees from temporal plans for robotic applications
                </a>
              </h3>
              <p style={{ margin: '0 0 5px 0', fontSize: '0.9em' }}>
                J Zapf, M Roveri, F Martin, JC Manzanares
              </p>
              <p style={{ margin: 0, fontSize: '0.85em', fontStyle: 'italic', color: '#888' }}>
                arXiv preprint arXiv:2406.17379 — 2024
              </p>
            </article>

            <article style={{ marginBottom: '25px' }}>
              <h3 style={{ fontWeight: 'bold', margin: '0 0 10px 0', fontSize: '1.2em' }}>
                <a href="https://documat.unirioja.es/servlet/articulo?codigo=9704409" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                  Impact of Real time on Active Perception Systems applied to Social Robotics
                </a>
              </h3>
              <p style={{ margin: '0 0 5px 0', fontSize: '0.9em' }}>
                AA García, JD Peña Narváez, R Pérez Rodríguez, JC Manzanares, et al.
              </p>
              <p style={{ margin: 0, fontSize: '0.85em', fontStyle: 'italic', color: '#888' }}>
                Universidad de Alicante — 2024
              </p>
            </article>

          </div>
        </div>
      </section>

      <section id="achievements" className="five">
        <div className="container">
          <header>
            <h2>Achievements & Community</h2>
          </header>

          <p>
            A summary of my active involvement in the robotics community, international competitions, and other notable research projects.
          </p>

          <div className="row" style={{ textAlign: 'left', marginTop: '30px' }}>

            {/* Columna 1: Comunidad y Competiciones */}
            <div className="col-6 col-12-mobile" style={{ marginBottom: '20px' }}>
              <h3 style={{ fontWeight: 'bold', borderBottom: '2px solid rgba(0,0,0,0.1)', paddingBottom: '10px', marginBottom: '20px', fontSize: '1.2em' }}>
                🏆 Competitions & Community
              </h3>
              <ul style={{ listStyleType: 'none', paddingLeft: 0, margin: 0 }}>
                <li style={{ marginBottom: '12px' }}>
                  <span style={{ fontSize: '1.1em', marginRight: '8px' }}>🎙️</span>
                  <strong>Talk:</strong> ROSCon Sevilla 2024
                  {' '}(<a href="https://vimeo.com/showcase/11453818?video=1029493394" target="_blank" rel="noopener noreferrer">Video</a> &{' '}
                  <a href="https://github.com/CoreSenseEU/coresense_instrumentation" target="_blank" rel="noopener noreferrer">Code</a>)
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <span style={{ fontSize: '1.1em', marginRight: '8px' }}>📅</span>
                  <strong>Organizer:</strong>{' '}
                  <a href="https://roscon.org.es/roscon2023/" target="_blank" rel="noopener noreferrer">ROSCon Madrid 2023</a> &{' '}
                  <a href="https://en.urjc.es/todas-las-noticias-de-actualidad/6686-robotics-day-un-dia-para-celebrar-el-presente-pasado-y-futuro-de-la-robotica" target="_blank" rel="noopener noreferrer">Robotics Day URJC</a>
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <span style={{ fontSize: '1.1em', marginRight: '8px' }}>🏅</span>
                  <strong>Competitor: RoboCup (Portugal 2022, @Home 2023, @Home 2024) & SciRoc 2019 (</strong>{' '}
                  <a href="https://gentlebots.gsyc.urjc.es/" target="_blank" rel="noopener noreferrer">Gentlebots</a> &{' '}
                  <a href="https://www.urjc.es/todas-las-noticias-de-actualidad/7352-la-urjc-ganadora-de-la-european-robocup-2022" target="_blank" rel="noopener noreferrer">Nocom-pila</a>)
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <span style={{ fontSize: '1.1em', marginRight: '8px' }}>🤝</span>
                  <strong>Co-founder & Member:</strong> <a href="https://github.com/RoboTech-URJC" target="_blank" rel="noopener noreferrer">Robotech Association</a>
                </li>
              </ul>
            </div>

            {/* Columna 2: Proyectos Adicionales */}
            <div className="col-6 col-12-mobile">
              <h3 style={{ fontWeight: 'bold', borderBottom: '2px solid rgba(0,0,0,0.1)', paddingBottom: '10px', marginBottom: '20px', fontSize: '1.2em' }}>
                🔬 Research & Open Source
              </h3>
              <ul style={{ listStyleType: 'none', paddingLeft: 0, margin: 0 }}>
                <li style={{ marginBottom: '12px', paddingLeft: '25px', textIndent: '-25px' }}>
                  <span style={{ color: '#888', marginRight: '8px' }}>▸</span>
                  <a href="https://coresense.eu/" target="_blank" rel="noopener noreferrer">European Project CoreSense</a>
                </li>
                <li style={{ marginBottom: '12px', paddingLeft: '25px', textIndent: '-25px' }}>
                  <span style={{ color: '#888', marginRight: '8px' }}>▸</span>
                  <a href="https://github.com/IntelligentRoboticsLabs/GNC_orbital" target="_blank" rel="noopener noreferrer">Laboratory of Guidance, Navigation and Control of Spacecraft in Co-orbital Flight</a>
                </li>
                <li style={{ marginBottom: '12px', paddingLeft: '25px', textIndent: '-25px' }}>
                  <span style={{ color: '#888', marginRight: '8px' }}>▸</span>
                  <a href="https://dmarce-project.github.io/" target="_blank" rel="noopener noreferrer">DMarce Project</a>
                </li>
                <li style={{ marginBottom: '12px', paddingLeft: '25px', textIndent: '-25px' }}>
                  <span style={{ color: '#888', marginRight: '8px' }}>▸</span>
                  <a href="https://github.com/MOCAP4ROS2-Project" target="_blank" rel="noopener noreferrer">Mocap Optitrack integration in ROS 2</a>
                </li>
                <li style={{ marginBottom: '12px', paddingLeft: '25px', textIndent: '-25px' }}>
                  <span style={{ color: '#888', marginRight: '8px' }}>▸</span>
                  Development for{' '}
                  <a href="https://github.com/Unitree-Go2-Robot" target="_blank" rel="noopener noreferrer">Unitree Go2 URJC</a>,{' '}
                  <a href="https://github.com/EasyNavigation" target="_blank" rel="noopener noreferrer">EasyNavigation</a>,{' '}
                  <a href="https://github.com/Juancams/kobuki_ros" target="_blank" rel="noopener noreferrer">Kobuki</a> &{' '}
                  <a href="https://github.com/Tiago-Harmonic" target="_blank" rel="noopener noreferrer">Tiago</a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <section id="contact" className="six">
        <div className="container">
          <header>
            <h2>Get in Touch</h2>
          </header>

          <div style={{ marginTop: '40px' }}>
            <img
              src={gif2}
              alt="Contact Decoration"
              style={{
                width: '500px',
                height: 'auto',
                opacity: '0.9'
              }}
            />
          </div>

          <p>
            Whether you have a question, a proposal for a project, or just want to talk about robotics, ROS 2, or open source, my inbox is always open!
          </p>

          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <a
              href="mailto:jc.manzanares.serrano@gmail.com"
              className="button primary"
              style={{ padding: '15px 40px', fontSize: '1.2em', borderRadius: '5px' }}
            >
              Say Hello <span style={{ marginLeft: '10px' }}>👋</span>
            </a>

            <div style={{ marginTop: '30px', fontSize: '1.5em' }}>
              <a href="https://www.linkedin.com/in/juancams/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 15px', color: 'inherit' }}>
                <span className="icon brands fa-linkedin"></span>
              </a>
              <a href="https://github.com/Juancams" target="_blank" rel="noopener noreferrer" style={{ margin: '0 15px', color: 'inherit' }}>
                <span className="icon brands fa-github"></span>
              </a>
              <a href="https://twitter.com/Juancams98" target="_blank" rel="noopener noreferrer" style={{ margin: '0 15px', color: 'inherit' }}>
                <span className="icon brands fa-twitter"></span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
