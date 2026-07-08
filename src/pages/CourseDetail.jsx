import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  Clock,
  GraduationCap,
  ChevronDown,
  Share2,
  Search,
  Mail,
  Target,
  BarChart,
  Award,
  Calendar,
  Image,
  MessageSquare,
  MessageCircle,
  LineChart,
  FileText,
  Mic,
  Scissors,
  Music,
  Video,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import { getCourseBySlug, formatNGN, formatUSD } from "../data/courses";
import EnrolModal from "../components/EnrolModal";

const iconMap = {
  Share2,
  Search,
  Mail,
  Target,
  BarChart,
  Award,
  Calendar,
  Image,
  MessageSquare,
  MessageCircle,
  LineChart,
  FileText,
  Mic,
  Scissors,
  Music,
  Video,
};

function CourseDetail() {
  const { slug } = useParams();
  const course = getCourseBySlug(slug);
  const [enrolOpen, setEnrolOpen] = useState(false);
  const [openWeeks, setOpenWeeks] = useState([1]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const toggleWeek = (n) =>
    setOpenWeeks((prev) =>
      prev.includes(n) ? prev.filter((x) => x !== n) : [...prev, n],
    );

  if (!course) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="mx-auto flex max-w-6xl flex-col items-center px-5 py-32 text-center">
          <h1 className="font-display text-3xl font-bold text-secondary">
            Course not found
          </h1>
          <p className="mt-3 text-ink/70">
            We couldn’t find that course — it may have moved.
          </p>
          <Link
            to="/"
            className="mt-6 rounded-xl bg-primary px-6 py-3 font-semibold text-secondary transition hover:bg-primary-dark">
            Back to all courses
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleEnrol = () => setEnrolOpen(true);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {/* Hero */}
        {/* <section className="relative overflow-hidden bg-lavender">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative mx-auto max-w-5xl px-5 py-16 md:py-20">
            <Link
              to="/#courses"
              className="inline-flex items-center gap-1 text-sm font-medium text-secondary/70 transition hover:text-secondary">
              <ArrowLeft className="h-4 w-4" /> All courses
            </Link>

            <Reveal className="mt-6">
              <span className="inline-block rounded-full border border-secondary/15 bg-white px-4 py-1.5 text-xs font-semibold text-secondary">
                {course.badge}
              </span>
              <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-secondary md:text-5xl">
                {course.title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-ink/70">
                {course.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <span className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 font-medium text-secondary">
                  <Clock className="h-4 w-4 text-primary-dark" />{" "}
                  {course.duration}
                </span>
                <span className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 font-medium text-secondary">
                  <GraduationCap className="h-4 w-4 text-primary-dark" />{" "}
                  {course.level}
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={handleEnrol}
                  className="rounded-xl bg-primary px-6 py-3 font-semibold text-secondary shadow-sm transition hover:bg-primary-dark">
                  Enrol now — {formatNGN(course.priceNGN)}
                </button>
                <a
                  href="#curriculum"
                  className="rounded-xl border border-secondary/20 bg-white px-6 py-3 font-semibold text-secondary transition hover:border-secondary/40">
                  View curriculum
                </a>
              </div>
            </Reveal>
          </div>
        </section> */}

        {/* Hero */}
        <section className="relative overflow-hidden bg-secondary">
          {course.image && (
            <div className="absolute inset-0">
              <img
                src={course.image}
                alt=""
                aria-hidden="true"
                className="h-full w-full scale-110 object-cover blur-xs"
              />
              {/* Overlay for legibility */}
              <div className="absolute inset-0 bg-secondary/10" />
              <div className="absolute inset-0 bg-linear-to-r from-secondary via-secondary/20 to-secondary/10" />
            </div>
          )}

          {/* <div className="mt-6 grid items-center gap-10 lg:grid-cols-2"> */}
          <div className="relative mx-auto max-w-5xl px-5 py-16 md:py-24">
            <Link
              to="/#courses"
              className="inline-flex items-center gap-1 text-sm font-medium text-white/70 transition hover:text-white">
              <ArrowLeft className="h-4 w-4" /> All courses
            </Link>

            <Reveal className="mt-6">
              <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur">
                {course.badge}
              </span>
              <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                {course.title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-white/80">
                {course.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 font-medium text-white backdrop-blur">
                  <Clock className="h-4 w-4 text-primary" /> {course.duration}
                </span>
                <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 font-medium text-white backdrop-blur">
                  <GraduationCap className="h-4 w-4 text-primary" />{" "}
                  {course.level}
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={handleEnrol}
                  className="rounded-xl bg-primary px-6 py-3 font-semibold text-secondary shadow-sm transition hover:bg-primary-dark">
                  Enrol now — {formatNGN(course.priceNGN)}
                </button>
                <a
                  href="#curriculum"
                  className="rounded-xl border border-white/25 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20">
                  View curriculum
                </a>
              </div>
            </Reveal>
          </div>

          {/* {course.image && (
              <Reveal delay={120}>
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full rounded-3xl shadow-xl ring-1 ring-black/5"
                />
              </Reveal>
            )} */}
          {/* </div> */}
        </section>

        {/* Price band */}
        <section className="bg-primary">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-5 py-6 text-secondary sm:flex-row">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-3xl font-bold">
                {formatNGN(course.priceNGN)}
              </span>
              <span className="text-lg font-semibold text-secondary/70">
                {formatUSD(course.priceUSD)}
              </span>
            </div>
            <p className="text-sm font-medium text-secondary/80">
              {course.priceNote}
            </p>
          </div>
        </section>

        {/* What you'll walk away with */}
        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-5 py-16 md:py-20">
            <Reveal>
              <h2 className="font-display text-2xl font-bold tracking-tight text-secondary md:text-3xl">
                What you’ll walk away with
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {course.highlights.map((h, i) => {
                const Icon = iconMap[h.icon] ?? Check;
                return (
                  <Reveal key={h.label} delay={i * 80}>
                    <div className="flex items-center gap-3 rounded-2xl border border-black/5 bg-slate-50 p-5">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-medium text-secondary">
                        {h.label}
                      </span>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* What you'll learn */}
        <section className="bg-lavender">
          <div className="mx-auto max-w-5xl px-5 py-16 md:py-20">
            <Reveal>
              <h2 className="font-display text-2xl font-bold tracking-tight text-secondary md:text-3xl">
                What you’ll learn
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {course.outcomes.map((o, i) => (
                <Reveal key={o} delay={i * 60}>
                  <div className="flex gap-3 rounded-xl bg-white p-4">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary-dark" />
                    <span className="text-ink/80">{o}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section id="curriculum" className="scroll-mt-24 bg-white">
          <div className="mx-auto max-w-4xl px-5 py-16 md:py-20">
            <Reveal>
              <h2 className="font-display text-2xl font-bold tracking-tight text-secondary md:text-3xl">
                {course.duration} curriculum
              </h2>
              <p className="mt-3 text-ink/70">
                A structured, week-by-week path — each week ends with a real
                deliverable for your portfolio.
              </p>
            </Reveal>
            {/* <ol className="mt-10 space-y-4">
              {course.weeks.map((w, i) => (
                <Reveal key={w.n} delay={i * 60}>
                  <li className="flex gap-5 rounded-2xl border border-black/5 bg-slate-50 p-5">
                    <span className="font-display text-2xl font-bold tabular-nums text-primary-dark">
                      {String(w.n).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-secondary">
                        {w.title}
                      </h3>
                      <p className="mt-1 text-sm text-ink/70">
                        <span className="font-semibold text-secondary/80">
                          Deliverable:
                        </span>{" "}
                        {w.deliverable}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol> */}

            <ol className="mt-10 space-y-4">
              {course.weeks.map((w, i) => {
                const isOpen = openWeeks.includes(w.n);
                return (
                  <Reveal key={w.n} delay={i * 60}>
                    <li className="overflow-hidden rounded-2xl border border-black/5 bg-slate-50">
                      <button
                        onClick={() => toggleWeek(w.n)}
                        className="flex w-full items-center gap-5 p-5 text-left">
                        <span className="font-display text-2xl font-bold tabular-nums text-primary-dark">
                          {String(w.n).padStart(2, "0")}
                        </span>
                        <span className="flex-1 font-display text-lg font-bold text-secondary">
                          {w.title}
                        </span>
                        <ChevronDown
                          className={`h-5 w-5 shrink-0 text-secondary/60 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>

                      <div
                        className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                        <div className="overflow-hidden">
                          <div className="border-t border-black/5 px-5 pb-5 pt-4">
                            <ul className="space-y-2">
                              {w.topics.map((t) => (
                                <li
                                  key={t}
                                  className="flex gap-2.5 text-sm text-ink/75">
                                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                  <span>{t}</span>
                                </li>
                              ))}
                            </ul>
                            <p className="mt-4 rounded-lg bg-white px-3 py-2 text-sm text-ink/70">
                              <span className="font-semibold text-secondary">
                                Deliverable:
                              </span>{" "}
                              {w.deliverable}
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </Reveal>
                );
              })}
            </ol>
          </div>
        </section>

        {/* Enrol CTA */}
        <section className="bg-white pb-20">
          <div className="mx-auto max-w-5xl px-5">
            <div className="relative overflow-hidden rounded-3xl bg-secondary px-8 py-14 text-center md:px-16">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
              <h2 className="relative font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
                Ready to enrol in {course.title}?
              </h2>
              <p className="relative mx-auto mt-4 max-w-xl text-white/75">
                Secure your spot in the next cohort — pay safely online in
                Naira.
              </p>
              <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <button
                  onClick={handleEnrol}
                  className="rounded-xl bg-primary px-8 py-3 font-semibold text-secondary transition hover:bg-primary-dark">
                  Enrol now — {formatNGN(course.priceNGN)}
                </button>
                <span className="text-sm text-white/60">
                  {formatUSD(course.priceUSD)} · {course.priceNote}
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      {enrolOpen && (
        <EnrolModal course={course} onClose={() => setEnrolOpen(false)} />
      )}
    </div>
  );
}

export default CourseDetail;
