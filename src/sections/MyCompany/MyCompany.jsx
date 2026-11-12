import EmberAndAshLogo from "../../components/EmberAndAshLogo/EmberAndAshLogo";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { EMBER_AND_ASH_URL } from "../../data/links";
import { EMBER_AND_ASH, PUBLISHED_APPS } from "../../data/projects";
import AppEntry from "./AppEntry";
import "./MyCompany.css";

/**
 * 03 — My company & apps.
 * Off-grid: the company (Ember & Ash) sits top right, and the apps it publishes
 * drop in lower on the left as their own list.
 */
function MyCompany() {
  const appCountLabel = String(PUBLISHED_APPS.length).padStart(2, "0");

  return (
    <section id="mine" className="my-company">
      <div className="my-company__inner page-container">
        <SectionHeading number="03" aside="What I build on my own time, under my own name.">
          My company <em>&amp; apps</em>
        </SectionHeading>

        <div className="my-company__row">
          <div className="my-company__company reveal">
            <p className="my-company__column-label">the company</p>
            <EmberAndAshLogo />
            <h3 className="my-company__company-name">
              Ember <span className="display-italic">&amp;</span> Ash
            </h3>
            <p className="my-company__company-meta mono-label">{EMBER_AND_ASH.meta}</p>
            <p className="my-company__company-summary">{EMBER_AND_ASH.summary}</p>
            <a href={EMBER_AND_ASH_URL} className="my-company__company-link underline-link">
              emberandash.dev ↗
            </a>
          </div>

          <div className="my-company__apps reveal">
            <p className="my-company__column-label">
              the apps <span className="my-company__app-count">{appCountLabel}</span>
            </p>
            {PUBLISHED_APPS.map((app) => (
              <AppEntry key={app.id} app={app} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyCompany;
