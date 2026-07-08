import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="scroll-mt-24 bg-secondary text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            {/* <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary font-display text-lg font-bold text-secondary">
              O
            </span> */}
            <img
              src="/images/logo.png"
              alt="logo"
              className="w-20 h-10 object-cover"
            />
            <span className="font-display text-lg font-bold">OurSurePlug</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-white/70">
            Digital Excellence, Customized for You. A digital agency and
            training institute in Port Harcourt, Nigeria.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
            Courses
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>
              <Link
                to="/courses/digital-marketing-fundamentals"
                className="transition hover:text-white">
                Digital Marketing Fundamentals
              </Link>
            </li>
            <li>
              <Link
                to="/courses/social-media-management"
                className="transition hover:text-white">
                Social Media Management
              </Link>
            </li>
            <li>
              <Link
                to="/courses/ai-video-production"
                className="transition hover:text-white">
                AI Video Production
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
            Get in touch
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>
              14 Obiwale Road, By Market Junction, Rumuigbo, Port Harcourt,
              Rivers State
            </li>
            <li>
              <a
                href="mailto:hello@oursureplug.com"
                className="transition hover:text-white">
                oursureplug@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://oursureplug.com"
                className="transition hover:text-white">
                oursureplug.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto text-center text-primary max-w-6xl px-5 py-6 text-xs ">
          © {new Date().getFullYear()} OurSurePlug Digital Agency. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
