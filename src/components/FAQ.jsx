import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Reveal from "./Reveal";
import { faqs } from "../data/site";

function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="scroll-mt-24 bg-lavender">
      <div className="mx-auto max-w-3xl px-5 py-20">
        <Reveal className="text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-wider text-primary-dark">
            FAQ
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-secondary md:text-4xl">
            Questions, answered
          </h2>
        </Reveal>

        <div className="mt-10 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 60}>
                <div className="overflow-hidden rounded-xl border border-black/5 bg-white">
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
                    <span className="font-display font-semibold text-secondary">
                      {item.q}
                    </span>
                    {isOpen ? (
                      <Minus className="h-5 w-5 shrink-0 text-primary-dark" />
                    ) : (
                      <Plus className="h-5 w-5 shrink-0 text-primary-dark" />
                    )}
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm text-ink/70">{item.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
