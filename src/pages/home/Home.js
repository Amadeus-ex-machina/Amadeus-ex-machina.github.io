// CSS
import "./Home.css";
import "../../theme/themes.css";
import "../../components/Toggle/Toggle.css";

// ROBOT FONT FOR TYPOGRAPHY
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// REACT IMPORTS
import { Link } from "react-router-dom";

// MUI IMPORTS
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

// REACT ICONS
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";

// IMAGES
import headshot from "assets/headshot.png";
import carepackerPhone from "assets/carepacker/phone.png";
import weatherApp from "assets/weather/weather-app-crop.png";
import { Typography } from "@mui/material";

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
              <Typography variant="h2" color="var(--header-text-color)">
                Amadeus Kang
              </Typography>
              <Typography variant="h5" color="var(--subheader-text-color)">
                Software Developer
              </Typography>
              <Typography variant="subtitle1" color="var(--text-color)">
                I build stylish and interactive apps.
              </Typography>

              <Box
                component="img"
                src={headshot}
                width="16rem"
                borderRadius="100%"
                mt="1rem"
                mb="3rem"
              />

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
              <div className="ResumeHeader"></div>
              <Typography variant="h4">Experience</Typography>

              <Box mt="1rem">
                <a
                  href="https://www.conservation.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card variant="outlined" style={{ backgroundColor: "var(--background-color)" }}>
                    <CardContent>
                      {" "}
                      <Typography variant="h6" color="var(--header-text-color)">
                        IT Coordinator @ Conservation International{" "}
                        <GoLinkExternal />
                      </Typography>
                      <Chip label="PowerShell" size="small" color="primary" />
                      <Chip label="Azure" size="small" color="primary" />
                      <Typography variant="subtitle1" />
                      Deployed PowerShell Scripts and researched IT solutions
                      for an environmental non-profit.
                      <Typography />
                    </CardContent>
                  </Card>
                </a>
              </Box>

              <Box mt="1rem">
                <a
                  href="https://gamegym.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card variant="outlined" style={{ backgroundColor: "var(--background-color)" }}>
                    <CardContent>
                      <Typography variant="h6" color="var(--header-text-color)">
                        Web Development Intern @ GameGym <GoLinkExternal />
                      </Typography>
                      <Chip label="JavaScript" size="small" color="primary" />
                      <Chip label="HTML" size="small" color="primary" />
                      <Chip label="CSS" size="small" color="primary" />
                      <Chip label="WordPress" size="small" color="primary" />
                      <Typography variant="subtitle1" color="var(--header-text-color)"/>
                      Developed web pages for an eSports training camp.
                      <Typography />
                    </CardContent>
                  </Card>
                </a>
              </Box>

              <Typography variant="h4" mt="4rem" mb="1rem">
                Education
              </Typography>

              <Box mb="4rem">
                <Card variant="outlined" style={{ backgroundColor: "var(--background-color)" }}>
                  <CardContent>
                    <Typography variant="h6" color="var(--header-text-color)">
                      James Madison University
                    </Typography>
                    <Typography variant="subtitle1" mt="1rem">
                      B.S. in Computer Science
                      <br /> December 2022
                    </Typography>
                  </CardContent>
                </Card>
              </Box>

              <Typography variant="h4">Projects</Typography>

              <Typography variant="h6" mt="1rem">
                I Designed A Care Packaging App
              </Typography>

              <Link onClick={scrollToTop} to="/carepacker">
                <img
                  className="card"
                  src={carepackerPhone}
                  alt="carepackerPhone"
                />
              </Link>

              <Typography variant="h6" mt="1rem">
                I Built A Weather App
              </Typography>

              <Link onClick={scrollToTop} to="/weather">
                <img className="card" src={weatherApp} alt="weatherApp" />
              </Link>

              <Box mt="5rem">
                <Typography variant="h4" mb="1rem">
                  About
                </Typography>

                <Typography variant="body1" mb="1rem">
                  I'm a software engineer with full-stack experience. I've
                  developed websites and managed databases. I engineer products
                  with a focus on human-centered design.
                </Typography>

                <Typography variant="body1" mb="1rem">
                  In my free time, I mentor others in coding and pursue personal
                  projects. I'm an aspiring polymath so I enjoy studying
                  computer science, mathematics, statistics, economics, and
                  other subjects.
                </Typography>

                <Typography variant="body1" mb="1rem">
                  Feel free to contact me at amadeuskang@gmail.com.
                </Typography>
              </Box>

              <Box mt="5rem">
                <Typography variant="subtitle2" mb="10rem">
                  This website is built by me in React. Coded in Visual Studio
                  Code. Hosted and deployed via GitHub Pages.
                </Typography>
                <Typography variant="subtitle2">Amadeus Kang © 2024</Typography>
              </Box>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
