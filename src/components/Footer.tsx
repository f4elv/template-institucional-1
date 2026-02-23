"use client";

import { siteConfig } from "@/config/site";
import { scrollToSection } from "@/lib/utils";
import { InstagramSVG, WhatsappSVG, FacebookSVG } from "@/components/svg/SVG";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              {siteConfig.businessName}
            </h3>
            <p className="text-stone-400 mb-4">{siteConfig.tagline}</p>
            <p className="text-stone-400 text-sm">
              {siteConfig.contact.address}
              <br />
              {siteConfig.contact.city}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  Galeria
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.social.instagram}`}
                  className="text-stone-400 hover:text-white transition-colors break-all"
                >
                  {siteConfig.social.instagram}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold mb-4">Horário</h4>
            <ul className="space-y-2 text-stone-400 text-sm">
              <li>{siteConfig.hours.weekdays}</li>
              <li>{siteConfig.hours.saturday}</li>
              <li>{siteConfig.hours.sunday}</li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-stone-700 pt-8 mb-8">
          <div className="flex justify-center gap-6">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 bg-stone-700 hover:bg-${siteConfig.colors.primary} rounded-lg flex items-center justify-center transition-all hover:scale-110`}
            >
              <InstagramSVG />
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 bg-stone-700 hover:bg-${siteConfig.colors.primary} rounded-lg flex items-center justify-center transition-all hover:scale-110`}
            >
              <FacebookSVG />
            </a>
            <a
              href={`https://wa.me/${siteConfig.contact.phoneRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 bg-stone-700 hover:bg-${siteConfig.colors.primary} rounded-lg flex items-center justify-center transition-all hover:scale-110`}
            >
              <WhatsappSVG />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-stone-400 text-sm border-t border-stone-700 pt-8">
          <p className="mb-2">
            © {currentYear} {siteConfig.businessName}. Todos os direitos
            reservados.
          </p>
          <p className="text-lg">
            Desenvolvido e mantido por{" "}
            <a
              href="https://vortexstudio.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-primary font-bold">Vortex</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
