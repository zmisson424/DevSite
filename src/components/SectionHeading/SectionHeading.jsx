import "./SectionHeading.css";

/**
 * Numbered chapter heading, e.g. "01  The day job".
 *
 * size     "large" for main chapters (ruled underneath), "compact" for smaller ones.
 * aside    optional content pinned to the right: a short description or a link.
 * children the title; wrap one word in <em> for the italic voice.
 */
function SectionHeading({ number, size = "large", aside, children }) {
  return (
    <div className={`section-heading section-heading--${size} reveal`}>
      <span className="section-heading__number">{number}</span>
      <h2 className="section-heading__title">{children}</h2>
      {aside && <div className="section-heading__aside">{aside}</div>}
    </div>
  );
}

export default SectionHeading;
