import React, { useEffect } from "react";
import { ClipboardMessage } from "../utils";
import { LINKS, JOBS, PROJECTS } from "./data";
import "./styles.css";

const Link = ({ icon, link, copyToClipboard }: any) => {
  return (
    <div className="link">
      {copyToClipboard ? (
        <ClipboardMessage text={link} dark>
          {icon}
        </ClipboardMessage>
      ) : (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {icon}
        </a>
      )}
    </div>
  );
};

const SectionTitle = ({ title }) => {
  return (
    <div className="section-title">
      <h3>{title}</h3>
    </div>
  );
};

const Project = ({ title, link, description }) => {
  return (
    <div className="job">
      <div className="job-header">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        ) : (
          title
        )}
      </div>
      <div className="job-body">
        <ul>
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Job = ({ title, company, period, description, link }) => {
  return (
    <div className="job">
      <div className="job-header">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            {company}
          </a>
        ) : (
          company
        )}
        <div className="company-title">
          {title} - <span className="time-period">{period}</span>
        </div>
      </div>
      <div className="job-body">
        <ul>
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function CV({ show, handleShowCv, handleHideCv }) {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        handleHideCv();
      }
    };
    document.addEventListener("keydown", handleEsc, false);
    return () => {
      document.removeEventListener("keydown", handleEsc, false);
    };
  }, [handleHideCv]);

  return show ? (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Felipe Melo</h2>
          <div className="links">
            {LINKS.map((link, index) => (
              <Link key={index} {...link} />
            ))}
          </div>
          <div onClick={handleHideCv} className="close-modal">
            close
            <br />
            <span>[esc]</span>
          </div>
        </div>

        <div className="modal-body">
          <div className="cv">
            <SectionTitle title="About me" />
            <div className="about-me">
              <p>
                I am a highly motivated web developer with over 7 years of
                experience specializing in frontend and backend. My expertise
                lies in building robust applications using technologies such as
                JavaScript, Python, and many others.
              </p>
              <p>
                Committed to leveraging modern development practices and staying
                updated with the industry's evolving trends, my goal is to
                create efficient, scalable, and maintainable software.
              </p>
            </div>
            <SectionTitle title="Technical Skills" />
            <ul>
              <li>Frontend: React, Redux, Three.js, D3.js, Next</li>
              <li>Backend: Node.js, Python, Pandas, FastApi</li>
              <li>Mobile: React Native</li>
              <li>Tools and Platforms: Docker, GitHub Actions, Heroku, AWS</li>
              <li>Testing: Jest, React Testing Library, Cypress, Detox</li>
              <li>Databases: Supabase, Postgresql, MySQL</li>
              <li>Other: Git, Linux, Bash, Nginx, Webpack, Babel</li>
            </ul>
            <SectionTitle title="Experience" />
            {JOBS.map((job, index) => (
              <Job
                key={index}
                title={job.title}
                company={job.company}
                period={job.period}
                description={job.description}
                link={job.link}
              />
            ))}
            <SectionTitle title="Projects" />
            {PROJECTS.map((project, index) => (
              <Project
                key={index}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
