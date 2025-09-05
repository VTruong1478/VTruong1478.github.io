import React from "react";

export default function HowIDesignedThisWebsite() {
  return (
    <article className="bg-background min-h-screen py-16 px-6 text-text scroll-mt-16">
      <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-6 max-w-7xl mx-auto">
        <div className="col-span-6 md:col-span-8 lg:col-span-8 lg:col-start-3">
          {/* Page Title */}
          <h1 className="text-4xl font-bold text-primary">
            How I Designed This Website
          </h1>
          <p className="text-sm text-accentDark mb-12">Published August 2025</p>

          {/* Blog Content */}
          <div
            className="
            prose prose-lg prose-invert max-w-none
            prose-headings:font-bold prose-headings:text-text
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
            prose-strong:text-secondary prose-strong:font-semibold
            prose-a:text-accent prose-a:no-underline hover:prose-a:text-secondary hover:prose-a:no-underline
            prose-li:marker:text-accent prose-li:text-secondaryText
          "
          >
            <p>
              When I set out to build my personal website, I knew I didn’t want
              it to feel like just another static resume. I wanted it to reflect
              my personality while still being easy and enjoyable to use. That’s
              why I turned to <strong>Human-Centered Design (HCD)</strong>, an
              approach that puts <strong>people</strong> at the core of every
              design decision. Instead of starting with “what do I want to
              show?” the question shifts to{" "}
              <strong>“how will someone experience this</strong> and what will
              make it more enjoyable for them?”
            </p>

            <p>
              I first came across this mindset while working on a design team. I
              saw what happens when you skip the foundational stuff. Without a
              proper design system, the product quickly turned messy. Elements
              looked inconsistent, users got confused, and developers got
              frustrated trying to keep it all together. That experience taught
              me a simple lesson:{" "}
              <strong>
                set the foundation first, then build everything else on top of
                it.
              </strong>{" "}
              I carried that same approach into my own site, making sure every
              choice, from color to typography to accessibility, felt
              intentional and consistent.
            </p>

            <h2>Knowing my Audience</h2>
            <p>
              When I began planning my site, I thought about who would actually
              be visiting my site. For the most part, it’s recruiters, potential
              teammates, or collaborators. It’s people who might only spend a
              few minutes scrolling before moving on. With that in mind, I
              designed the site to be{" "}
              <strong>clear and easy to navigate</strong>, putting the most
              important information right up front. My goal was to make their
              experience smooth, intuitive, and leave them with a{" "}
              <strong>strong, positive impression.</strong>
            </p>

            <h2>Starting with Color</h2>
            <p>
              Once I had a clear understanding of my audience, I turned to color
              to shape my website's identity. Research in color psychology
              indicates that{" "}
              <strong>colors significantly influence user perception.</strong>{" "}
              For instance, blue is often associated with trust and
              professionalism, making it a popular choice for corporate and tech
              websites. Additionally, cool-toned palettes featuring blues,
              greens, and purples are known to create soothing and calming
              effects, which can{" "}
              <strong>
                enhance user experience by reducing cognitive load.
              </strong>
            </p>

            <p>
              To ensure readability and accessibility, I selected colors that
              meet WCAG contrast standards. Tools like{" "}
              <a href="https://realtimecolors.com" target="_blank">
                Realtime Colors
              </a>{" "}
              and{" "}
              <a href="https://coolors.co" target="_blank">
                Coolors
              </a>{" "}
              helped me test combinations in both light and dark modes, ensuring
              the palette was visually appealing and functional. By grounding my
              choices in <strong>color psychology</strong> and{" "}
              <strong>accessibility principles</strong>, I aimed to create a
              website that not only reflects my personal brand but also provides
              a <strong>positive and engaging experience for visitors.</strong>
            </p>

            <h2>Designing for Accessibility</h2>
            <p>
              Another priority for me was accessibility.{" "}
              <strong>
                Too often, accessibility gets treated as an afterthought,
              </strong>{" "}
              which leaves people out of the experience. I wanted inclusiveness
              to be part of the foundation. That meant choosing text sizes and
              contrast ratios that make the content easy to read, building
              navigation that feels intuitive, and making sure the layout works
              just as well on a phone as it does on a laptop. I also manually
              tested keyboard and screen reader navigation to further ensure my
              site was accessible to all users.
            </p>

            <h2>Design Decisions with Intent</h2>
            <ul>
              <li>
                <strong>Minimalist layout</strong> to let the content speak
                louder than the decoration
              </li>
              <li>
                <strong>Ample white space</strong> to create clarity and a sense
                of calm
              </li>
              <li>
                <strong>Consistent typography hierarchy</strong> so visual users
                can instantly identify headlines, sections, and body text
              </li>
              <li>
                <strong>Subtle animations</strong> to bring life to the site
                without pulling focus from the message
              </li>
              <li>
                <strong>Semantic HTML elements</strong> to ensure screen reader
                users can easily navigate and understand the page structure
              </li>
            </ul>

            <h2>What I Learned</h2>
            <p>
              The biggest lesson I took from this process is that Human-Centered
              Design brings clarity. Instead of feeling overwhelmed by endless
              choices (
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6119549/"
                target="_blank"
              >
                <i>decision fatigue!</i>
              </a>
              ), I always had a guiding principle: make it useful, make it
              thoughtful, and make it feel human.
            </p>

            <p>
              At the end of the day, my site isn’t just for me, it’s for the
              people who visit it. Maybe that’s a recruiter checking out my
              experience or a future teammate curious about my work. Whoever it
              is, I want them to leave with a{" "}
              <strong>positive impression and an easy experience</strong>. For
              me, that’s what Human-Centered Design is all about. It’s less
              about perfect intentions and more about empathy.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
