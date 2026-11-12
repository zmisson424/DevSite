import "./SiteFooter.css";

const LAST_UPDATED = "november 2026";

function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer page-container">
      <span>© {currentYear} Zachery Misson</span>
      <span>updated {LAST_UPDATED}</span>
    </footer>
  );
}

export default SiteFooter;
