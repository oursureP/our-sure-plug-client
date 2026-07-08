import { Quote } from "lucide-react";
import Reveal from "./Reveal";
import { testimonials } from "../data/site";

function Avatar({ t }) {
  if (t.image) {
    return (
      <img
        src={t.image}
        alt={t.name}
        className="h-12 w-12 rounded-full object-cover"
      />
    );
  }
  const initials = t.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
  return (
    <div className="grid h-12 w-12 place-items-center rounded-full bg-secondary font-display text-sm font-bold text-primary">
      {initials}
    </div>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <Reveal className="max-w-2xl">
          <p className="font-display text-sm font-semibold uppercase tracking-wider text-primary-dark">
            Testimonials
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-secondary md:text-4xl">
            What our students say
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <figure className="flex h-full flex-col rounded-2xl border border-black/5 bg-lavender p-6">
                <Quote className="h-7 w-7 text-primary-dark" />
                <blockquote className="mt-4 flex-1 text-ink/80">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <Avatar t={t} />
                  <div>
                    <p className="font-display text-sm font-bold text-secondary">
                      {t.name}
                    </p>
                    <p className="text-xs text-ink/60">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
