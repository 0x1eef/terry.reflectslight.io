import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

type TVideo = { title: string; src: string };
const HEIGHT = { maxHeight: "435px", height: "100%" };
const VIDEOS: TVideo[] = [
  { title: "With The Lord my protector", src: "/v/WithTheLordMyProtector.mp4" },
  { title: "Dance on, Terry", src: "/v/DanceOnTerry.mp4" },
  { title: "Speaking in code", src: "/v/SpeakingInCode.mp4" },
  { title: "Rise to The Throne", src: "/v/RiseToTheThrone.mp4" },
];

function Video({ video, onEnded }: { video: TVideo; onEnded: () => void }) {
  return (
    <video
      className="w-full"
      autoPlay
      controls
      poster="/i/TempleOS.png"
      src={video.src}
      onEnded={onEnded}
      style={HEIGHT}
    />
  );
}

function App() {
  const [i, setIndex] = useState<number>(0);
  const onEnded = () => (i + 1 <= maxLen ? setIndex(i + 1) : null);
  const maxLen = VIDEOS.length - 1;
  const video = VIDEOS[i];

  useEffect(() => {
    document.title = video.title;
  }, [video]);
  7;
  return (
    <div className="h-full flex flex-row max-w-screen-lg font-mono">
      <div className="flex flex-col place-content-center w-3/4 h-full">
        <Video video={video} onEnded={onEnded} />
      </div>
      <div className="flex flex-col w-1/4 text-sm place-content-center pl-5 h-full">
        <div style={HEIGHT} className="flex flex-col h-full justify-between">
          <p className="m-0">
            <strong className="inline-block mb-1">In memory of Terry </strong>
            <br />
            Terry Davis (1969 – 2018) <br />
            was a talented computer programmer who dedicated a large part of his
            life to the creation of{" "}
            <a target="_blank" href="https://templeos.org">
              TempleOS
            </a>
            . Despite suffering from schizophrenia, Terry left this world with
            impressive accomplishments, and as an inspiration to many.
          </p>
          <p className="m-0">
            <strong className="inline-block mb-1">Charity</strong>
            <br />
            Please consider making a donation to{" "}
            <a target="_blank" href="https://donate.bbrfoundation.org/">
              The Brain & Behavior Research Foundation
            </a>{" "}
            or a similar act of charity to help those suffering with mental
            illness.
          </p>
        </div>
      </div>
    </div>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector(".react-mount")!;
  ReactDOM.createRoot(root).render(<App />);
});
