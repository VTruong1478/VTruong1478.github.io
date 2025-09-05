import React from "react";

export default function SmallBusinessGrowth() {
  return (
    <article className="bg-background min-h-screen py-16 px-6 text-text scroll-mt-16">
      <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-6 max-w-7xl mx-auto">
        <div className="col-span-6 md:col-span-8 lg:col-span-8 lg:col-start-3">
          {/* Page Title */}
          <h1 className="text-4xl font-bold text-primary mb-4">
            Small Business Growth
          </h1>
          <p className="text-md text-accentDark mb-12">Published August 2023</p>

          {/* Portfolio Content */}
          <div
            className="prose prose-lg prose-invert max-w-none
                prose-headings:font-bold prose-headings:text-text
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
                prose-h3:text-xl prose-h3:text-secondaryText prose-h3:mt-8 prose-h3:mb-2
                prose-strong:text-secondary prose-strong:font-semibold
                prose-a:text-accent prose-a:no-underline hover:prose-a:text-secondary hover:prose-a:no-underline
                prose-li:marker:text-accent prose-li:text-text"
          >
            <h2>Overview</h2>
            <p>
              I started a small boba tea business at local farmers markets with
              the goal of creating a product that people would look forward to
              every week. I managed every aspect of the business from product
              development to supply chain and operations. In just{" "}
              <strong>eight months</strong>, I grew revenue by over{" "}
              <strong>$2.2K</strong>. This experience showed me how even a small
              farmers market stand can grow into a meaningful and impactful
              venture when <strong>strategy and customer focus</strong> are
              combined.
            </p>

            <h2>The Challenge</h2>
            <p>
              Farmers markets are full of talented food and drink vendors, so
              standing out required more than just making a tasty drink. I
              needed to create an experience that customers remembered and
              returned to regularly. I had to build a brand and an experience
              that customers looked forward to week after week. My goals were:
            </p>
            <ul>
              <li>
                <strong>Build a brand</strong> that stood out among countless
                vendors while clearly communicating our value.
              </li>
              <li>
                <strong>Cultivate a loyal customer base</strong> in a market
                full of choices.
              </li>
              <li>
                <strong>Operate sustainably</strong> as a solo founder, managing
                limited resources, time, and capital.
              </li>
            </ul>

            <h2>My Approach</h2>

            <h3>Supply Chain Optimization</h3>
            <p>
              By analyzing supplier offerings and customer preferences, I
              introduced bright, trendy flavors like taro and mango that
              attracted children’s attention, driving parents to try our drinks
              and boosting foot traffic. I also added a non-dairy milk option in
              a health-conscious neighborhood, resulting in over{" "}
              <strong>20% of customers</strong>choosing it. This demonstrated
              how targeted product choices directly increased sales and customer
              satisfaction.
            </p>

            <h3>Data-Driven Pricing</h3>
            <p>
              I tracked sales data and customer feedback to determine optimal
              pricing and order quantities. This approach helped me maximize
              profit while keeping drinks affordable. For example, I tested
              different prices for the standard black tea and found that{" "}
              <strong>$6.50</strong> struck the best balance between
              profitability and customer satisfaction.
            </p>

            <h3>Customer Engagement</h3>
            <p>
              I focused on creating a welcoming experience for every visitor. I
              offered free samples of new flavors, which led to a{" "}
              <strong>20% increase in first-time purchases</strong>. I also
              designed hand-drawn chalkboard menus and laminated picture menus
              with consistent branding, helping to establish the stand as a
              recognizable and inviting presence at the market.
            </p>

            <h2>Results</h2>
            <ul>
              <li>
                Increased revenue by over <strong>$2.2K</strong> in just eight
                months.
              </li>
              <li>
                Built a loyal base of <strong>261 repeat customers</strong> who
                made boba part of their weekend routine, often bringing friends
                and family along.
              </li>
              <li>
                Positioned the business as a <strong>go-to destination</strong>{" "}
                at the local farmers market, with customers actively seeking it
                out each week.
              </li>
            </ul>

            <h2>Key Takeaway</h2>
            <p>
              What began as a small farmers market stand grew into a meaningful
              community experience. The real success went beyond revenue and
              metrics. It was in creating a product and environment that people
              felt connected to and looked forward to each week. This experience
              showed me that{" "}
              <strong>
                thoughtful strategy and genuine care for customers
              </strong>{" "}
              can make even the smallest venture thrive and leave a lasting
              impact.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
