import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/Button";
import { WhatsappSVG } from "@/components/svg/SVG";
import { Reveal } from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="py-20 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <Reveal delay={0.1}>
            <div className="relative h-100 md:h-125 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&h=600&fit=crop"
                alt="About Us"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </Reveal>

          {/* Content */}
          <div className="space-y-6">
            <Reveal delay={0.2}>
              <h2 className="text-3xl sm:text-4xl font-bold">
                {siteConfig.about.title}
              </h2>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="space-y-4 text-slate-700 leading-relaxed text-lg">
                {siteConfig.about.description
                  .split("\n\n")
                  .map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
              </div>
            </Reveal>

            {/* Stats */}
            <Reveal delay={0.5}>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">
                    10+
                  </div>
                  <div className="text-sm text-slate-700">
                    Anos de Experiência
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">
                    5k+
                  </div>
                  <div className="text-sm text-slate-700">
                    Clientes satisfeitos
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">
                    100%
                  </div>
                  <div className="text-sm text-slate-700">Qualidade</div>
                </div>
              </div>
            </Reveal>

            {/* Button */}
            <div className="pt-4">
              <a
                href={`https://wa.me/${siteConfig.contact.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold"
              >
                <Button
                  variant="transparent"
                  className="w-full text-center gap-2"
                >
                  <WhatsappSVG />
                  Mande uma mensagem para nós!
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
