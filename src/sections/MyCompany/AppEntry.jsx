import StringTheoryPhone from "./StringTheoryPhone";
import "./AppEntry.css";

// Device mockups by id, so app data can name its mockup without importing components.
const APP_MOCKUPS = {
  stringTheoryPhone: StringTheoryPhone,
};

/** One published app: its device mockup beside the name, pitch and store links. */
function AppEntry({ app }) {
  const Mockup = APP_MOCKUPS[app.mockupId];

  return (
    <article className="app-entry">
      {Mockup && (
        <div className="app-entry__mockup-stage">
          <Mockup />
        </div>
      )}

      <div className="app-entry__text">
        {app.logo && <img src={app.logo} alt="" className="app-entry__logo" />}
        <p className="mono-label">{app.eyebrow}</p>
        <h3 className="app-entry__name">
          {app.name.plainPart}
          <span className="display-italic">{app.name.italicPart}</span>
        </h3>
        <p className="app-entry__pitch">{app.pitch}</p>
        <p className="app-entry__detail">{app.howItWasBuilt}</p>

        <p className="app-entry__links">
          {app.links.map((appLink) =>
            appLink.isComingSoon ? (
              <span key={appLink.label} className="app-entry__link--soon">
                {appLink.label} <span className="app-entry__soon-tag">soon</span>
              </span>
            ) : (
              <a
                key={appLink.label}
                href={appLink.url}
                className="underline-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {appLink.label}
              </a>
            ),
          )}
        </p>
      </div>
    </article>
  );
}

export default AppEntry;
