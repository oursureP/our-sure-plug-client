import { Mail, Phone, MapPin } from "lucide-react";
import {
  SiWhatsapp,
  SiInstagram,
  SiFacebook,
  SiX,
  SiTiktok,
  //   SiLinkedin,
} from "@icons-pack/react-simple-icons";
import Reveal from "./Reveal";
import { contact, socials } from "../data/site";

const socialIcons = {
  Instagram: SiInstagram,
  Facebook: SiFacebook,
  X: SiX,
  TikTok: SiTiktok,
  //   LinkedIn: SiLinkedin,
};

function Contact() {
  const waLink = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    "Hi OurSurePlug, I'd like to know more about your courses.",
  )}`;

  return (
    <section id="contact" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal>
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-primary-dark">
              Contact
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-secondary md:text-4xl">
              Talk to us
            </h2>
            <p className="mt-4 text-ink/70">
              Questions about a course, payment, or the next cohort? Reach out
              on whichever channel is easiest — we reply fastest on WhatsApp.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 text-ink/80 transition hover:text-secondary">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-lavender text-secondary">
                  <Mail className="h-5 w-5" />
                </span>
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-ink/80 transition hover:text-secondary">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-lavender text-secondary">
                  <Phone className="h-5 w-5" />
                </span>
                {contact.phone}
              </a>
              <p className="flex items-center gap-3 text-ink/80">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-lavender text-secondary">
                  <MapPin className="h-5 w-5" />
                </span>
                {contact.address}
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3">
              {socials.map((s) => {
                const Icon = socialIcons[s.name];
                if (!Icon) return null;
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="grid h-11 w-11 place-items-center rounded-xl border border-black/5 hover:text-white bg-white transition hover:bg-secondary  hover:-translate-y-0.5 hover:shadow-md ">
                    <Icon className="h-5 w-5 hover:text-white" />
                  </a>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex h-full flex-col justify-center rounded-3xl bg-secondary p-8 text-center md:p-10">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-primary">
                <SiWhatsapp size={28} color="#430b83" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold text-white">
                Chat with us on WhatsApp
              </h3>
              <p className="mt-3 text-white/75">
                The fastest way to reach us — ask about courses, cohorts, or
                payment.
              </p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-xl bg-primary px-6 py-3 font-semibold text-secondary transition hover:bg-primary-dark">
                Open WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
