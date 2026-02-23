import { siteConfig } from "@/config/site";
import { Button } from "@/components/Button";
import {
  WhatsappSVG,
  InstagramSVG,
  FacebookSVG,
  LocationSVG,
  HourSVG,
} from "@/components/svg/SVG";

export default function Location() {
  return (
    <section id="contact" className="py-20 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header section*/}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Localização e Contato
          </h2>
          <p className="text-lg text-stone-700">
            Entre em contato conosco para agendar uma visita ou tirar suas
            dúvidas. Estamos ansiosos para atendê-lo!
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <LocationSVG />
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">Address</h3>
                <p className="text-stone-700">{siteConfig.contact.address}</p>
                <p className="text-stone-700">{siteConfig.contact.city}</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <HourSVG />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Opening Hours</h3>
                <p className="text-stone-700">{siteConfig.hours.weekdays}</p>
                <p className="text-stone-700">{siteConfig.hours.saturday}</p>
                <p className="text-stone-700">{siteConfig.hours.sunday}</p>
              </div>
            </div>

            {/* Whatsapp */}
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <WhatsappSVG />
              </div>
              <div className="flex gap-4">
                <a
                  href={`https://wa.me/${siteConfig.contact.phoneRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-stone-700 hover:text-accent transition-colors"
                >
                  <div>
                    <h3 className="font-bold text-black text-lg mb-2">
                      Whatsapp
                    </h3>
                    {siteConfig.contact.phone}
                  </div>
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-6">
              <h3 className="font-bold text-lg mb-4">Social Media</h3>
              <div className="flex gap-4">
                <a
                  href={`${siteConfig.social.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium"
                >
                  <Button variant="transparent" className="gap-2">
                    <InstagramSVG />@
                    {siteConfig.social.instagram.split("/").pop()}
                  </Button>
                </a>
                <a
                  href={`${siteConfig.social.facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium"
                >
                  <Button variant="secondary" className="gap-2">
                    <FacebookSVG />
                    {siteConfig.social.facebook.split("/").pop()}
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-125 rounded-xl overflow-hidden shadow-xl">
            <iframe
              src={siteConfig.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
