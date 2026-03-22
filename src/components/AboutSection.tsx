import { Leaf, GraduationCap, Heart } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import conservationBg from "@/assets/conservation-bg.jpg";

const values = [
  { icon: Leaf, title: "Conservation", desc: "Protecting endangered species through breeding programs and habitat restoration across Australia." },
  { icon: GraduationCap, title: "Education", desc: "Inspiring the next generation of wildlife advocates through immersive learning experiences." },
  { icon: Heart, title: "Community", desc: "Partnering with local communities and Indigenous groups to preserve avian biodiversity." },
];

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 lg:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <p className="text-accent text-sm tracking-[0.2em] uppercase font-semibold mb-3">Our Story</p>
            <h2 className="font-heading text-foreground text-4xl lg:text-5xl leading-[1.1] mb-6">
              A Sanctuary Born from Love for Australia's Birds
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Founded in 2003, Wingtail Sanctuary began as a small rehabilitation centre on the Sunshine Coast. 
              Today, we're home to over 200 species — from the iconic laughing kookaburra to the critically endangered 
              orange-bellied parrot. Every visit supports our mission to protect these remarkable creatures.
            </p>
            <div className="flex flex-col gap-6">
              {values.map((v, i) => (
                <div key={v.title} className="flex gap-4" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <v.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{v.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <img
                src={conservationBg}
                alt="Families exploring the sanctuary"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-canopy/80 to-transparent p-8">
                <div className="flex gap-8 text-sand">
                  <div>
                    <p className="text-3xl font-heading tabular-nums">200+</p>
                    <p className="text-sand/70 text-sm">Bird Species</p>
                  </div>
                  <div>
                    <p className="text-3xl font-heading tabular-nums">18</p>
                    <p className="text-sand/70 text-sm">Hectares</p>
                  </div>
                  <div>
                    <p className="text-3xl font-heading tabular-nums">45k</p>
                    <p className="text-sand/70 text-sm">Annual Visitors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
