import EmberAndAshLogo from "../../components/EmberAndAshLogo/EmberAndAshLogo";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import ThreadMarker from "../../components/ThreadMarker/ThreadMarker";
import { EMBER_AND_ASH_URL, STRING_THEORY_LINKS } from "../../data/links";
import { EMBER_AND_ASH, STRING_THEORY } from "../../data/projects";
import StringTheoryPhone from "./StringTheoryPhone";
import "./MyCompany.css";

/** 03 — My company & apps: Ember & Ash on the right, threading into StringTheory on the left. */
function MyCompany() {
  return (
    <section id="mine" className="my-company">
      <div className="my-company__inner page-container">
        <SectionHeading number="03" aside="What I build on my own time, under my own name.">
          My company <em>&amp; apps</em>
        </SectionHeading>

        <div className="my-company__row">
          <div className="my-company__studio reveal">
            <EmberAndAshLogo />
            <h3 className="my-company__studio-name">
              Ember <span className="display-italic">&amp;</span> Ash
            </h3>
            <p className="my-company__studio-meta mono-label">{EMBER_AND_ASH.meta}</p>
            <p className="my-company__studio-summary">{EMBER_AND_ASH.summary}</p>
            <a href={EMBER_AND_ASH_URL} className="my-company__studio-link underline-link">
              emberandash.dev ↗
            </a>
            <ThreadMarker>← owns and ships StringTheory</ThreadMarker>
          </div>

          <div className="my-company__app reveal">
            <div className="my-company__phone-stage">
              <StringTheoryPhone />
            </div>

            <div className="my-company__app-text">
              <p className="mono-label">{STRING_THEORY.eyebrow}</p>
              <h3 className="my-company__app-name">
                String<span className="display-italic">Theory</span>
              </h3>
              <p className="my-company__app-pitch">{STRING_THEORY.pitch}</p>
              <p className="my-company__app-detail">{STRING_THEORY.howItWasBuilt}</p>

              <p className="my-company__store-links">
                {STRING_THEORY_LINKS.map((storeLink) => (
                  <a key={storeLink.label} href={storeLink.url} className="underline-link">
                    {storeLink.label}
                  </a>
                ))}
              </p>

              <div className="my-company__next-up">
                <p className="mono-label">next from Ember &amp; Ash</p>
                <p className="my-company__next-up-text">Still smoldering.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyCompany;
