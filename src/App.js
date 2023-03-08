import "./App.css";
import { useState } from "react";
import Carousel from "react-simply-carousel";

function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const images = [
    require("./assets/home.jpeg"),
    require("./assets/pay.jpeg"),
    require("./assets/settings.jpeg"),
    require("./assets/signup.jpeg"),
    require("./assets/login.jpeg"),
    require("./assets/forgot.jpeg"),
  ];

  return (
    <div className="App">
      {/* navbar */}
      <div className="navbar">
        <div className="logobar">
          <img alt='logo' src={require("./assets/logo.png")} />
          <h3>aywise</h3>
        </div>
        <div className="download"><a href='https://firebasestorage.googleapis.com/v0/b/nordstone-8673f.appspot.com/o/app-release.apk?alt=media&token=1cbfcbcf-d0df-4e13-9883-316cd86aa611'>download</a></div>
      </div>
      {/* app base */}
      <div className="contentParent">
        <div className="contentSubParent">
          <div className="content">
            <h1>Paywise a new image of smart ledger</h1>
            <p>it helps you to remember your future transactions</p>
            <p>👉 by sending personalize notifications</p>
            <p>👉 so you never miss any due dates</p>
            <p>👉 an easiest way to increase your credit worthness</p>
          </div>
          <div className="note">
            <pre>
              The app is completely safe and free to download, The founder wants
              to try first before deploying to play store. your feedback is
              highly appreceated, <a href="mailto:abhijain3002@gmail.com">write here</a>
            </pre>
          </div>
        </div>
        <Carousel
          containerProps={{
            style: {
              width: "100%",
              justifyContent: "center",
              userSelect: "none",
              overflow: "hidden",
              gap: "10px",
            },
          }}
          preventScrollOnSwipe
          swipeTreshold={60}
          activeSlideIndex={activeSlide}
          onRequestChange={setActiveSlide}
          forwardBtnProps={{
            children: ">",
            style: {
              width: 60,
              height: 60,
              minWidth: 60,
              alignSelf: "center",
              backgroundColor: "grey",
              borderRadius: "100%",
            },
          }}
          backwardBtnProps={{
            children: "<",
            style: {
              width: 60,
              height: 60,
              minWidth: 60,
              alignSelf: "center",
              backgroundColor: "grey",
              borderRadius: "100%",
            },
          }}
          dotsNav={{
            show: true,
            itemBtnProps: {
              style: {
                height: 16,
                width: 16,
                borderRadius: "50%",
                border: 0,
              },
            },
            activeItemBtnProps: {
              style: {
                height: 16,
                width: 16,
                borderRadius: "50%",
                border: 0,
                background: "black",
                border: "1px solid white",
              },
            },
          }}
          itemsToShow={1}
          speed={400}
        >
          {images.map((link, index) => {
            return (
              <div className="imageParent">
                <img alt="carousel" src={link} key={index} />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default App;
