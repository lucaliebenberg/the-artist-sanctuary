import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { navLinks } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-warm-dark text-sand-light/80">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-serif text-xl font-bold text-cream">
              Sanctuary Studios
            </h3>
            <p className="mt-4 text-sm leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-cream">
              Explore
            </h4>
            <ul className="mt-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-terracotta"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-cream">
              Contact
            </h4>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-terracotta"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.phone}</li>
              <li>{siteConfig.address}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-cream">
              Follow
            </h4>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              <li>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-terracotta"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-terracotta"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-sand/20 pt-8 text-center text-sm text-warm-gray">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
