import { Link } from "react-router-dom";
import {
  Target,
  MapPin,
  Award,
  PlayCircle,
  Check,
  ArrowRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { courses, formatNGN, formatUSD } from "../data/courses";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Reveal from "../components/Reveal";

const reasons = [
  {
    icon: Target,
    title: "Hands-on, not theory",
    body: "Real assignments and the same tools working pros use — you learn by doing, every week.",
  },
  {
    icon: MapPin,
    title: "Built for your market",
    body: "Local pricing, familiar platforms, and SMB-focused strategy that actually works where you operate.",
  },
  {
    icon: Award,
    title: "Portfolio + certificate",
    body: "Finish with work you can show clients and a certificate issued by OurSurePlug.",
  },
  {
    icon: PlayCircle,
    title: "Live, with recordings",
    body: "Learn in a cohort through live sessions, and catch up anytime with recordings.",
  },
];

function CourseCard({ course }) {
  return (
    <Link
      to={`/courses/${course.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      {course.image ? (
        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
          className="w-full transition duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="h-1.5 w-full bg-primary" />
      )}
      <div className="flex flex-1 flex-col p-6">
        <span className="w-fit rounded-full bg-lavender px-3 py-1 text-xs font-semibold text-secondary">
          {course.badge}
        </span>
        <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-secondary">
          {course.title}
        </h3>
        <p className="mt-2 text-sm text-ink/70">{course.heroSummary}</p>

        <ul className="mt-5 space-y-2">
          {course.outcomes.slice(0, 3).map((o) => (
            <li key={o} className="flex gap-2 text-sm text-ink/80">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-dark" />
              <span>{o}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-end justify-between border-t border-black/5 pt-5">
          <div>
            <p className="font-display text-2xl font-bold text-secondary">
              {formatNGN(course.priceNGN)}
            </p>
            <p className="text-xs text-ink/50">
              {formatUSD(course.priceUSD)} · {course.duration}
            </p>
          </div>
          <span className="flex items-center gap-1 text-sm font-semibold text-secondary transition group-hover:gap-2">
            View course <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Hero */}
        {/* <section className="relative overflow-hidden bg-lavender">
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
          <div className="relative mx-auto max-w-6xl px-5 py-20 text-center md:py-28">
            <span className="inline-block rounded-full border border-secondary/15 bg-white px-4 py-1.5 text-xs font-semibold text-secondary">
              OurSurePlug Digital Agency · Port Harcourt
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-secondary md:text-6xl">
              Learn the digital skills people actually pay for.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-ink/70">
              Hands-on training in digital marketing, social media, and AI video
              — built to take you from complete beginner to job-ready, with a
              portfolio and certificate to show for it.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#courses"
                className="rounded-xl bg-primary px-6 py-3 font-semibold text-secondary shadow-sm transition hover:bg-primary-dark">
                Browse courses
              </a>
              <a
                href="#why"
                className="rounded-xl border border-secondary/20 bg-white px-6 py-3 font-semibold text-secondary transition hover:border-secondary/40">
                Why train with us
              </a>
            </div>
          </div>
        </section> */}

        {/* Hero */}
        <section className="relative overflow-hidden bg-lavender">
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
          <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <Reveal className="text-center lg:text-left">
                <span className="inline-block rounded-full border border-secondary/15 bg-white px-4 py-1.5 text-xs font-semibold text-secondary">
                  OurSurePlug Digital Agency · Port Harcourt
                </span>
                <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-secondary md:text-6xl">
                  Learn the digital skills people actually pay for.
                </h1>
                <p className="mx-auto mt-5 max-w-xl text-lg text-ink/70 lg:mx-0">
                  Hands-on training in digital marketing, social media, and AI
                  video — built to take you from complete beginner to job-ready,
                  with a portfolio and certificate to show for it.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                  <a
                    href="#courses"
                    className="rounded-xl bg-primary px-6 py-3 font-semibold text-secondary shadow-sm transition hover:bg-primary-dark">
                    Browse courses
                  </a>
                  <a
                    href="#why"
                    className="rounded-xl border border-secondary/20 bg-white px-6 py-3 font-semibold text-secondary transition hover:border-secondary/40">
                    Why train with us
                  </a>
                </div>
              </Reveal>

              <div className="relative mx-auto w-full max-w-md lg:mx-0">
                <Reveal>
                  <img
                    src="/images/digital-marketing.jpeg"
                    alt="Digital Marketing Fundamentals"
                    loading="lazy"
                    className="w-full -rotate-14 rounded-2xl z-20 -mb-20 shadow-xl ring-1 ring-black/5"
                  />
                </Reveal>
                <Reveal delay={140}>
                  <img
                    src="/images/social-media.jpeg"
                    alt="Social Media Management"
                    loading="lazy"
                    className="mt-[-8%] w-full rotate-[1.5deg] rounded-2xl shadow-xl ring-1 z-5 ring-black/5"
                  />
                </Reveal>
                <Reveal delay={280}>
                  <img
                    src="/images/ai-video.jpeg"
                    alt="AI Video Production"
                    loading="lazy"
                    className=" w-full rotate-[14.5deg] -mt-20 rounded-2xl shadow-xl ring-1 ring-black/5"
                  />
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Why us */}
        <section id="why" className="scroll-mt-24 bg-white">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <div className="max-w-2xl">
              <p className="font-display text-sm font-semibold uppercase tracking-wider text-primary-dark">
                Why OurSurePlug
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-secondary md:text-4xl">
                Training that turns into real work
              </h2>
              <p className="mt-4 text-ink/70">
                Every course is practical, cohort-based, and built for
                real-world application. So you finish with skills you can use
                and proof you can show.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {reasons.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-black/5 bg-slate-50 p-6">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-secondary">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm text-ink/70">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Courses */}
        <section id="courses" className="scroll-mt-24 bg-lavender">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <div className="max-w-2xl">
              <p className="font-display text-sm font-semibold uppercase tracking-wider text-primary-dark">
                Our courses
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-secondary md:text-4xl">
                Pick a course and enroll
              </h2>
              <p className="mt-4 text-ink/70">
                Three focused programs. Open any course to see the full
                curriculum, what you’ll build, and how to pay.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {courses.map((course) => (
                <CourseCard key={course.slug} course={course} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        {/* <section className="bg-white">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <div className="relative overflow-hidden rounded-3xl bg-secondary px-8 py-14 text-center md:px-16">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
              <h2 className="relative font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
                Not sure which course fits?
              </h2>
              <p className="relative mx-auto mt-4 max-w-xl text-white/75">
                Tell us your goal — a new career, freelancing, or growing your
                own brand — and we’ll point you to the right program.
              </p>
              <a
                href="mailto:hello@oursureplug.com"
                className="relative mt-8 inline-block rounded-xl bg-primary px-6 py-3 font-semibold text-secondary transition hover:bg-primary-dark">
                Talk to us
              </a>
            </div>
          </div>
        </section> */}
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
