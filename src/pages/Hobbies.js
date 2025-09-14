import React, { useRef, useState, useEffect } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

// Dance videos
const danceVideos = [
  {
    type: "video",
    src: "/videos/timeless.MOV",
    title: "4/21/25 - Comeback Crew Advanced Workshop",
    description:
      "For this one, I came in with the right mindset which helped me retain the choreo better. Even though I messed up a bit, I gave myself grace and kept going. Dance really feels like more of a mental sport than a physical one. The mindset you bring truly makes or breaks the experience.",
  },
  {
    type: "video",
    src: "/videos/push2start.MOV",
    title: "6/10/26 - Project Jeong Workshop",
    description:
      "This was one of the most memorable workshops I’ve been to. The vibes in the room were special. Everyone was just happy to be together and dance.",
  },
  {
    type: "video",
    src: "/videos/beat.MOV",
    title: "8/2/25 - Comeback Crew Workshop",
    description:
      "This was my last workshop as a NOVA local. I’m usually very stressed when I can't pick up a choreo right away, but I told myself to just have fun and feel the dance rather than overthink the details. That really helped me, and I liked how I danced more.",
  },
];

// Guitar videos
const guitarVideos = [
  {
    type: "video",
    src: "/videos/blueGuitar.MOV",
    title: "blue - yung kai (solo)",
    description:
      "Figuring out how to record, layer, and loop tracks on GarageBand has been such a fun journey. Hearing my guitar sound so dreamy through the audio interface makes me appreciate the little tools that open up whole new ways to create.",
  },
  {
    type: "video",
    src: "/videos/drunkGuitar.mp4",
    title: "drunk - keshi",
    description:
      "I brought my friends to a picnic and wanted to serenade them with my guitar. drunk was the very first song I ever learned, and playing it again brought back memories of those early beginner days. It’s amazing to see how much I’ve grown since then. Sharing this song with friends made me appreciate both the journey and the progress I’ve made.",
  },
  {
    type: "video",
    src: "/videos/sevenGuitar.MOV",
    title: "Seven - Jungkook (loop)",
    description:
      "I bought my very own electric guitar back in Jan 2025, but I haven’t practiced nearly as much as I hoped. After spending all day sitting at my desk for my 9-5, it’s hard to motivate myself to sit back down and practice. I’ve also avoided recording because I kept telling myself I needed to be better first—but I’m realizing that mindset only holds me back. So here’s me letting go of that perfectionism and just sharing this loop.",
  },
];

// Juggling videos
const jugglingVideos = [
  {
    type: "video",
    src: "/videos/cascadeFinish.MOV",
    title: "Cascade with behind-the-back catch finish",
    description: "My most impressive and satisfying trick.",
  },
  {
    type: "video",
    src: "/videos/twoInOne.MOV",
    title: "Two in one hand",
    description:
      "Right and left hand. My right is definitely more controlled than my left. Once I get more control and consistency, I’ll work on 4 ball fountain.",
  },
  {
    type: "video",
    src: "/videos/cascadeOverthrow.MOV",
    title: "Cascade overthrow",
    description: "Still working on making overthrow look better.",
  },
];

function VideoCarousel({ videos }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef([]);

  useEffect(() => {
    videoRefs.current.forEach((vid, idx) => {
      if (!vid) return;
      if (idx === currentIndex) {
        vid.play().catch(() => {});
      } else {
        vid.pause();
        vid.currentTime = 0;
      }
      vid.muted = isMuted;
    });
  }, [currentIndex, isMuted]);

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  const handleNext = () =>
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  const toggleMute = () => setIsMuted((prev) => !prev);

  return (
    <div className="relative space-y-6">
      <div className="relative grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-6 items-center bg-card rounded-2xl p-16 shadow-md">
        {/* Media */}
        <div className="col-span-6 md:col-span-4 lg:col-span-6 rounded-2xl overflow-hidden relative">
          <video
            ref={(el) => (videoRefs.current[currentIndex] = el)}
            src={videos[currentIndex].src}
            loop
            playsInline
            className="w-full h-auto object-cover aspect-[9/16] rounded-2xl"
          />
          <button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition"
          >
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
        </div>

        {/* Details */}
        <div className="col-span-6 md:col-span-4 lg:col-span-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-text mb-2">
            {videos[currentIndex].title}
          </h2>
          <p className="text-md text-secondaryText">
            {videos[currentIndex].description}
          </p>
        </div>

        {/* Carousel Controls (only if >1 item) */}
        {videos.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white p-3 rounded-full hover:bg-opacity-70 transition"
            >
              ◀
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white p-3 rounded-full hover:bg-opacity-70 transition"
            >
              ▶
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default function Hobbies() {
  return (
    <article className="bg-background min-h-screen py-16 px-4 md:px-16 lg:px-48 text-text scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8">Hobbies</h1>
        <p className="text-md text-text mb-12">
          A glimpse into what I do for fun. I'm passionate about my hobbies and
          love those 'aha!' moments when new skills click.
        </p>

        {/* Dance Section */}
        <h2 className="text-2xl mt-12 mb-4 font-bold">Hip Hop Dance</h2>
        <VideoCarousel videos={danceVideos} />

        {/* Guitar Section */}
        <h2 className="text-2xl mt-12 mb-4 font-bold">Guitar</h2>
        <VideoCarousel videos={guitarVideos} />

        {/* Juggling Section */}
        <h2 className="text-2xl mt-12 mb-4 font-bold">Juggling</h2>
        <VideoCarousel videos={jugglingVideos} />
      </div>
    </article>
  );
}
