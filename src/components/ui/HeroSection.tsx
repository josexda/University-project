import heroBanner from "@/assets/hero-banner.jpg";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBanner}
        alt="Wingtail Sanctuary entrance with colourful parrots"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-canopy/60" />

      <div className="relative z-10 text-center max-w-3xl mx-auto section-padding">
        <p
          className="text-sand/90 text-sm tracking-[0.25em] uppercase font-medium mb-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Australia's Premier Bird Sanctuary
        </p>
        <h1
          className="font-heading text-sand text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Where Wings Tell Stories
        </h1>
        <p
          className="text-sand/80 text-lg sm:text-xl max-w-xl mx-auto mb-10 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          Discover over 200 species of native Australian birds in lush, natural habitats. Conservation meets wonder.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          <a
            href="#visit"
            className="bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 active:scale-[0.97] transition-all duration-200 shadow-lg shadow-primary/30"
          >
            Plan Your Visit
          </a>
          <a
            href="#gallery"
            className="border-2 border-sand/40 text-sand px-8 py-3.5 rounded-lg font-semibold hover:bg-sand/10 active:scale-[0.97] transition-all duration-200"
          >
            Explore Birds
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up" style={{ animationDelay: "1.2s" }}>
        <div className="w-6 h-10 border-2 border-sand/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-sand/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
