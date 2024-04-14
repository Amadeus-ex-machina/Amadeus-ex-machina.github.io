import "./weather.css";

// IMAGES
import WeatherApp from "assets/weather/weather-app-crop.gif";
import WeatherAppFull from "assets/weather/weather-app.gif";

export default function Project() {
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

            <div className="ProjectHeader">I Built A Weather App</div>

            <br />
            <div className="ProjectSubheader">
              Welcome to the cutting room floor.
            </div>

            <br />

            <div className="ImageFrame">
              <img
                src={WeatherApp}
                alt="WeatherApp"
                style={{
                  width: "100%",
                  height: "auto",
                  margin: "auto",
                  textAlign: "center",
                }}
              />
            </div>

            <div className="ProjectCaption">
              My global weather app. Powered by OpenWeather API.
            </div>

            <hr></hr>

            <div className="ProjectCaption">
              AMADEUS KANG<br></br>
              <div className="Date">December 2023</div>
            </div>

            <br />
            <br />

            <div className="ResumeHeader">Summary</div>

            <div className="ProjectText">
              <p>
                I designed and programmed a weather app using the OpenWeather
                API. It's no longer being hosted but the source code is {" "}
                <a
                  style={{
                    textDecoration: "underline",
                    textDecorationThickness: "3px",
                    textUnderlineOffset: "5px",
                    textDecorationColor: "var(--small-text-color)",
                  }}
                  href="https://github.com/amadeuswolfkang/weather-app"
                >
                here
                </a>
                .
              </p>
            </div>

            <br />
            <br />
            <div className="ImageFrame">
              <img
                src={WeatherAppFull}
                alt="WeatherAppFull"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  textAlign: "center",
                }}
              />
            </div>
            <div className="ProjectCaption">Fig 1. Full-size web page.</div>

            <br />
            <br />
            <br />
            <br />

            <br />
            <br />
          </div>
        </div>
      </body>
    </html>
  );
}
