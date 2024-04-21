import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

type TVideo = { title: string; src: string };
const HEIGHT = { maxHeight: "435px", height: "100%" };
const VIDEOS: TVideo[] = [
  { title: "Speaking in code", src: "/v/SpeakingInCode.webm" },
  { title: "Rise to The Throne", src: "/v/RiseToTheThrone.webm" },
];

function App() {
  const [i, setIndex] = useState<number>(0);
  const [isTerryVisible, setIsTerryVisible] = useState<boolean>(false);
  const maxLen = VIDEOS.length - 1;
  const video = VIDEOS[i];
  const img = new Image();

  const onHashChange = () => {
    const regexp = /v=(\d)/;
    if (regexp.test(location.hash)) {
      const j = Number(RegExp.$1) - 1;
      if (j !== i && VIDEOS[j]) {
        setIndex(j);
      }
    }
  };

  useEffect(() => {
    img.onload = () => setIsTerryVisible(true);
    img.src = "/i/terry.gif";
  }, []);

  useEffect(() => {
    document.title = video.title;
    location.hash = `v=${i + 1}`;
  }, [i]);

  useEffect(() => {
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [i]);

  7;
  return (
    <div className="h-full flex flex-row max-w-screen-lg font-sans">
      <div className="flex flex-col place-content-center w-3/4 h-full">
        <video
          className="w-full"
          autoPlay
          controls
          poster="/i/TempleOS.png"
          src={video.src}
          onPlaying={() => setIsTerryVisible(false)}
          onPause={() => setIsTerryVisible(true)}
          onEnded={() => {
            if (i + 1 <= maxLen) {
              setIndex(i + 1);
            } else {
              setIsTerryVisible(true);
            }
          }}
          style={HEIGHT}
        />
      </div>
      <div className="flex flex-col w-1/4 text-sm place-content-center pl-5 h-full">
        <div style={HEIGHT} className="flex flex-col h-full justify-between">
          <p className="m-0">
            <strong className="inline-block mb-1">In memory of Terry </strong>
            <br />
            Terry Davis (1969 – 2018) <br />
            was a talented computer programmer who dedicated a large part of his
            life to the creation and development of{" "}
            <a target="_blank" href="https://templeos.org">
              TempleOS
            </a>
            .
            <br />
            Rest in peace.
          </p>
          <img
            className={`h-1/2 pb-12 ${isTerryVisible ? "" : "hidden"}`}
            src="/i/terry.gif"
          />
        </div>
      </div>
    </div>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector(".react-mount")!;
  ReactDOM.createRoot(root).render(<App />);
});
