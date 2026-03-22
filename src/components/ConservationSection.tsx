import { TreePine, ShieldCheck, Binoculars, Sprout } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const efforts = [
  { icon: TreePine, title: "Habitat Restoration", desc: "We've replanted over 50,000 native trees and shrubs, creating corridors for birds to thrive across fragmented landscapes." },
  { icon: ShieldCheck, title: "Breeding Programs", desc: "Our captive breeding programs have reintroduced over 800 endangered birds back into the wild since 2008." },
  { icon: Binoculars, title: "Field Research", desc: "Our team of ecologists conducts ongoing population surveys and behavioural studies to inform conservation policy." },
  { icon: Sprout, title: "Community Action", desc: "Through our Adopt-a-Nest program, supporters directly fund the protection of nesting sites across Queensland." },
];

export default function ConservationSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="conservation" className="py-24 lg:py-32 bg-primary text-primary-foreground" ref={ref}>
      <div className="max-w-7xl mx-auto section-padding">
        <div className={`max-w-2xl mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-sand/70 text-sm tracking-[0.2em] uppercase font-semibold mb-3">Conservation</p>
          <h2 className="font-heading text-4xl lg:text-5xl leading-[1.1] mb-6">
            Protecting Tomorrow's Skies
          </h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed">
            Every ticket, donation, and membership directly funds programs that safeguard Australia's most vulnerable bird species and their habitats.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {efforts.map((e, i) => (
            <div
              key={e.title}
              className={`bg-canopy/40 rounded-2xl p-8 hover:bg-canopy/60 transition-colors duration-300 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <e.icon className="w-8 h-8 text-sand/80 mb-4" />
              <h3 className="font-heading text-2xl mb-3">{e.title}</h3>
              <p className="text-primary-foreground/70 leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>

        <div className={`mt-12 text-center ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.5s" }}>
          <a
            href="#contact"
            className="inline-block bg-sand text-canopy px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 active:scale-[0.97] transition-all duration-200"
          >
            Support Our Mission
          </a>
        </div>
      </div>
    </section>
  );
}
