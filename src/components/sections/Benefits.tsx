import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/Reveal";

export default function Benefits() {
  const icons = [
    // Icon 1: Star (Qualified Professionals)
    <svg
      className="w-12 h-12"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </svg>,

    // Icon 2: Calendar (Online Scheduling)
    <svg
      className="w-12 h-12"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>,

    // Icon 3: Shield (Premium Products)
    <svg
      className="w-12 h-12"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>,

    // Icon 4: House (Modern Environment)
    <svg
      className="w-12 h-12"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>,
  ];

  return (
    <section className="py-20 bg-stone-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Why Choose Us?
            </h2>
          </div>
          <div className="text-center mb-16">
            <p className="text-lg text-stone-700 max-w-2xl mx-auto">
              We offer the best experience in{" "}
              {siteConfig.businessType.toLowerCase()} with quality and
              professionalism
            </p>
          </div>
        </Reveal>

        {/* Benefits Grid */}
        <Reveal delay={0.35}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteConfig.benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Icon */}
                <div
                  className={`text-${siteConfig.colors.primary} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {icons[index]}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
