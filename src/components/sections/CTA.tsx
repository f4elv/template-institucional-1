import { siteConfig } from "@/config/site";
import { Button } from "@/components/Button";
import { WhatsappSVG } from "@/components/svg/SVG";

export default function CTA() {
  return (
    <section className="py-20 bg-accent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Content */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          {siteConfig.cta.title}
        </h2>
        <p className="text-xl text-stone-50 mb-10 max-w-2xl mx-auto">
          {siteConfig.cta.description}
        </p>

        {/* Button */}
        <Button variant="primary">
          <a
            href={`https://wa.me/${siteConfig.contact.phoneRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold flex items-center justify-center gap-2"
          >
            <WhatsappSVG />
            {siteConfig.cta.buttonText}
          </a>
        </Button>

        {/* Contact Info */}
        <div className="mt-10 pt-10 border-t border-white/20">
          <p className="text-stone-400 mb-2">
            Ou entre em contato conosco pelo instagram
          </p>
          <Button variant="transparent">
            <a
              href={`https://www.instagram.com/${siteConfig.social.instagram.split("/").pop()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-bold text-white hover:text-primary transition-colors"
            >
              @{siteConfig.social.instagram.split("/").pop()}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
