import React from "react";

const hobbiesData = [
  {
    type: "image",
    src: "/hobby1.jpg",
    alt: "Playing Guitar",
  },
  {
    type: "video",
    src: "/hobby2.mp4",
    alt: "Surfing",
  },
  {
    type: "image",
    src: "/hobby3.jpg",
    alt: "Cooking",
  },
  {
    type: "video",
    src: "/hobby4.mp4",
    alt: "Drone Footage",
  },
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="bg-background py-16 px-6 scroll-mt-16">
      <h2 className="text-4xl font-bold text-primary text-center mb-12">
        Hobbies & Gallery
      </h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full sm:w-11/12 md:w-3/4 lg:w-4/5 xl:w-4/5 mx-auto">
        {hobbiesData.map((item, idx) => (
          <div
            key={idx}
            className="bg-card rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-48 object-cover"
              />
            ) : (
              <video
                src={item.src}
                className="w-full h-48 object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            )}
            <div className="p-4">
              <p className="text-secondaryText text-center">{item.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
