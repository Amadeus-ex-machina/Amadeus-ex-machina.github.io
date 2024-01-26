import "./Home.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import "./themes.css";
import "./Toggle.css";

// REACT ICONS
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import { BsFillLightbulbFill } from "react-icons/bs";

// IMAGES
import headshot from "./images/headshot.jpg";
import CarepackerPhone from "./images/CarepackerPhone.png";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export default function Home() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

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
                        color: theme === "light" ? "dark" : "light",
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
                        color: theme === "light" ? "dark" : "light",
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
                        color: theme === "light" ? "dark" : "light",
                      }}
                      size={40}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="Resume">
              <div className="ResumeHeader">About</div>

              <div className="ResumeText">
                <p>
                  The first time I touched a computer, I was 4 years old. I was
                  typing on keys and clicking on links before I could even read.
                  When I turned 12, I was already lurking forums, modding games,
                  and running servers. I became irreversibly enamored with the
                  intellectual and creative depths of the internet.
                </p>

                <p>
                  Destiny whisked me away and I graduated in computer science.
                  I'm now a software engineer based in the Washington metro
                  area. My main focus is front-end development and building
                  sharp and responsive products for clients.
                </p>

                <p>
                  In my free time, I do personal projects and mentor others in
                  coding. I'm also an avid manga fan and competitive video game
                  player.
                </p>
              </div>

              <br />
              <br />

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
