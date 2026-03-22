import { Clock, MapPin, Ticket, Calendar } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const tickets = [
  { type: "Adult", price: "$38", desc: "Ages 16+" },
  { type: "Child", price: "$22", desc: "Ages 4–15" },
  { type: "Family", price: "$105", desc: "2 Adults + 2 Children" },
  { type: "Concession", price: "$30", desc: "Student / Senior" },
];

const hours = [
  { day: "Monday – Friday", time: "9:00 AM – 5:00 PM" },
  { day: "Saturday – Sunday", time: "8:30 AM – 5:30 PM" },
  { day: "Public Holidays", time: "9:00 AM – 4:00 PM" },
];

export default function VisitSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="visit" className="py-24 lg:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto section-padding">
        <div className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-accent text-sm tracking-[0.2em] uppercase font-semibold mb-3">Plan Your Visit</p>
          <h2 className="font-heading text-foreground text-4xl lg:text-5xl leading-[1.1] mb-4">
            Your Day at the Sanctuary
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know for an unforgettable experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tickets */}
          <div className={`bg-card rounded-2xl p-8 shadow-sm ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Ticket className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-foreground text-2xl mb-6">Admission</h3>
            <div className="space-y-4">
              {tickets.map((t) => (
                <div key={t.type} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                  <div>
                    <p className="font-semibold text-foreground">{t.type}</p>
                    <p className="text-muted-foreground text-xs">{t.desc}</p>
                  </div>
                  <p className="font-heading text-xl text-primary tabular-nums">{t.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div className={`bg-card rounded-2xl p-8 shadow-sm ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
              <Clock className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-heading text-foreground text-2xl mb-6">Opening Hours</h3>
            <div className="space-y-4">
              {hours.map((h) => (
                <div key={h.day} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                  <p className="font-medium text-foreground text-sm">{h.day}</p>
                  <p className="text-muted-foreground text-sm tabular-nums">{h.time}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-start gap-3 p-4 bg-primary/5 rounded-xl">
              <Calendar className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">Last entry is 1 hour before closing. Closed Christmas Day.</p>
            </div>
          </div>

          {/* Location */}
          <div className={`bg-card rounded-2xl p-8 shadow-sm md:col-span-2 lg:col-span-1 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
            <div className="w-12 h-12 rounded-xl bg-earth/10 flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6 text-earth" />
            </div>
            <h3 className="font-heading text-foreground text-2xl mb-6">Getting Here</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              148 Birdwood Drive<br />
              Glass House Mountains, QLD 4518<br />
              Australia
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Located just 1 hour north of Brisbane, nestled among the stunning Glass House Mountains.
            </p>
            <div className="rounded-xl overflow-hidden h-40 bg-muted">
              <iframe
                title="Wingtail Sanctuary Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56636.22187838975!2d152.88!3d-26.88!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9390!2sGlass+House+Mountains!5e0!3m2!1sen!2sau!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
