import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-end gap-2">
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-20 h-15 object-cover"
          />
          <span className="font-display -ml-4 mb-1 text-lg font-bold hidden md:block tracking-tight text-secondary">
            OurSurePlug
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="/#courses"
            className="text-sm font-medium text-ink/70 transition hover:text-secondary">
            Courses
          </a>
          <a
            href="/#why"
            className="text-sm font-medium text-ink/70 transition hover:text-secondary">
            Why us
          </a>
          <a
            href="/#contact"
            className="text-sm font-medium text-ink/70 transition hover:text-secondary">
            Contact
          </a>
        </div>

        <a
          href="/#courses"
          className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-secondary transition hover:bg-primary-dark">
          Browse courses
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
