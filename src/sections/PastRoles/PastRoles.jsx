import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { PAST_ROLES } from "../../data/experience";
import { RESUME_URL } from "../../data/links";
import "./PastRoles.css";

/** 02 — Before that: a compact, stepped list of earlier roles. */
function PastRoles() {
  const resumeLink = (
    <a href={RESUME_URL} className="past-roles__resume-link underline-link">
      the full résumé ↓
    </a>
  );

  return (
    <section id="before" className="past-roles page-container">
      <SectionHeading number="02" size="compact" aside={resumeLink}>
        Before that
      </SectionHeading>

      <div>
        {PAST_ROLES.map((pastRole, roleIndex) => (
          <div
            key={pastRole.company}
            className="past-roles__row reveal"
            style={{ "--step": roleIndex }}
          >
            <span className="past-roles__dates">{pastRole.dates}</span>
            <span>
              <span className="past-roles__company">{pastRole.company}</span>
              <span className="past-roles__role">{pastRole.role}</span>
            </span>
            <span className="past-roles__summary">{pastRole.summary}</span>
            <span className="past-roles__stack">{pastRole.stack.join(" · ")}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PastRoles;
