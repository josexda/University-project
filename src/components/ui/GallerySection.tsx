import { useScrollReveal } from "@/hooks/useScrollReveal";
import birdLorikeet from "@/assets/bird-lorikeet.jpg";
import birdCockatoo from "@/assets/bird-cockatoo.jpg";
import birdKookaburra from "@/assets/bird-kookaburra.jpg";
import birdEmu from "@/assets/bird-emu.jpg";
import birdRosella from "@/assets/bird-rosella.jpg";
import birdSwan from "@/assets/bird-swan.jpg";
import birdGalah from "@/assets/bird-galah.jpg";

const birds = [
  { img: birdLorikeet, name: "Rainbow Lorikeet", desc: "A dazzling burst of colour, these playful parrots are one of Australia's most recognisable birds.", status: "Common" },
  { img: birdCockatoo, name: "Sulphur-crested Cockatoo", desc: "Intelligent and charismatic, known for their striking yellow crest and ear-splitting calls.", status: "Common" },
  { img: birdKookaburra, name: "Laughing Kookaburra", desc: "The bushland's alarm clock — their iconic laugh echoes through forests at dawn and dusk.", status: "Common" },
  { img: birdEmu, name: "Emu", desc: "Australia's tallest native bird, a flightless giant that roams grasslands and open woodlands.", status: "Common" },
  { img: birdRosella, name: "Crimson Rosella", desc: "Jewel of the eucalyptus forests with vibrant crimson plumage and melodic whistling calls.", status: "Common" },
  { img: birdSwan, name: "Black Swan", desc: "An elegant symbol of Western Australia, gliding gracefully across wetlands and lakes.", status: "Stable" },
  { img: birdGalah, name: "Galah", desc: "The pink-and-grey acrobat of the skies, adored for their cheeky personality and tumbling flight.", status: "Common" },
];

export default function GallerySection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto section-padding">
        <div className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-accent text-sm tracking-[0.2em] uppercase font-semibold mb-3">Bird Gallery</p>
          <h2 className="font-heading text-foreground text-4xl lg:text-5xl leading-[1.1] mb-4">
            Meet Our Feathered Residents
          </h2>
          <p className="text-muted-foreground text-lg">
            From tiny finches to towering emus, discover the incredible diversity of Australian birdlife.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {birds.map((bird, i) => (
            <div
              key={bird.name}
              className={`group rounded-2xl overflow-hidden bg-background shadow-sm hover:shadow-xl hover:shadow-primary/8 transition-shadow duration-500 ${isVisible ? "animate-scale-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={bird.img}
                  alt={bird.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <span className="absolute top-3 right-3 bg-primary/90 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {bird.status}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-foreground text-xl mb-2">{bird.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{bird.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
