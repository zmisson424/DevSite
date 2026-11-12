import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { HAVENSIGHT } from "../../data/experience";
import H1Showcase from "./H1Showcase";
import "./DayJob.css";

/** 01 — The day job: Havensight on the left, H1 dropping in lower on the right. */
function DayJob() {
  return (
    <section id="work" className="day-job page-container">
      <SectionHeading number="01" aside="Where I work full time, and the platform I built there.">
        The day <em>job</em>
      </SectionHeading>

      <div className="day-job__row">
        <div className="day-job__employer reveal">
          <p className="mono-label">{HAVENSIGHT.dates}</p>
          <h3 className="day-job__company">{HAVENSIGHT.company}</h3>
          <p className="day-job__role">{HAVENSIGHT.role}</p>
          <p className="day-job__summary">{HAVENSIGHT.summary}</p>
        </div>

        <div className="day-job__product reveal">
          <H1Showcase />
        </div>
      </div>
    </section>
  );
}

export default DayJob;
