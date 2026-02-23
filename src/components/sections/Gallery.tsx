import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { InstagramSVG } from "@/components/svg/SVG";

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Nossa Galeria
            </h2>
            <p className="text-lg text-stone-700 max-w-2xl mx-auto">
              Veja alguns dos nossos trabalhos e ambiente
            </p>
          </div>
        </Reveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.gallery.map((image, index) => (
            <Reveal key={index}>
              <div
                key={index}
                className="relative h-80 rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Image */}
                <Image
                  src={image}
                  alt={`Galeria ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12">
          <p className="text-stone-700 mb-6">
            Nós estamos orgulhosos do nosso trabalho e ambiente. Siga-nos no
            Instagram
          </p>
          <a
            href={`${siteConfig.social.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-2xl"
          >
            <Button variant="transparent" className="gap-2">
              <InstagramSVG />@{siteConfig.social.instagram.split("/").pop()}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
