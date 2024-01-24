import logo from "./logo.svg";
import "./App.css";

import Header from "./Header";
import Footer from "./Footer";
import Toggle from "./Toggle";



import headshot from "./images/headshot.jpg";

function App() {
  return (
    <html>
      <body>
        <Toggle />

        <div className="Main">
          <div className="FlexContainer">
            <div className="NameTag">
              <div className="NameTagText">Amadeus Kang</div>
              <div className="NameTagSubtitle">Software Engineer</div>

              <div className="Blurb">I build products.</div>

              <br />
              <br />

              <img src={headshot} alt="headshot" width={250} height={250} />
            </div>

            <div className="Resume">
              <div className="ResumeHeader">About</div>

              <div className="ResumeText">
                <p>
                  The first time I touched a computer, I was 6 years old in my
                  dad's room. I was clicking buttons and links before I could
                  even read. I became irreversibly enamored with the
                  progressiveness of modern technology. By the time I was 10, I
                  was already cruising forums and discussing video games with
                  people across the globe.
                </p>

                <p>
                  Destiny whisked me away, and now I'm a software engineer based
                  in the Washington metro area. My main focus is front-end
                  development and building sharp and responsive products for
                  clients.
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

              <a href="https://www.conservation.org/">
                <div className="resumeItem">
                  <div className="ResumeSubHeader">
                    IT Coordinator @ Conservation International
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

              <a href="https://gamegym.com/">
                <div className="resumeItem">
                  <div className="ResumeSubHeader">
                    Web Development Intern @ GameGym
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
              <div className="card"></div>
              <br />
              <div className="card"></div>
              <br />
              <div className="card"></div>

              <div className="ResumeSubText">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>

              <br />
              <br />

              <div className="ResumeHeader">Articles</div>

              {/*  ARTICLE CARDS */}
              <br />
              <div className="card"></div>
              <br />
              <div className="card"></div>
              <br />
              <div className="card"></div>

              <div className="ResumeSubText">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>

                <br />
                <br />

                <div className="ResumeSubText">
                  <p>
                    This website is built by me in React. Coded in Visual Studio
                    Code. Hosted and deployed via GitHub Pages.
                  </p>
                </div>
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
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

export default App;
