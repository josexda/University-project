import { useState } from "react";
import { Send, Facebook, Instagram, Youtube } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { toast } from "sonner";

export default function ContactSection() {
  const { ref, isVisible } = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for reaching out! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className={`${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <p className="text-accent text-sm tracking-[0.2em] uppercase font-semibold mb-3">Get in Touch</p>
            <h2 className="font-heading text-foreground text-4xl lg:text-5xl leading-[1.1] mb-6">
              We'd Love to Hear from You
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Whether you have a question about visiting, want to volunteer, or are interested in our conservation programs — drop us a line.
            </p>

            <div className="space-y-4 mb-8">
              <p className="text-foreground font-medium">
                📞 <span className="text-muted-foreground font-normal ml-2">(07) 5438 9200</span>
              </p>
              <p className="text-foreground font-medium">
                ✉️ <span className="text-muted-foreground font-normal ml-2">hello@wingtailsanctuary.com.au</span>
              </p>
            </div>

            <div className="flex gap-4">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Youtube, label: "YouTube" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200 active:scale-95"
                >
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className={`bg-background rounded-2xl p-8 shadow-sm ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow resize-none"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground px-6 py-3.5 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.97] transition-all duration-200"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
