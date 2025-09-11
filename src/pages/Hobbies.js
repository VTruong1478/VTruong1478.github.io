import React, { useRef } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

// Dancing videos
const dancingVideos = [
  { src: "/videos/push2start.MOV", title: "6/10/25" },
  { src: "/videos/timeless.MOV", title: "4/21/25" },
  { src: "/videos/beat.MOV", title: "8/2/25" },
];

// Other hobbies
const videos = [
  { src: "/videos/guitar.mp4", title: "Guitar Jam" },
  { src: "/videos/skateboarding.mp4", title: "Skateboarding Tricks" },
];

const photos = [
  { src: "/images/travel1.jpg", title: "Travel Memories" },
  { src: "/images/friends1.jpg", title: "Hanging with Friends" },
];

export default function Hobbies() {
  const videoRefs = useRef([]);

  const handleMouseEnter = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.play().catch(() => {});
    }
  };

  const handleMouseLeave = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      video.currentTime = 0; // reset to start
    }
  };

  return (
    <article className="bg-background min-h-screen py-16 px-6 text-text scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-primary mb-8">Hobbies</h1>
        <p className="text-md text-text mb-12">
          A glimpse into what I do for fun. I'm passionate about my hobbies. I
          love chasing new skills and those magical 'aha!' moments when things
          click.
        </p>

        {/* Dancing Videos */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-text mb-6">Hip Hop Dancing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dancingVideos.map((video, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl overflow-hidden shadow-lg bg-card cursor-pointer"
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={() => handleMouseLeave(idx)}
              >
                <video
                  ref={(el) => (videoRefs.current[idx] = el)}
                  src={video.src}
                  loop
                  playsInline
                  className="w-full h-auto object-cover aspect-[9/16]"
                />
                <p className="p-4 text-text font-semibold text-center">
                  {video.title}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Other Videos */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-text mb-6">Other Videos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {videos.map((video, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden shadow-lg bg-gray-800"
              >
                <video
                  src={video.src}
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-cover aspect-video"
                />
                <p className="p-4 text-secondary font-semibold text-center">
                  {video.title}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Photos */}
        <section>
          <h2 className="text-2xl font-bold text-text mb-6">Photos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {photos.map((photo, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
                <p className="p-4 text-secondary font-semibold text-center">
                  {photo.title}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
