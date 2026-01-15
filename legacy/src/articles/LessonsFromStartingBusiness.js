import React from "react";

export default function LessonsFromStartingBusiness() {
  return (
    <article className="bg-background min-h-screen py-16 px-6 text-text scroll-mt-16">
      <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-6 max-w-7xl mx-auto">
        <div className="col-span-6 md:col-span-8 lg:col-span-8 lg:col-start-3">
          {/* Page Title */}
          <h1 className="text-4xl font-bold text-primary mb-4">
            Lessons from Starting My Own Business
          </h1>
          <p className="text-md text-accentDark mb-12">Published August 2023</p>

          {/* Blog Content */}
          <div
            className="prose prose-lg prose-invert max-w-none
              prose-headings:font-bold prose-headings:text-text
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-xl prose-h3:text-secondaryText prose-h3:mt-8 prose-h3:mb-2
              prose-strong:text-secondary prose-strong:font-semibold
              prose-a:text-accent prose-a:no-underline hover:prose-a:text-secondary hover:prose-a:no-underline
              prose-li:marker:text-accent prose-li:text-text
              prose-blockquote:text-accent"
          >
            <p>
              In the summer of 2023, I launched a boba tea business called{" "}
              <strong>Lunar Tea</strong> at local farmers markets. On paper, I
              was the sole owner, but in reality I couldn’t have done it without
              the support of <strong>family and friends</strong>. Looking back,
              here are the <strong>lessons that shaped me</strong>.
            </p>

            <h2>Origin Story (Nov - Dec 2022)</h2>
            <p>
              It all started during a late-night “study” session with college
              friends. We were joking about dream jobs when someone mentioned
              wanting to work at a boba shop. I laughed and said, “What if we
              started one?” We all laughed it off…but that night, the idea
              stuck. I couldn’t stop thinking about it. I dove into research:{" "}
              <strong>market trends, suppliers, startup costs</strong>.
              Nervously, I pitched it to my parents. I expected skepticism.
              Instead, my dad said something that changed everything:
            </p>
            <blockquote className="text-accent">
              “I’d rather you try, fail, and learn than never try at all and
              regret it.”
            </blockquote>
            <p>
              With their encouragement, Lunar Tea went{" "}
              <strong>from a joke to a plan</strong>.
            </p>

            <h3>Lesson: Trust your gut and take the leap.</h3>
            <p>
              If I had only listened to my skeptic, logical side, I never
              would’ve risked the <strong>time, money, and energy</strong> to
              start a business with no guaranteed payoff. I would’ve missed out
              on the <strong>priceless lessons</strong> that Lunar Tea gave me.
              Logic keeps you safe, but sometimes your gut knows when it’s worth
              jumping, and that leap can change everything.
            </p>

            <h2>Building from Scratch (Jan - May 2023)</h2>
            <p>
              The next few months were a blur. I was still in college, so
              classes filled my days, and Lunar Tea filled my nights and
              weekends. I was:
            </p>
            <ul>
              <li>
                Hustling to lock down a spot at a farmers market in Northern
                Virginia
              </li>
              <li>Figuring out confusing licenses and permits</li>
              <li>Testing suppliers to find the best ingredients</li>
              <li>
                Piecing together a website and social media presence to make it
                all feel real
              </li>
            </ul>
            <p>
              Being the only one in charge was both exciting and overwhelming.
              Every decision, from the booth layout to the branding, landed on
              me. I <strong>bootstrapped everything</strong>. The freedom was
              amazing, but the weight of it all hit me harder than I expected.
            </p>

            <h3>Lesson: Surround yourself with the right people.</h3>
            <p>
              Starting a business isn’t just about hustle and grit—it’s about
              the <strong>people who show up</strong> when it matters most.
              Their support turned what felt impossible into something{" "}
              <strong>I’ll always be proud of</strong>.
            </p>

            <h2>Opening Day (June 2023)</h2>
            <p>
              By June, my to-do list seemed endless: buying inventory, setting
              up the POS, finalizing insurance, writing operating procedures …
              Every small choice, from where to place cups to how to train
              volunteers, felt monumental. Decision fatigue hit me at an
              all-time high.
            </p>

            <h3>Lesson: You can’t plan for everything.</h3>
            <p>
              As a naturally type-A planner, I wanted to control every
              detail—but some things are impossible to predict. What mattered
              most was <strong>focusing on the essentials</strong>: the people,
              the product, and the experience. The rest would fall into place.
            </p>

            <h2>The Summer Grind (Jun - Aug 2023)</h2>
            <p>
              That summer, almost every weekend started at 5 a.m.—cooking fresh
              boba, loading tables into my dad’s truck, and setting up the booth
              before the first customers arrived. On top of that, I was working
              a full 40-hour week at my first internship. Balancing corporate
              projects on weekdays and Lunar Tea on weekends was exhausting, but
              also energizing.
            </p>

            <h3>Lesson: Consistent work leads to impact.</h3>
            <p>
              The grind was intense, but nothing compared to seeing a line form
              at my booth, hearing customers say they’d been looking forward to
              my drinks all week, and realizing that all those{" "}
              <strong>late nights and early mornings</strong> had created
              something people genuinely loved.
            </p>

            <h2>My Biggest Lesson</h2>
            <p>
              Running Lunar Tea was hands down the{" "}
              <strong>hardest but most rewarding</strong> thing I’ve done. I
              learned that being a founder means constantly balancing freedom
              with responsibility. Lunar Tea only came to life because of the{" "}
              <strong>family and friends </strong>who stood behind me every step
              of the way. They showed up at dawn to help set up, spread the
              word, and reminded me that even though I carried the title of
              “sole proprietor,” I was never truly on my own.
            </p>
            <p>
              I’ll always be grateful for the community that believed in me and
              turned a small experiment into one of the most transformative
              experiences of my life. Those lessons haven’t stayed at the
              farmers market—they’ve{" "}
              <strong>shaped how I approach every project since</strong>.
              Whether designing for users, managing operations, or collaborating
              with a team, I carry Lunar Tea’s lessons with me in every project:
              trusting my gut to take the leap, surrounding myself with the
              right people, focusing on what truly matters, and working hard for
              what counts.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
