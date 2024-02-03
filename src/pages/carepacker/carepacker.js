import "./carepacker.css";
import FigmaEmbed from "react-figma-embed";

// IMAGES
import phone from "assets/carepacker/phone.png";
import frames from "assets/carepacker/frames.png";
import storyboardApp from "assets/carepacker/storyboard-app.png";
import storyboardKiosk1 from "assets/carepacker/storyboard-kiosk-1.png";
import storyboardKiosk2 from "assets/carepacker/storyboard-kiosk-2.png";
import storyboardStore from "assets/carepacker/storyboard-store.png";
import storyboardWebsite from "assets/carepacker/storyboard-website.png";
import showcase from "assets/carepacker/showcase.png";

export default function Carepacker() {
  return (
    <html>
      <body>
        <div className="projectContainer">
          <div className="Main">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className="ProjectHeader">
              I Designed A Care Packaging App.
            </div>

            <br />
            <div className="ProjectSubheader">
              A case study and post-mortem.
            </div>

            <br />

            <div className="ImageFrame">
              <img
                src={phone}
                alt="phone"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  margin: "auto",
                  textAlign: "center",
                }}
              />
            </div>

            <div className="ProjectCaption">
              A menu to choose a care package size option.
            </div>

            <hr></hr>

            <div className="ProjectCaption">
              AMADEUS KANG<br></br>
              <div className="Date">June 2023</div>
            </div>

            <br />
            <br />
            <div className="ResumeHeader">Case Study</div>

            <div className="ProjectText">
              <p>
                A trial by fire is the best way to learn, isn't it? There's
                nothing that incentivizes results more than a deadline.
                <br />
                <br />
                I spent 5 weeks on a UX design project. There's a story to be
                told here, but for now enjoy the deliverables.
                <br />
                <br />
                <div className="ImageFrame">
                  {" "}
                  <FigmaEmbed url="https://www.figma.com/proto/sPmzDJ3lQc2tYEhW0E1MIt/Carepacker?node-id=4-4&starting-point-node-id=4%3A4&mode=design&t=uXJjg5rhQQ11g5uI-1" />
                </div>
                <div className="ProjectCaption">
                  Try out the Figma prototype!
                </div>
                <br />
                <br />
                <div className="ImageFrame">
                  <img
                    src={showcase}
                    alt="showcase"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      textAlign: "center",
                    }}
                  />
                </div>
                <div className="ProjectCaption">Fig 1. Selected frames.</div>
                <br />
                <br />
                <div className="ImageFrame">
                  <img
                    src={frames}
                    alt="frames"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      textAlign: "center",
                    }}
                  />
                </div>
                <div className="ProjectCaption">
                  Fig 2. A total of 38 unique frames.
                </div>
                <br />
                <br />
                <div className="ImageFrame">
                  <img
                    src={storyboardApp}
                    alt="storyboardApp"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      margin: "auto",
                      textAlign: "center",
                    }}
                  />
                </div>
                <div className="ProjectCaption">
                  Fig 3. Mobile app storyboard.
                </div>
                <br />
                <br />
                <div className="ImageFrame">
                  <img
                    src={storyboardWebsite}
                    alt="storyboardWebsite"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      margin: "auto",
                      textAlign: "center",
                    }}
                  />
                </div>
                <div className="ProjectCaption">Fig 4. Website storyboard.</div>
                <br />
                <br />
                <div className="ImageFrame">
                  <img
                    src={storyboardKiosk1}
                    alt="storyboardKiosk1"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      margin: "auto",
                      textAlign: "center",
                    }}
                  />
                </div>
                <div className="ProjectCaption">
                  Fig 5. Mall Kiosk storyboard 1.
                </div>
                <br />
                <br />
                <div className="ImageFrame">
                  <img
                    src={storyboardKiosk2}
                    alt="storyboardKiosk2"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      margin: "auto",
                      textAlign: "center",
                    }}
                  />
                </div>
                <div className="ProjectCaption">
                  Fig 6. Mall Kiosk storyboard 2.
                </div>
              </p>

              <br />
              <br />
              <div className="ImageFrame">
                <img
                  src={storyboardStore}
                  alt="storyboardStore"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    textAlign: "center",
                  }}
                />
              </div>
              <div className="ProjectCaption">
                Fig 7. Standalone store storyboard.
              </div>

              <br />
              <br />
            </div>

            <br />
            <br />

            <div className="ResumeHeader">More Details</div>

            <div className="ResumeSubText">
              <p>
                Special thanks to my design mentor{" "}
                <a
                  style={{
                    textDecoration: "underline",
                    textDecorationThickness: "3px",
                    textUnderlineOffset: "5px",
                    textDecorationColor: 'var(--small-text-color)'
                  }}
                  href="https://www.linkedin.com/in/lisa-park-9216aa70/"
                >
                  Lisa Park
                </a>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
