import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-background py-8 px-8 text-text sm:px-12 md:px-16 scroll-mt-16"
    >
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-bold text-primary">Contact</h2>
        <p className="text-secondaryText text-lg">
          Whether it’s a project, a potential opportunity, or just a friendly
          chat about{" "}
          <Link
            to="/hobbies"
            className="text-accent hover:text-accentShade font-semibold underline underline-offset-4"
          >
            hobbies
          </Link>
          , I’d be excited to connect with you!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
          <a
            href="mailto:your-email@example.com"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-primary text-white font-semibold shadow-md hover:bg-primaryShade transition-transform transform hover:-translate-y-1"
          >
            <FaEnvelope className="text-lg" />
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/vinhan-truong/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-primary text-white font-semibold shadow-md hover:bg-primaryShade transition-transform transform hover:-translate-y-1"
          >
            <FaLinkedin className="text-lg" />
            Connect on LinkedIn
          </a>
          <a
            href="https://github.com/VTruong1478/VTruong1478.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-primary text-white font-semibold shadow-md hover:bg-primaryShade transition-transform transform hover:-translate-y-1"
          >
            <FaGithub className="text-lg" />
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
