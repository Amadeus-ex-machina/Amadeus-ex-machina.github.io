import "./Home.css";
import { Link } from "react-router-dom";

import "./themes.css";
import "./Toggle.css";

// REACT ICONS
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";

// IMAGES
import headshot from "./images/headshot.jpg";
import CarepackerPhone from "./images/CarepackerPhone.png";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export default function Home() {
  return (
    <html>
      <body>
        <div className="Main">
          <div className="FlexContainer">
            <div className="NameTag">
              <div className="NameTagText">Amadeus Kang</div>
              <div className="NameTagSubtitle">Software Engineer</div>

              <div className="Blurb">I build products.</div>

              <br />
              <br />

              <img src={headshot} alt="headshot" width={250} height={250} />

              <br />
              <br />

              <div className="iconBar">
                <div className="icon">
                  <a
                    href="https://github.com/amadeuswolfkang"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub
                      style={{
                        paddingRight: 16,
                        color: "var(--icon-color)",
                      }}
                      size={40}
                    />
                  </a>
                </div>

                <div className="icon">
                  <a
                    href="https://www.linkedin.com/in/amadeuskang/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin
                      style={{
                        paddingRight: 16,
                        color: "var(--icon-color)",
                      }}
                      size={40}
                    />
                  </a>
                </div>

                <div className="icon">
                  <a
                    href="https://twitter.com/AmadeusKang"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaTwitter
                      style={{
                        paddingRight: 16,
                        color: "var(--icon-color)",
                      }}
                      size={40}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="Resume">
              <div className="ResumeHeader">Experience</div>
              <br />

              <a
                href="https://www.conservation.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="resumeItem">
                  <div className="ResumeSubHeader">
                    IT Coordinator @ Conservation International{" "}
                    <GoLinkExternal />
                  </div>
                  <div className="ResumeSubText">
                    <div className="tagBar">
                      <div className="tag">PowerShell</div>
                      <div className="tag">Azure</div>
                    </div>
                    <p>
                      Deployed PowerShell Scripts and researched IT solutions
                      for an environmental non-profit.{" "}
                    </p>
                  </div>
                </div>
              </a>

              <a
                href="https://gamegym.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="resumeItem">
                  <div className="ResumeSubHeader">
                    Web Development Intern @ GameGym <GoLinkExternal />
                    <div className="tagBar">
                      <div className="tag">JavaScript</div>
                      <div className="tag">HTML</div>
                      <div className="tag">CSS</div>
                      <div className="tag">WordPress</div>
                    </div>
                  </div>
                  <div className="ResumeSubText">
                    <p>Developed web pages for an eSports training camp.</p>
                  </div>
                </div>
              </a>

              <br />
              <br />
              <br />

              <div className="ResumeHeader">Projects</div>

              {/*  PROJECT CARDS */}
              <br />
              <div className="ResumeSubHeader">
                I Designed A Care Packaging App.
                <br />
                <br />
              </div>

              <Link onClick={scrollToTop} to="/project">
                <img
                  className="card"
                  src={CarepackerPhone}
                  alt="CarepackerPhone"
                />
              </Link>

              <div className="ResumeSubText">
                <p>A care packaging service app design.</p>
              </div>

              <br />
              <br />
              <br />

              <div className="ResumeHeader">About</div>

              <div className="ResumeText">
                <p>
                  I'm a software engineer with full-stack experience. I've
                  developed websites and managed databases. I also have
                  interests in UX design.
                </p>

                <p>
                  In my free time, I read non-fiction, mentor friends in coding,
                  and pursue personal projects. I'm an aspiring polymath so I
                  enjoy studying computer science, mathematics, statistics,
                  economics, and other subjects. To will myself to understand is
                  my greatest joy.
                </p>
              </div>

              <br />
              <br />
              <br />
              <br />

              <div className="ResumeSubText">
                <p>
                  This website is built by me in React. Coded in Visual Studio
                  Code. Hosted and deployed via GitHub Pages.
                  <br />
                  <br />
                  Amadeus Kang © 2024
                </p>
              </div>

              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
