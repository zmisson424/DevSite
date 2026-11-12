import { useState } from "react";
import { NAVIGATION_LINKS } from "../../data/links";
import "./SiteHeader.css";

// SVG paths for the menu button's two states.
const HAMBURGER_ICON_PATH = "M3 6h14M3 10h14M3 14h14";
const CLOSE_ICON_PATH = "M5 5l10 10M15 5L5 15";

/** Sticky top bar: wordmark, section tabs, contact button, and a dropdown menu on phones. */
function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((isOpen) => !isOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__bar page-container">
        <a href="#top" className="site-header__wordmark" aria-label="Zachery Misson, back to top">
          zm<span className="site-header__wordmark-dot">.</span>
        </a>

        <nav aria-label="Main" className="site-header__tabs">
          {NAVIGATION_LINKS.map((link) => (
            <a key={link.sectionId} href={`#${link.sectionId}`} className="site-header__tab">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#hi" className="site-header__contact">
          Contact
        </a>

        <button
          type="button"
          className="site-header__menu-button"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            aria-hidden="true"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          >
            <path d={isMobileMenuOpen ? CLOSE_ICON_PATH : HAMBURGER_ICON_PATH} />
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav id="mobile-menu" aria-label="Main" className="site-header__mobile-menu page-container">
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.sectionId}
              href={`#${link.sectionId}`}
              className="site-header__mobile-link"
              onClick={closeMobileMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default SiteHeader;
